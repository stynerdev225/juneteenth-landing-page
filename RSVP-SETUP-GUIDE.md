# RSVP Integration Setup Guide

This guide will help you complete the Google Sheets integration for the Juneteenth RSVP functionality.

## 📋 Prerequisites

1. **Google Account** with access to Google Sheets and Google Apps Script
2. **Google Spreadsheet**: "Portal Writing Juneteenth RSVP" 
   - URL: https://docs.google.com/spreadsheets/d/1b2x4ermB32lLcDcglOZtgB9-FSMPNzB-R7WT_t-ahLg/edit?gid=0#gid=0

## 🚀 Step-by-Step Setup

### Step 1: Set Up Google Apps Script

1. **Open Google Apps Script**
   - Go to [script.google.com](https://script.google.com/)
   - Click "New Project"

2. **Create the Project**
   - Name it: "Portal Writing RSVP Handler"
   - Delete the default `myFunction()` code

3. **Add the RSVP Handler Code**
   - Copy the code from `/google-apps-script/RSVP-Handler.js` in this project
   - Paste it into the Apps Script editor
   - The spreadsheet ID is already configured in the code

4. **Deploy as Web App**
   - Click "Deploy" → "New deployment"
   - Click the gear icon next to "Type" and select "Web app"
   - Configure:
     - **Description**: "RSVP Handler for Juneteenth Event"
     - **Execute as**: "Me"
     - **Who has access**: "Anyone"
   - Click "Deploy"
   - **Important**: Copy the Web App URL (you'll need this for Step 2)

5. **Grant Permissions**
   - The first time you deploy, you'll need to authorize the script
   - Click "Review permissions" and follow the prompts
   - Grant access to Google Sheets

### Step 2: Update the Frontend

1. **Create Environment File**
   ```bash
   # In your project root, create .env.local
   echo "NEXT_PUBLIC_APPS_SCRIPT_URL=YOUR_WEB_APP_URL_HERE" > .env.local
   ```

2. **Replace YOUR_WEB_APP_URL_HERE** with the actual URL from Step 1

### Step 3: Test the Integration

1. **Start the Development Server**
   ```bash
   pnpm dev
   ```

2. **Test RSVP Submission**
   - Open the website
   - Click any "RSVP Now" button
   - Fill out the form with test data
   - Submit and verify:
     - Success message appears
     - Data appears in Google Sheets

### Step 4: Verify Google Sheets Structure

The Apps Script will automatically create a sheet called "RSVPs" with these columns:
- **Timestamp**: When the RSVP was submitted
- **First Name**: Registrant's first name
- **Last Name**: Registrant's last name  
- **Guest Count**: Number of people attending (including registrant)
- **Total Attendees**: Same as guest count
- **Email**: Optional field for future use
- **Submission Date**: Formatted date of submission

## 🔧 Troubleshooting

### Common Issues:

1. **"Failed to submit RSVP" Error**
   - Check that the Apps Script web app URL is correct in `.env.local`
   - Verify the Apps Script deployment is set to "Anyone" access
   - Check browser console for detailed error messages

2. **CORS Errors**
   - This shouldn't happen with Apps Script, but if it does, verify the deployment settings

3. **Google Sheets Not Updating**
   - Check the Apps Script execution logs
   - Verify the spreadsheet ID in the Apps Script code
   - Ensure the script has permission to edit the spreadsheet

### Testing the Apps Script Directly:

1. In the Apps Script editor, run the `testRSVPSubmission()` function
2. Check the execution log for any errors
3. Verify test data appears in the Google Sheet

## 📊 Monitoring RSVPs

### View RSVPs:
- Open the Google Spreadsheet
- Check the "RSVPs" tab for all submissions

### Get RSVP Count:
- In Apps Script, you can run `getTotalRSVPs()` function to get totals
- This returns both number of RSVPs and total attendee count

## 🔒 Security Notes

- The Apps Script web app is set to "Anyone" access for public RSVP submission
- No sensitive data is collected in the basic form
- All submissions are logged with timestamps for accountability

## 📝 Future Enhancements

Possible improvements you could add:
- Email notifications for new RSVPs
- RSVP confirmation emails to attendees
- Event capacity limits with waitlist functionality
- Admin dashboard for viewing RSVP analytics

---

**Need Help?**
If you encounter issues, check the Google Apps Script execution logs and browser console for detailed error messages.
