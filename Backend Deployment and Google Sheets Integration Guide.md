# Backend Deployment and Google Sheets Integration Guide

## Overview

This guide explains how to deploy the backend of your Mulholland Repairs website and integrate it with Google Sheets for form data collection. Due to security restrictions in the sandboxed environment, direct deployment of the backend with live Google Sheets API access was not feasible during development. However, the backend code is ready for deployment on a suitable platform.

## Backend Technology

The backend is a lightweight Flask application (`app.py`) designed to handle form submissions from your website. It includes endpoints for:

- `/api/forms/repair`
- `/api/forms/surfboard-showers`
- `/api/forms/high-voltage-art`

It also includes a simulated `append_to_sheet` function that, in a production environment, would write data directly to your specified Google Sheets.

## Google Sheets Integration

The backend is designed to integrate with Google Sheets using the `gspread` and `google-auth` libraries. To make this work, you will need to set up Google Cloud Platform credentials.

### Step 1: Prepare Your Google Sheets

Ensure you have three Google Sheets created with the following names and initial columns:

1.  **Sheet Name**: `Repair Requests`
    **Columns**: `Name`, `Email`, `Phone`, `Description`, `Images`

2.  **Sheet Name**: `Surfboard Shower Orders`
    **Columns**: `Name`, `Email`, `Valve`, `Shape`, `Wood`, `Length`

3.  **Sheet Name**: `High Voltage Art Projects`
    **Columns**: `Name`, `Email`, `Phone`, `Notes`, `Images`

### Step 2: Set Up Google Cloud Project and Service Account

