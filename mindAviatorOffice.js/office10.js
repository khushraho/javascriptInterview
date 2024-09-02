function convertToNewFormat(data) {
    const newData = {};

    for (const [key, value] of Object.entries(data)) {
        newData[key] = {};
        newData[key].type = value.type;
        newData[key].suggession = [];

        if ('message' in value) {
            newData[key].message = value.message;
        }

        if ('suggession' in value) {
            for (const suggestion of value.suggession) {
                const newSuggestion = {
                    reply: {
                        text: suggestion.text,
                        postbackData: suggestion.postbackData
                    }
                };
                newData[key].suggession.push(newSuggestion);
            }
        }

        if ('image' in value) {
            newData[key].image = {
                contentInfo: value.image.contentInfo
            };
        } 
        
        else if ('richCard' in value) {
            newData[key].richCard = {
                standaloneCard: value.richCard.standaloneCard
            };
            newData[key].richCard.standaloneCard.cardContent.suggestions = [];

            for (const suggestion of value.richCard.standaloneCard.cardContent.suggestions) {
                const newSuggestion = {
                    reply: {
                        text: suggestion.text,
                        postbackData: suggestion.postbackData
                    }
                };
                newData[key].richCard.standaloneCard.cardContent.suggestions.push(newSuggestion);
            }

            if ('carouselCard' in value.richCard) {
                newData[key].richCard.carouselCard = value.richCard.carouselCard;
                newData[key].richCard.carouselCard.cardContent = [];

                for (const cardContent of value.richCard.carouselCard.cardContent) {
                    const newCardContent = {
                        title: cardContent.title,
                        description: cardContent.description,
                        suggestions: []
                    };

                    for (const suggestion of cardContent.suggestions) {
                        const newSuggestion = {
                            reply: {
                                text: suggestion.text,
                                postbackData: suggestion.postbackData
                            }
                        };
                        newCardContent.suggestions.push(newSuggestion);
                    }

                    newCardContent.media = cardContent.media;
                    newData[key].richCard.carouselCard.cardContents.push(newCardContent);
                }
            }
        }
    }

    return newData;
}

// Example usage




// Example usage
const beforeJsonData = {
  "start": {
    "message": "Welcome to bot",
    "type": "text",
    "suggession": [
      {
        "type": "reply",
        "text": "About Us",
        "postbackData": "a",
        "value": "123456789"
      },
      {
        "type": "reply",
        "text": "Contact Us",
        "postbackData": "b",
        "value": "qwertyuiop"
      },
      {
        "type": "reply",
        "text": "Book Now",
        "postbackData": "c",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Help Center",
        "postbackData": "d",
        "value": ""
      }
    ]
  },

  "a": {
    "message": "You are Selected Image",
    "type": "image",
    "image": {
      "contentInfo": {
        "altText": "Alternative text imarged",
        "fileUrl": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
        "forceRefresh": true
      }
    },
    "suggession": [
      {
        "type": "reply",
        "text": "Men",
        "postbackData": "e",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Women",
        "postbackData": "f",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Back",
        "postbackData": "x",
        "value": ""
      }
    ]
  },
  "b": {
    "message": "You are Selected card",
    "type": "card",
    "richCard": {
      "standaloneCard": {
        "cardContent": {
          "title": "This is a Title",
          "description": "This is a description for the rich card",
          "media": {
            "height": "MEDIUM",
            "contentInfo": {
              "fileUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
              "forceRefresh": false
            }
          },
          "suggestions": [
            {
              "type": "reply",
              "text": "Suggestion #1",
              "postbackData": "suggestion_1",
              "value": ""
            },
            {
              "type": "reply",
              "text": "Suggestion #2",
              "postbackData": "suggestion_2",
              "value": ""
            }
          ]
        }
      }
    },
    "suggession": [
      {
        "type": "reply",
        "text": "Men",
        "postbackData": "e",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Women",
        "postbackData": "f",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Back",
        "postbackData": "y",
        "value": ""
      }
    ]
  },
  "c": {
    "message": "Please Select Category",
    "type": "text",
    "suggession": [
      {
        "type": "reply",
        "text": "Men",
        "postbackData": "e",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Women",
        "postbackData": "f",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Back",
        "postbackData": "start",
        "value": ""
      }
    ]
  },
  "e": {
    "message": "What Service You want to use please select",
    "type": "carousel",
    "suggession": [
      {
        "type": "reply",
        "text": "Call Now",
        "postbackData": "g",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Visit Website",
        "postbackData": "h",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Back",
        "postbackData": "z",
        "value": ""
      }
    ],
    "richCard": {
      "carouselCard": {
        "cardWidth": "MEDIUM",
        "cardContents": [
          {
            "title": "Card #1",
            "description": "The description for card #1",
            "suggestions": [
              {
                "type": "reply",
                "text": "Card1",
                "postbackData": "c",
                "value": ""
              }
            ],
            "media": {
              "height": "MEDIUM",
              "contentInfo": {
                "fileUrl": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
                "forceRefresh": "false"
              }
            }
          },
          {
            "title": "Card #2",
            "description": "The description for card #2",
            "suggestions": [
              {
                "type": "reply",
                "text": "Card #2",
                "postbackData": "a",
                "value": ""
              }
            ],
            "media": {
              "height": "MEDIUM",
              "contentInfo": {
                "fileUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
                "forceRefresh": "false"
              }
            }
          },
          {
            "title": "Card #3",
            "description": "The description for card #3",
            "suggestions": [
              {
                "type": "reply",
                "text": "Book",
                "postbackData": "c",
                "value": ""
              }
            ],
            "media": {
              "height": "MEDIUM",
              "contentInfo": {
                "fileUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
                "forceRefresh": "false"
              }
            }
          },
          {
            "title": "Card #4",
            "description": "The description for card #4",
            "suggestions": [
              {
                "type": "reply",
                "text": "About Us",
                "postbackData": "a",
                "value": ""
              }
            ],
            "media": {
              "height": "MEDIUM",
              "contentInfo": {
                "fileUrl": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
                "forceRefresh": "false"
              }
            }
          }
        ]
      }
    }
  },

  "el": {
    "message": "Please Choose a given option",
    "type": "text",
    "suggession": [
      {
        "type": "reply",
        "text": "About Us",
        "postbackData": "a",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Contact Us",
        "postbackData": "b",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Book Now",
        "postbackData": "c",
        "value": ""
      },
      {
        "type": "reply",
        "text": "Help",
        "postbackData": "d",
        "value": ""
      }
    ]
  }
};
const afterJsonData = convertToNewFormat(beforeJsonData);
console.log(afterJsonData.e);
// console.log(afterJsonData.a);
// console.log(afterJsonData);

