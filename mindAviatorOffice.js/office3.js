function createBotMessage(message, type, suggestions, imageAltText, imageUrl, cardTitle, cardDescription, cardImageUrl, cardSuggestions, carouselCards) {
  let json = {};

  switch (type) {
    case "text":
      json = {
        "message": message,
        "type": type,
        "suggession": suggestions.map(suggestion => ({
          "text": suggestion.text,
          "postbackData": suggestion.postbackData
        }))
      };
      break;

    case "image":
      json = {
        "message": message,
        "type": type,
        "image": {
          "contentInfo": {
            "altText": imageAltText,
            "fileUrl": imageUrl,
            "forceRefresh": true
          }
        },
        "suggession": suggestions.map(suggestion => ({
          "text": suggestion.text,
          "postbackData": suggestion.postbackData
        }))
      };
      break;

    case "card":
      json = {
        "message": message,
        "type": type,
        "richCard": {
          "standaloneCard": {
            "cardContent": {
              "title": cardTitle,
              "description": cardDescription,
              "media": {
                "height": "MEDIUM",
                "contentInfo": {
                  "fileUrl": cardImageUrl,
                  "forceRefresh": false
                }
              },
              "suggestions": cardSuggestions.map(suggestion => ({
                "text": suggestion.text,
                "postbackData": suggestion.postbackData
              }))
            }
          }
        },
        "suggession": suggestions.map(suggestion => ({
          "text": suggestion.text,
          "postbackData": suggestion.postbackData
        }))
      };
      break;

    case "carousel":
      json = {
        "message": message,
        "type": type,
        "suggession": suggestions.map(suggestion => ({
          "text": suggestion.text,
          "postbackData": suggestion.postbackData
        })),
        "richCard": {
          "carouselCard": {
            "cardWidth": "MEDIUM",
            "cardContents": carouselCards.map(card => ({
              "title": card.title,
              "description": card.description,
              "suggestions": card.suggestions.map(suggestion => ({
                "text": suggestion.text,
                "postbackData": suggestion.postbackData
              })),
              "media": {
                "height": "MEDIUM",
                "contentInfo": {
                  "fileUrl": card.media.fileUrl,
                  "forceRefresh": card.media.forceRefresh
                }
              }
            }))
          }
        }
      };
      break;

    default:
      break;
  }

  return json;
}

// Example usage:
const startMessage = createBotMessage("Welcome to bot", "text", [
  { "text": "About Us", "postbackData": "a" },
  { "text": "Contact Us", "postbackData": "b" },
  { "text": "Book Now", "postbackData": "c" },
  { "text": "Help", "postbackData": "d" }
]);

console.log(startMessage);
