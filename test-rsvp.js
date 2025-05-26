#!/usr/bin/env node

// Test script to verify Apps Script RSVP endpoint
const url = 'https://script.google.com/macros/s/AKfycbzUpRrFPmOHYoKJJnnqQKoasfjA0yOLR3gYVUaKOy4_4tEPse4HZYWBwbu4_4Pg1l4/exec';

const testData = {
    firstName: 'Test',
    lastName: 'User',
    guestCount: 2,
    timestamp: new Date().toISOString()
};

console.log('Testing RSVP submission to Google Apps Script...');
console.log('URL:', url);
console.log('Data:', testData);

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(testData)
})
.then(response => {
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);
    return response.json();
})
.then(result => {
    console.log('Success! Response:', result);
})
.catch(error => {
    console.error('Error:', error);
});