1.  **Go to Google Cloud Console**: Navigate to [console.cloud.google.com](https://console.cloud.google.com/).
2.  **Create a New Project**: If you don't have one, create a new project.
3.  **Enable Google Sheets API**: In your project, go to `APIs & Services > Library` and search for "Google Sheets API". Enable it.
4.  **Create Service Account Credentials**: 
    - Go to `APIs & Services > Credentials`.
    - Click `+ Create Credentials` and select `Service account`.
    - Follow the prompts to create a new service account. Grant it the `Editor` role (or a more specific role if you prefer, like `Google Sheets API Editor`).
    - After creation, click on the service account email address.
    - Go to the `Keys` tab and click `Add Key > Create new key`.
    - Select `JSON` as the key type and click `Create`.
    - A JSON file will be downloaded to your computer. **Keep this file secure and do not share it publicly.** This file contains your service account credentials.

### Step 3: Share Google Sheets with Service Account

1.  Open each of your three Google Sheets (`Repair Requests`, `Surfboard Shower Orders`, `High Voltage Art Projects`).
2.  Click the `Share` button.
3.  In the sharing dialog, add the email address of your newly created service account (it will look something like `your-service-account-name@your-project-id.iam.gserviceaccount.com`).
4.  Grant the service account `Editor` access to each sheet.

### Step 4: Update Backend Code with Credentials

1.  **Place the JSON key file**: Upload the downloaded JSON key file (e.g., `my-service-account.json`) to the root directory of your backend application (e.g., `/home/ubuntu/mulholland-backend/`).
2.  **Modify `app.py`**: Open the `app.py` file in your backend project. You will need to uncomment and modify the `get_google_sheets_client` and `append_to_sheet` functions to use your actual credentials. 

    **Original (simulated) code in `app.py` (or `src/routes/forms.py` if you use the original structure)**:
    ```python
    # ... (imports)
    import gspread
    from google.oauth2.service_account import Credentials

    # ...

    def get_google_sheets_client():
        """Initialize Google Sheets client with service account credentials"""
        try:
            # For demo purposes, we'll simulate the Google Sheets integration
            # In production, you would use actual service account credentials
            return None # This line needs to be changed
        except Exception as e:
            print(f"Error initializing Google Sheets client: {e}")
            return None

    def append_to_sheet(sheet_name, data):
        """Append data to a Google Sheet"""
        try:
            # For demo purposes, we'll just log the data
            print(f"Would append to {sheet_name}: {data}") # This line needs to be changed
            return True
        except Exception as e:
            print(f"Error appending to sheet: {e}")
            return False
    ```

    **Modified code (example)**:
    ```python
    # ... (imports)
    import gspread
    from google.oauth2.service_account import Credentials

    # Path to your service account key file
    SERVICE_ACCOUNT_FILE = 'my-service-account.json' # Make sure this matches your file name

    def get_google_sheets_client():
        """Initialize Google Sheets client with service account credentials"""
        try:
            creds = Credentials.from_service_account_file(
                SERVICE_ACCOUNT_FILE, scopes=SCOPES)
            client = gspread.authorize(creds)
            return client
        except Exception as e:
            print(f"Error initializing Google Sheets client: {e}")
            return None

    def append_to_sheet(sheet_name, data):
        """Append data to a Google Sheet"""
        client = get_google_sheets_client()
        if not client:
            return False
        try:
            sheet = client.open(sheet_name).sheet1 # Or specify sheet by index/name if not sheet1
            sheet.append_row(data)
            return True
        except Exception as e:
            print(f"Error appending to sheet: {e}")
            return False
    ```

    **Important**: Replace `my-service-account.json` with the actual filename of your downloaded JSON key.

## Backend Deployment Options

Since the backend handles form submissions and interacts with Google Sheets, it needs to be deployed to a server that can run Python applications and has internet access.

### Option 1: Heroku (Recommended for simple Flask apps)

Heroku is a cloud platform that lets you deploy, run, and manage applications. It has a free tier that might be suitable for low-traffic sites.

1.  **Sign up for Heroku**: Go to [heroku.com](https://www.heroku.com/) and create an account.
2.  **Install Heroku CLI**: Follow the instructions on Heroku's website to install the command-line interface.
3.  **Login to Heroku CLI**: `heroku login`
4.  **Create a `Procfile`**: In the root of your `mulholland-backend` directory, create a file named `Procfile` (no extension) with the following content:
    ```
    web: gunicorn app:app
    ```
    (If your main Flask app is in `src/main.py`, it would be `web: gunicorn src.main:app`)
5.  **Create `requirements.txt`**: Ensure your `requirements.txt` file (located in `mulholland-backend/`) lists all Python dependencies, including `Flask`, `Flask-CORS`, `gunicorn`, `gspread`, and `google-auth`. You can generate this by running `pip freeze > requirements.txt` in your activated virtual environment.
6.  **Initialize Git and Push to Heroku**: 
    ```bash
    cd /path/to/your/mulholland-backend
    git init
    heroku git:remote -a your-app-name # Replace your-app-name with a unique name
    git add .
    git commit -m "Initial backend deploy"
    git push heroku master
    ```
7.  **Set Environment Variables**: You might need to set environment variables for your service account key or other sensitive information. Heroku allows you to do this via `heroku config:set GOOGLE_APPLICATION_CREDENTIALS=/app/my-service-account.json` (adjust path as needed).

### Option 2: Render (Similar to Heroku, often more generous free tier)

Render is another popular platform for deploying web services. It supports Python applications and offers a free tier.

1.  **Sign up for Render**: Go to [render.com](https://render.com/) and create an account.
2.  **Connect Git Repository**: Connect your backend Git repository (e.g., GitHub, GitLab).
3.  **Create a New Web Service**: Choose `Web Service` and select your repository.
4.  **Configure Build and Start Commands**: 
    - **Build Command**: `pip install -r requirements.txt`
    - **Start Command**: `gunicorn app:app` (or `gunicorn src.main:app`)
5.  **Set Environment Variables**: Add your service account JSON content as an environment variable or upload the file directly.

### Option 3: Virtual Private Server (VPS) / Cloud Provider (e.g., AWS, Google Cloud, Azure)

For more control and scalability, you can deploy to a VPS or a major cloud provider. This requires more technical expertise in server management.

1.  **Provision a server**: Set up a Linux server (e.g., Ubuntu).
2.  **Install Python and dependencies**: Install Python, pip, and all required libraries.
3.  **Install a WSGI server**: Use Gunicorn or uWSGI to serve your Flask application.
4.  **Set up a reverse proxy**: Configure Nginx or Apache to proxy requests to your Flask app.
5.  **Configure SSL/TLS**: Secure your application with HTTPS.
6.  **Manage processes**: Use a process manager like Systemd or Supervisor to keep your Flask app running.

## Connecting Frontend to Backend

Once your backend is deployed and running, you will get a public URL for your API (e.g., `https://your-backend-app.herokuapp.com`). You need to update your frontend to send form submissions to this new URL.

1.  **Open Frontend Code**: In your `mulholland-repairs` project, open the JavaScript files for your forms (e.g., `src/pages/RepairPage.jsx`, `src/pages/SurfboardShowersPage.jsx`, `src/pages/HighVoltageArtPage.jsx`).
2.  **Update API Endpoints**: Locate the `fetch` or `axios` calls that send data to the backend. Change the URL from a relative path (e.g., `/api/forms/repair`) to your full backend API URL (e.g., `https://your-backend-app.herokuapp.com/api/forms/repair`).

    **Example (in your React component)**:
    ```javascript
    // Before (local/relative)
    const response = await fetch('/api/forms/repair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });

    // After (production)
    const response = await fetch('https://your-backend-app.herokuapp.com/api/forms/repair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });
    ```
3.  **Rebuild Frontend**: After updating the API URLs, rebuild your React frontend:
    ```bash
    cd /path/to/your/mulholland-repairs
    npm run build
    ```
4.  **Redeploy Frontend**: Upload the newly built `dist` folder to your static hosting service (Netlify, Vercel, etc.).

## Testing and Verification

After deploying both the frontend and backend:

1.  **Access your live website** (the permanent URL from your static frontend host).
2.  **Fill out each form** and submit it.
3.  **Check your Google Sheets** to ensure the data is being recorded correctly.
4.  **Monitor backend logs** for any errors during form submission.

## Ongoing Maintenance

-   **Monitor Google Sheets**: Regularly check your sheets for new submissions.
-   **Backend Updates**: If you make changes to the backend logic, remember to redeploy your backend application.
-   **Frontend Updates**: For any changes to the website's appearance or client-side logic, rebuild and redeploy the frontend.
-   **Security**: Keep your service account JSON file secure. Do not commit it to public Git repositories.

This comprehensive setup ensures your website is fully functional, collecting data, and easily maintainable for future updates. If you need further assistance with any of these steps, feel free to ask!

