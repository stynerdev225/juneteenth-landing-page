# 🔄 UPDATED RSVP SYSTEM - NEW DEPLOYMENT

## ✅ **UPDATED CONFIGURATION:**

### **📊 Google Sheets Information:**
- **Name:** Portal Writing Juneteenth RSVP
- **URL:** https://docs.google.com/spreadsheets/d/1b2x4ermB32lLcDcglOZtgB9-FSMPNzB-R7WT_t-ahLg/edit?gid=0#gid=0
- **Sheet ID:** `1b2x4ermB32lLcDcglOZtgB9-FSMPNzB-R7WT_t-ahLg`

### **🚀 Apps Script Information:**
- **Project Name:** Portal Writing RSVP Handler
- **NEW Deployment ID:** `AKfycbzUpRrFPmOHYoKJJnnqQKoasfjA0yOLR3gYVUaKOy4_4tEPse4HZYWBwbu4_4Pg1l4`
- **NEW Web App URL:** `https://script.google.com/macros/s/AKfycbzUpRrFPmOHYoKJJnnqQKoasfjA0yOLR3gYVUaKOy4_4tEPse4HZYWBwbu4_4Pg1l4/exec`

---

## 🔄 **WHAT'S BEEN UPDATED:**

### **✅ Environment Configuration:**
- Updated `.env.local` with new Apps Script URL
- Development server restarted to pick up new environment variable

### **✅ Apps Script File:**
- Created updated `RSVP-Handler-NEW.js` with new deployment information
- All comments and metadata updated with new URLs

### **✅ Development Server:**
- Running on: **http://localhost:3001** (port 3000 was in use)
- Environment variables loaded successfully

---

## 📋 **COPY THIS APPS SCRIPT CODE:**

**File:** `google-apps-script/RSVP-Handler-NEW.js`

```javascript
/**
 * Google Apps Script for Portal Writing Juneteenth RSVP
 * 
 * Project: Portal Writing RSVP Handler
 * Spreadsheet: Portal Writing Juneteenth RSVP
 * Spreadsheet ID: 1b2x4ermB32lLcDcglOZtgB9-FSMPNzB-R7WT_t-ahLg
 * Deployment ID: AKfycbzUpRrFPmOHYoKJJnnqQKoasfjA0yOLR3gYVUaKOy4_4tEPse4HZYWBwbu4_4Pg1l4
 * Web App URL: https://script.google.com/macros/s/AKfycbzUpRrFPmOHYoKJJnnqQKoasfjA0yOLR3gYVUaKOy4_4tEPse4HZYWBwbu4_4Pg1l4/exec
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

// Optional: Add a GET handler for testing
function doGet() {
  return ContentService.createTextOutput('Portal Writing Juneteenth RSVP Handler is running. Use POST requests to submit RSVPs.');
}

// Optional: Test function you can run in the Apps Script editor
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

// Utility function to get RSVP statistics
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
    
    Logger.log('Total RSVPs: ' + (lastRow - 1) + ', Total Guests: ' + totalGuests);
    
    return {
      totalRSVPs: lastRow - 1, // Subtract header row
      totalGuests: totalGuests
    };
    
  } catch (error) {
    Logger.log('Error getting RSVP totals: ' + error.message);
    return { error: error.message };
  }
}
```

---

## 🎯 **READY TO TEST:**

1. **Website URL:** http://localhost:3001
2. **Apps Script URL:** https://script.google.com/macros/s/AKfycbzUpRrFPmOHYoKJJnnqQKoasfjA0yOLR3gYVUaKOy4_4tEPse4HZYWBwbu4_4Pg1l4/exec
3. **Google Sheet:** https://docs.google.com/spreadsheets/d/1b2x4ermB32lLcDcglOZtgB9-FSMPNzB-R7WT_t-ahLg/edit?gid=0#gid=0

**Your RSVP system is ready with the new deployment! 🚀**
