# Email Setup Instructions

## Current Implementation
The contact form is currently set up with a **fallback to mailto** which opens the user's default email client with pre-filled information.

## To Enable Direct Email Sending

### Option 1: Web3Forms (Recommended - Free)
1. Go to https://web3forms.com/
2. Sign up for a free account
3. Create a new form and get your access key
4. Replace `YOUR_ACCESS_KEY_HERE` in `src/pages/Contact.js` line 32 with your actual access key
5. The form will automatically send emails to `maitydebanjan2024@gmail.com`

### Option 2: EmailJS (Alternative)
1. Go to https://emailjs.com/
2. Create an account and set up a service
3. Create an email template
4. Get your service ID, template ID, and public key
5. Uncomment the EmailJS code in `src/pages/Contact.js` and replace the placeholder values

## Current Behavior
- When user clicks "Send Message", it opens their default email client
- The email is pre-filled with all the form data
- User needs to manually send the email from their email client
- This ensures email delivery without requiring API keys

## Benefits of Current Setup
- Works immediately without any setup
- No API keys required
- No monthly limits
- Always works regardless of service availability
- User can review the email before sending

## Form Fields
- Full Name (required)
- Email Address (required)
- Mobile Number (optional)
- Email Subject (required)
- Message (required)

All emails will be sent to: **maitydebanjan2024@gmail.com**
