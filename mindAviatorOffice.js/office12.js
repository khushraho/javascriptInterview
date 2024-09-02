function convertJsonStructure(inputJson) {
    const outputJson = {};

    function processNode(inputNode, outputNode) {
        if (typeof inputNode === 'object' && inputNode !== null) {
            if (Array.isArray(inputNode)) {
                outputNode = [];
                for (let i = 0; i < inputNode.length; i++) {
                    outputNode[i] = {};
                    processNode(inputNode[i], outputNode[i]);
                }
            } else {
                for (const key in inputNode) {
                    if (key === 'suggession') {
                        outputNode['suggession'] = inputNode[key].map(item => {
                            if (item.type === 'reply') {
                                return {
                                    'reply': {
                                        'text': item.text,
                                        'postbackData': item.postbackData
                                    }
                                };
                            }
                             else if (item.type === 'url_action') {
                                return {
                                    'action': {
                                        'text': item.text,
                                        'postbackData': item.postbackData,
                                       openUrlAction: {
                                            url: item.value
                                        }
                                    }
                                };
                            }
                             else if (item.type === 'dial_action') {
                                return {
                                    'action': {
                                        'text': item.text,
                                        'postbackData': item.postbackData,
                                        dialAction: {
                                            phoneNumber: item.value
                                        }
                                    }
                                };
                            }
                        });
                    } else {
                        outputNode[key] = {};
                        processNode(inputNode[key], outputNode[key]);
                    }
                }
            }
        } else {
            outputNode = inputNode;
        }
    }

    processNode(inputJson, outputJson);
    return outputJson;
}

// Example usage
const beforeJson = {
  "start": {
    "message": "Welcome to bot",
    "type": "text",
    "suggession": [
      {
        "type": "reply",
        "value": "",
        "text": "About Us",
        "postbackData": "a"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Contact Us",
        "postbackData": "b"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Book Now",
        "postbackData": "c"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Help_Center",
        "postbackData": "d"
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
        "value": "",
        "text": "Men",
        "postbackData": "e"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Women",
        "postbackData": "d"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Back",
        "postbackData": "c"
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
              "value": "",
              "text": "Suggestion #1",
              "postbackData": "a"
            },
            {
              "type": "reply",
              "value": "",
              "text": "Suggestion #2",
              "postbackData": "e"
            }
          ]
        }
      }
    },
    "suggession": [
      {
        "type": "reply",
        "value": "",
        "text": "Men",
        "postbackData": "e"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Women",
        "postbackData": "a"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Back",
        "postbackData": "d"
      }
    ]
  },
  "c": {
    "message": "Please Select Category",
    "type": "text",
    "suggession": [
      {
        "type": "reply",
        "value": "",
        "text": "Men",
        "postbackData": "e"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Women",
        "postbackData": "b"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Back",
        "postbackData": "start"
      }
    ]
  },
  "d": {
    "message": "Help_center",
    "type": "text",
    "suggession": [
      {
        "type": "dial_action",
        "value": "7566017353",
        "text": "Call support",
        "postbackData": "start"
      },
      {
        "type": "url_action",
        "value": "https://dummyjson.com/products",
        "text": "Website support",
        "postbackData": "start"
      },
      {
        "type": "url_action",
        "value": "https://www.youtube.com",
        "text": "Youtube support",
        "postbackData": "start"
      }
    ]
  },
  "e": {
    "message": "What Service You want to use please select",
    "type": "carousel",
    "suggession": [
      {
        "type": "reply",
        "value": "",
        "text": "Body Massage",
        "postbackData": "a"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Hair Spa",
        "postbackData": "b"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Back",
        "postbackData": "c"
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
                "value": "",
                "text": "Card1",
                "postbackData": "b"
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
                "value": "",
                "text": "Card #2",
                "postbackData": "a"
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
                "value": "",
                "text": "Book",
                "postbackData": "c"
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
                "value": "",
                "text": "About Us",
                "postbackData": "a"
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
        "value": "",
        "text": "About Us",
        "postbackData": "a"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Contact Us",
        "postbackData": "b"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Book Now",
        "postbackData": "c"
      },
      {
        "type": "reply",
        "value": "",
        "text": "Help",
        "postbackData": "d"
      }
    ]
  }
};

const afterJson = convertJsonStructure(beforeJson);
console.log(JSON.stringify(afterJson, null, 2));
