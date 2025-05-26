/**
 * Google Apps Script for handling Juneteenth RSVP submissions
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com/
 * 2. Create a new project called "Portal Writing RSVP Handler"
 * 3. Replace the default code with this script
 * 4. Update the SPREADSHEET_ID constant below with your actual spreadsheet ID
 * 5. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Choose "Web app" as the type
 *    - Set execute as "Me" 
 *    - Set access to "Anyone"
 *    - Click "Deploy"
 * 6. Copy the web app URL and update it in the RSVP form component
 */

// Replace with your actual Google Sheets ID from the URL
// Current URL: https://docs.google.com/spreadsheets/d/1b2x4ermB32lLcDcglOZtgB9-FSMPNzB-R7WT_t-ahLg/edit?gid=0#gid=0
const SPREADSHEET_ID = '1b2x4ermB32lLcDcglOZtgB9-FSMPNzB-R7WT_t-ahLg';
const SHEET_NAME = 'RSVPs'; // You can change this if needed

/**
 * Handles GET requests (optional - for testing)
 */
function doGet() {
  return ContentService.createTextOutput('RSVP Handler is running. Use POST requests to submit RSVPs.');
}

/**
 * Handles POST requests from the RSVP form
 */
function doPost(e) {
  try {
    // Get active spreadsheet
    var ss = SpreadsheetApp.openById('1b2x4ermB32lLcDcglOZtgB9-FSMPNzB-R7WT_t-ahLg');
    var sheet = ss.getSheets()[0];

    // Check if sheet has headers, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Guest Count', 'Total Attendees']);
      
      // Format headers
      var headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#f0f0f0');
    }

    // Parse POST data from your RSVP form
    var data = JSON.parse(e.postData.contents);

    // Get the data fields that your form sends
    var firstName = data.firstName || '';
    var lastName = data.lastName || '';
    var guestCount = parseInt(data.guestCount) || 1;
    var timestamp = new Date();

    // Append to sheet with the correct data structure
    sheet.appendRow([timestamp, firstName, lastName, guestCount, guestCount]);

    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 5);

    // Send back success response that matches what your form expects
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: true, 
        message: 'RSVP submitted successfully',
        data: {
          firstName: firstName,
          lastName: lastName,
          guestCount: guestCount,
          submittedAt: timestamp
        }
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Send back error response that matches your form's error handling
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.message 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Function to get total RSVP count
 * This can be called separately if needed for reporting
 */
function getTotalRSVPs() {
  try {
    var ss = SpreadsheetApp.openById('1b2x4ermB32lLcDcglOZtgB9-FSMPNzB-R7WT_t-ahLg');
    var sheet = ss.getSheets()[0];
    
    var lastRow = sheet.getLastRow();
    if (lastRow <= 1) { // Only headers or empty
      return { totalRSVPs: 0, totalGuests: 0 };
    }
    
    // Get guest count column (column 4)
    var guestCounts = sheet.getRange(2, 4, lastRow - 1, 1).getValues();
    var totalGuests = 0;
    
    for (var i = 0; i < guestCounts.length; i++) {
      totalGuests += parseInt(guestCounts[i][0]) || 0;
    }
    
    return {
      totalRSVPs: lastRow - 1, // Subtract header row
      totalGuests: totalGuests
    };
    
  } catch (error) {
    Logger.log('Error getting RSVP totals: ' + error.message);
    return { error: error.message };
  }
}

/**
 * Test function to verify the script works
 * You can run this in the Apps Script editor to test
 */
function testRSVP() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        firstName: 'Test',
        lastName: 'User',
        guestCount: 2,
        timestamp: new Date().toISOString()
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log('Test result: ' + result.getContent());
}
