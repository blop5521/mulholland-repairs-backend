import os
import sys
import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
sys.path.insert(0, os.path.dirname(__file__))

from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import gspread
from google.oauth2.service_account import Credentials
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'asdf#FGSgvasgf$5$WGT')

# Enable CORS for all routes - allow your frontend domain
CORS(app, origins=['https://mulhollandrepairs.com', 'https://www.mulhollandrepairs.com', 'https://mulhollandrepairs.netlify.app'])

# Google Sheets configuration
SCOPES = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive']

# Email configuration
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = os.environ.get('GMAIL_USER')
SENDER_PASSWORD = os.environ.get('GMAIL_APP_PASSWORD')

def get_google_sheets_client():
    """Initialize Google Sheets client with service account credentials"""
    try:
        # Try to get credentials from environment variable first
        creds_json = os.environ.get('google_sheets_credential')
        if creds_json:
            import json
            creds_dict = json.loads(creds_json)
            creds = Credentials.from_service_account_info(creds_dict, scopes=SCOPES)
            print("Using credentials from environment variable")
        else:
            # Fall back to local JSON file for development
            service_account_file = 'jsonk/mulhollandrepairs-3d2050ada0ed.json'
            if os.path.exists(service_account_file):
                print(f"Using credentials from file: {service_account_file}")
                creds = Credentials.from_service_account_file(service_account_file, scopes=SCOPES)
            else:
                print("No Google Sheets credentials found")
                return None
                
        client = gspread.authorize(creds)
        print("Google Sheets client authorized successfully")
        return client
    except Exception as e:
        print(f"Error initializing Google Sheets client: {e}")
        return None

def append_to_sheet(sheet_name, data):
    """Append data to a Google Sheet"""
    client = get_google_sheets_client()
    if not client:
        print("Failed to get Google Sheets client")
        return False
    
    try:
        sheet = client.open(sheet_name).sheet1
        # Add timestamp
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        data.insert(0, timestamp)
        sheet.append_row(data)
        print(f"Successfully appended to {sheet_name}: {data}")
        return True
    except Exception as e:
        print(f"Error appending to sheet: {e}")
        return False

def send_notification_email(form_type, data):
    """Send email notification for form submission"""
    if not SENDER_EMAIL or not SENDER_PASSWORD:
        print("Email credentials not configured - skipping email notification")
        return True  # Return True to not fail the form submission
    
    try:
        # Create message
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = 'mulhollandsurfboards@gmail.com'
        msg['Subject'] = f'New {form_type} Submission - Mulholland Repairs'
        
        # Create email body
        body = f"""
New {form_type} submission received:

"""
        
        for key, value in data.items():
            body += f"{key.title()}: {value}\n"
        
        body += f"\nTimestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Create SSL context
        context = ssl.create_default_context()
        
        # Connect to server and send email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls(context=context)
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(msg)
        
        print(f"Email notification sent for {form_type}")
        return True
        
    except Exception as e:
        print(f"Error sending email notification: {e}")
        return True  # Return True to not fail the form submission

@app.route('/api/forms/repair', methods=['POST'])
def submit_repair_form():
    """Handle repair form submissions"""
    try:
        # Check if this is FormData (with files) or JSON
        if request.content_type and 'multipart/form-data' in request.content_type:
            # Handle FormData request
            data = request.form.to_dict()
            images = request.files.getlist('images')
            has_images = len(images) > 0
        else:
            # Handle JSON request
            data = request.get_json()
            has_images = data.get('images', False)
        
        # Validate required fields
        required_fields = ['name', 'email', 'description']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Prepare data for Google Sheets
        sheet_data = [
            data.get('name'),
            data.get('email'),
            data.get('phone', ''),
            data.get('description'),
            'Images uploaded' if has_images else 'No images'
        ]
        
        # Append to Google Sheets
        sheets_success = append_to_sheet('Mulholland Repairs (Responses)', sheet_data)
        
        # Send email notification
        email_data = {
            'name': data.get('name'),
            'email': data.get('email'),
            'phone': data.get('phone', ''),
            'description': data.get('description'),
            'images': 'Images uploaded' if has_images else 'No images'
        }
        email_success = send_notification_email('Repair Request', email_data)
        
        if sheets_success:
            return jsonify({'message': 'Repair request submitted successfully'}), 200
        else:
            return jsonify({'error': 'Failed to submit request'}), 500
            
    except Exception as e:
        print(f"Error in repair form submission: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/forms/surfboard-showers', methods=['POST'])
def submit_surfboard_shower_form():
    """Handle surfboard shower form submissions"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'valve', 'shape', 'wood', 'length']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Prepare data for Google Sheets
        sheet_data = [
            data.get('name'),
            data.get('email'),
            data.get('valve'),
            data.get('shape'),
            data.get('wood'),
            f"{data.get('length')}'"
        ]
        
        # Append to Google Sheets
        sheets_success = append_to_sheet('Surfboard Shower (Responses)', sheet_data)
        
        # Send email notification
        email_data = {
            'name': data.get('name'),
            'email': data.get('email'),
            'valve': data.get('valve'),
            'shape': data.get('shape'),
            'wood': data.get('wood'),
            'length': f"{data.get('length')}'"
        }
        email_success = send_notification_email('Surfboard Shower Order', email_data)
        
        if sheets_success:
            return jsonify({'message': 'Surfboard shower order submitted successfully'}), 200
        else:
            return jsonify({'error': 'Failed to submit order'}), 500
            
    except Exception as e:
        print(f"Error in surfboard shower form submission: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/forms/high-voltage-art', methods=['POST'])
def submit_high_voltage_art_form():
    """Handle high voltage art form submissions"""
    try:
        # Check if this is FormData (with files) or JSON
        if request.content_type and 'multipart/form-data' in request.content_type:
            # Handle FormData request
            data = request.form.to_dict()
            images = request.files.getlist('images')
            has_images = len(images) > 0
        else:
            # Handle JSON request
            data = request.get_json()
            has_images = data.get('images', False)
        
        # Validate required fields
        required_fields = ['name', 'email', 'notes']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Prepare data for Google Sheets
        sheet_data = [
            data.get('name'),
            data.get('email'),
            data.get('phone', ''),
            data.get('notes'),
            'Images uploaded' if has_images else 'No images'
        ]
        
        # Append to Google Sheets
        sheets_success = append_to_sheet('Mulholland High Voltage (Responses)', sheet_data)
        
        # Send email notification
        email_data = {
            'name': data.get('name'),
            'email': data.get('email'),
            'phone': data.get('phone', ''),
            'notes': data.get('notes'),
            'images': 'Images uploaded' if has_images else 'No images'
        }
        email_success = send_notification_email('High Voltage Art Project', email_data)
        
        if sheets_success:
            return jsonify({'message': 'Art project submitted successfully'}), 200
        else:
            return jsonify({'error': 'Failed to submit project'}), 500
            
    except Exception as e:
        print(f"Error in high voltage art form submission: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/')
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'message': 'Mulholland Repairs API is running'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)

