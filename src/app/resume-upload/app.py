import pdfplumber
import re
from flask import Flask, request, jsonify
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def extract_resume_data(pdf_path):
    # Initialize a dictionary to store the extracted data
    resume_data = {
        'name': '',
        'email': '',
        'contactNo': '',
        'jobTitle': '',
        'address': '',
        'socialProfile': '',
        'professionalSummary': ''
    }
    
    try:
        # Open the PDF using pdfplumber and read text from each page
        with pdfplumber.open(pdf_path) as pdf:
            text = "\n".join(page.extract_text() for page in pdf.pages if page.extract_text())

        # Now we can extract specific fields from the text
        resume_data['name'] = extract_name(text)
        resume_data['email'] = extract_email(text)
        resume_data['contactNo'] = extract_contact_number(text)
        resume_data['jobTitle'] = extract_job_title(text)
        resume_data['address'] = extract_address(text)
        resume_data['socialProfile'] = extract_social_profile(text)
        resume_data['professionalSummary'] = extract_professional_summary(text)

    except Exception as e:
        print(f"Error in extracting resume data: {e}")
        return {'message': 'Error processing the resume', 'error': str(e)}

    return resume_data

# Basic extraction functions using regex
def extract_name(text):
    name_match = re.search(r'\b[A-Z][a-z]+ [A-Z][a-z]+\b', text)  # Simple regex for name
    return name_match.group(0) if name_match else 'Name not found'

def extract_email(text):
    match = re.search(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b', text)
    return match.group(0) if match else 'Email not found'

def extract_contact_number(text):
    match = re.search(r'\b\d{10}\b', text)  # Basic phone number format (10 digits)
    return match.group(0) if match else 'Contact number not found'

def extract_job_title(text):
    match = re.search(r'\b(position|job title|role)\b', text, re.IGNORECASE)
    return match.group(0) if match else 'Job title not found'

def extract_address(text):
    match = re.search(r'\b(address|location)\b', text, re.IGNORECASE)
    return match.group(0) if match else 'Address not found'

def extract_social_profile(text):
    match = re.search(r'https?://[a-zA-Z0-9.-]+(?:/[\w-]+)*', text)  # LinkedIn or GitHub URLs
    return match.group(0) if match else 'Social profile not found'

def extract_professional_summary(text):
    match = re.search(r'\b(summary|profile|about)\b', text, re.IGNORECASE)
    return match.group(0) if match else 'No summary found'

@app.route('/upload_resume', methods=['POST'])
def upload_resume():
    if 'file' not in request.files:
        return jsonify({'message': 'No file part'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'message': 'No selected file'}), 400

    file_path = 'uploaded_resume.pdf'

    try:
        # Save the file temporarily
        file.save(file_path)

        # Extract data from the PDF
        extracted_data = extract_resume_data(file_path)

        return jsonify(extracted_data)

    except Exception as e:
        return jsonify({'message': 'Error processing the resume', 'error': str(e)}), 500

    finally:
        # Ensure the file is removed after processing
        if os.path.exists(file_path):
            os.remove(file_path)

if __name__ == '__main__':
    app.run(debug=True)
