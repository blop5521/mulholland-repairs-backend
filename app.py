import os
import sys
sys.path.insert(0, os.path.dirname(__file__))

from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'asdf#FGSgvasgf$5$WGT')

# Enable CORS for all routes - allow your frontend domain
CORS(app, origins=['https://mulhollandrepairs.com', 'https://www.mulhollandrepairs.com', 'https://mulhollandrepairs.netlify.app'])

def append_to_sheet(sheet_name, data):
    """Simulate appending data to a Google Sheet"""
    print(f"Would append to {sheet_name}: {data}")
    return True

@app.route('/api/forms/repair', methods=['POST'])
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
        success = append_to_sheet('Surfboard Shower Orders', sheet_data)
        
        if success:
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

@app.route('/')
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'message': 'Mulholland Repairs API is running'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)

