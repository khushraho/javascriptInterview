// Original JSON data
var originalJson = {
  "start": {
    "message": "Welcome to bot",
    "type": "text",
    "suggession": [
      { "text": "About Us", "postbackData": "a" },
      { "text": "Contact Us", "postbackData": "b" },
      { "text": "Book Now", "postbackData": "c" },
      { "text": "Help", "postbackData": "d" }
    ]
  }
};

// Convert to the desired JSON structure
var convertedJson = {
  "start": {
    "message": originalJson.start.message,
    "type": originalJson.start.type,
    "suggestions": originalJson.start.suggession.map(function (suggestion) {
      return {
        "reply": {
          "text": suggestion.text,
          "postbackData": suggestion.postbackData
        }
      };
    })
  }
};

console.log(convertedJson,",,,,,,,,,");
// Convert the JavaScript object to a JSON string for display
var convertedJsonString = JSON.stringify(convertedJson, null, 2);

// Display the converted JSON string
console.log(convertedJsonString);
