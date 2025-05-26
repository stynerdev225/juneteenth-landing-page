# 🚀 Apps Script Deployment Guide

## ✅ **YOUR UPDATED APPS SCRIPT CODE IS READY!**

Your corrected Apps Script code is now saved in `google-apps-script/RSVP-Handler.js`.

---

## 📋 **DEPLOYMENT STEPS:**

### **Step 1: Open Your Apps Script Project**
1. Go to [script.google.com](https://script.google.com)
2. Open your existing project: **"Portal Writing RSVP Handler"**

### **Step 2: Replace the Code**
1. **Select all existing code** in the Apps Script editor
2. **Delete it completely**
3. **Copy the entire updated code** from `google-apps-script/RSVP-Handler.js`
4. **Paste it** into the Apps Script editor

### **Step 3: Save and Deploy**
1. **Save** the script (Ctrl+S or Cmd+S)
2. Click **"Deploy"** → **"Manage deployments"**
3. Click the **pencil icon** ✏️ to edit your existing deployment
4. **Increment the version** (or select "New version")
5. Click **"Deploy"**

---

## 🔧 **WHAT THE UPDATED CODE DOES:**

### **✅ Improved Features:**
- **Simplified Logic** - More reliable and faster
- **Better Error Handling** - Clearer error messages
- **Automatic Headers** - Creates headers if sheet is empty
- **Auto-formatting** - Makes the sheet look professional
- **Perfect Match** - Exactly matches your RSVP form data structure

### **📊 Data Structure:**
| Timestamp | First Name | Last Name | Guest Count | Total Attendees |
|-----------|------------|-----------|-------------|-----------------|
| 5/24/2025 3:45 PM | John | Doe | 3 | 3 |

### **🧪 Testing Functions:**
- `testRSVP()` - Test the form submission
- `getTotalRSVPs()` - Get summary statistics

---

## 🎯 **AFTER DEPLOYMENT:**

### **Your Current Configuration:**
- **Spreadsheet ID:** `1b2x4ermB32lLcDcglOZtgB9-FSMPNzB-R7WT_t-ahLg` ✅
- **Web App URL:** `https://script.google.com/macros/s/AKfycbzDyvUvH_BTeJ1ejfJ6mq5gPoUt-GN_NDLQpaSsbUD2cbsyKlfgBGP5vzxcXwfXsLAR/exec` ✅
- **Environment Variable:** Already set in `.env.local` ✅

### **Test the System:**
1. **Visit:** http://localhost:3000
2. **Click RSVP** button
3. **Submit test data**
4. **Check your Google Sheet** for the new entry

---

## 🚨 **IMPORTANT NOTES:**

- **No URL changes needed** - Your existing web app URL will work
- **Existing data safe** - Won't affect any current RSVPs
- **Backwards compatible** - Works with your current frontend
- **Production ready** - Ready for real RSVPs

---

## ✅ **VERIFICATION CHECKLIST:**

- [ ] Code copied to Apps Script editor
- [ ] Script saved successfully  
- [ ] New version deployed
- [ ] Test RSVP submitted from website
- [ ] Data appears correctly in Google Sheet
- [ ] Headers are formatted properly

---

Your RSVP system will be even more reliable after this update! 🎉
