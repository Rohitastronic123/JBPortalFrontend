import os
import smtplib
import time
from flask import Flask, request, jsonify
from flask_cors import CORS
import socks
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# Set proxy environment variables (if needed)
os.environ['http_proxy'] = 'http://mdproxypac.ds.indianoil.in:8080/'
os.environ['https_proxy'] = 'http://mdproxypac.ds.indianoil.in:8080/'

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins

# Proxy configuration
PROXY_HOST = "mdproxy.ds.indianoil.in"
PROXY_PORT = 8080
PROXY_TYPE = socks.SOCKS5  # Assuming SOCKS5; update as needed

# Email server configuration
SMTP_SERVER = '10.26.32.190'  # Replace with actual SMTP server IP
SMTP_PORT = 465  # Typically 465 for SSL
SENDER_EMAIL = "Rohit1000me1@gmail.com"
SENDER_PASSWORD = "Rohit@20030329"

@app.route('/send-mail', methods=['POST'])
def send_mail():
    print("Request received at /send-mail")
    start_time = time.time()  # Start timing

    data = request.json
    recipient_email = data.get("recipient_email")
    subject = data.get("subject", "Login Notification")
    body = data.get("body", "You have successfully logged in.")

    if not recipient_email:
        return jsonify({"error": "Recipient email is required"}), 400

    # Log time taken for request parsing
    print(f"Parsed request data in {time.time() - start_time} seconds")

    try:
        # Set up email message
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = recipient_email
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))
        
        # Set up proxy socket directly
        proxy_start = time.time()
        sock = socks.socksocket()
        sock.set_proxy(PROXY_TYPE, PROXY_HOST, PROXY_PORT)
        sock.connect((SMTP_SERVER, SMTP_PORT))
        print(f"Connected to SMTP server via proxy in {time.time() - proxy_start} seconds")

        # SMTP_SSL connection with the proxied socket
        smtp_start = time.time()
        server = smtplib.SMTP_SSL()
        server.sock = sock  # Use the proxied socket
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        print(f"Logged into SMTP server in {time.time() - smtp_start} seconds")

        # Send email
        send_start = time.time()
        server.sendmail(SENDER_EMAIL, recipient_email, msg.as_string())
        server.quit()
        print(f"Sent email and closed connection in {time.time() - send_start} seconds")

        total_time = time.time() - start_time
        print(f"Total time taken for send-mail request: {total_time} seconds")

        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
