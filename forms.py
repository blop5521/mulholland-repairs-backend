import os
import json
from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename

forms_bp = Blueprint('forms', __name__)

# Google Sheets configuration - optional import
try:
    import gspread
    from google.oauth2.service_account import Credentials
    GSPREAD_AVAILABLE = True
except ImportError:
    GSPREAD_AVAILABLE = False

# Google Sheets configuration
SCOPES = ['https://www.googleapis.com/spreadsheets/scopes/auth/spreadsheets']

def get_google_sheets_client():
    """Initialize Google Sheets client with service account credentials"""
    try:
        # For demo purposes, we'll simulate the Google Sheets integration
        # In production, you would use actual service account credentials
        return None
    except Exception as e:
        print(f"Error initializing Google Sheets client: {e}")
        return None

def append_to_sheet(sheet_name, data):
    """Append data to a Google Sheet"""
    try:
        # For demo purposes, we'll just log the data
        print(f"Would append to {sheet_name}: {data}")
        return True
    except Exception as e:
        print(f"Error appending to sheet: {e}")
        return False

@forms_bp.route('/repair', methods=['POST'])
def submit_repair_form():
    """Handle repair form submissions"""
    try:
        data = request.get_json()
        
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
            'Images uploaded' if data.get('images') else 'No images'
        ]
        
        # Append to Google Sheets
        success = append_to_sheet('Repair Requests', sheet_data)
        
        if success:
            return jsonify({'message': 'Repair request submitted successfully'}), 200
        else:
            return jsonify({'error': 'Failed to submit request'}), 500
            
    except Exception as e:
        print(f"Error in repair form submission: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@forms_bp.route('/surfboard-showers', methods=['POST'])
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
        success = append_to_sheet('Surfboard Shower Orders', sheet_data)
        
        if success:
            return jsonify({'message': 'Surfboard shower order submitted successfully'}), 200
        else:
            return jsonify({'error': 'Failed to submit order'}), 500
            
    except Exception as e:
        print(f"Error in surfboard shower form submission: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@forms_bp.route('/high-voltage-art', methods=['POST'])
def submit_high_voltage_art_form():
    """Handle high voltage art form submissions"""
    try:
        data = request.get_json()
        
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
            'Images uploaded' if data.get('images') else 'No images'
        ]
        
        # Append to Google Sheets
        success = append_to_sheet('High Voltage Art Projects', sheet_data)
        
        if success:
            return jsonify({'message': 'Art project submitted successfully'}), 200
        else:
            return jsonify({'error': 'Failed to submit project'}), 500
            
    except Exception as e:
        print(f"Error in high voltage art form submission: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@forms_bp.route('/upload', methods=['POST'])
def upload_file():
    """Handle file uploads"""
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file provided'}), 400
        
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        
        if file:
            filename = secure_filename(file.filename)
            # In production, you would save to a proper storage service
            # For demo, we'll just return success
            return jsonify({'message': 'File uploaded successfully', 'filename': filename}), 200
            
    except Exception as e:
        print(f"Error in file upload: {e}")
        return jsonify({'error': 'File upload failed'}), 500

