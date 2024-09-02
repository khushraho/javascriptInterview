const originalData={
  "start": {
    "message": "Welcome to bot",
    "type": "text",
    "suggession": [
      {
        "text": "About Us",
        "postbackData": "a"
      },
      {
        "text": "Contact Us",
        "postbackData": "b"
      },
      {
        "text": "Book Now",
        "postbackData": "c"
      },
      {
        "text": "Help",
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
        "text": "Men",
        "postbackData": "e"
      },
      {
        "text": "Women",
        "postbackData": "f"
      },
      {
        "text": "Back",
        "postbackData": "x"
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
              "text": "Suggestion #1",
              "postbackData": "suggestion_1"
            },
            {
              "text": "Suggestion #2",
              "postbackData": "suggestion_2"
            }
          ]
        }
      }
    },
    "suggession": [
      {
        "text": "Men",
        "postbackData": "e"
      },
      {
        "text": "Women",
        "postbackData": "f"
      },
      {
        "text": "Back",
        "postbackData": "y"
      },
      {
        "liveAgentRequest": {}
      }
    ]
  },
  "c": {
    "message": "Please Select Category",
    "type": "text",
    "suggession": [
      {
        "text": "Men",
        "postbackData": "e"
      },
      {
        "text": "Women",
        "postbackData": "f"
      },
      {
        "text": "Back",
        "postbackData": "start"
      }
    ]
  },
//   "e": {
//     "message": "What Service You want to use please select",
//     "type": "carousel",
//     "suggession": [
//       {
//         "text": "Body Massage",
//         "postbackData": "g"
//       },
//       {
//         "text": "Hair Spa",
//         "postbackData": "h"
//       },
//       {
//         "text": "Back",
//         "postbackData": "z"
//       },
//       {
//         "liveAgentRequest": {}
//       }
//     ],
//     "richCard": {
//       "carouselCard": {
//         "cardWidth": "MEDIUM",
//         "cardContents": [
//           {
//             "title": "Card #1",
//             "description": "The description for card #1",
//             "suggestions": [
//               {
//                 "text": "Card1",
//                 "postbackData": "c"
//               }
//             ],
//             "media": {
//               "height": "MEDIUM",
//               "contentInfo": {
//                 "fileUrl": "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                 "forceRefresh": "false"
//               }
//             }
//           },
//           {
//             "title": "Card #2",
//             "description": "The description for card #2",
//             "suggestions": [
//               {
//                 "text": "Card #2",
//                 "postbackData": "a"
//               }
//             ],
//             "media": {
//               "height": "MEDIUM",
//               "contentInfo": {
//                 "fileUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                 "forceRefresh": "false"
//               }
//             }
//           },
//           {
//             "title": "Card #3",
//             "description": "The description for card #3",
//             "suggestions": [
//               {
//                 "text": "Book",
//                 "postbackData": "c"
//               }
//             ],
//             "media": {
//               "height": "MEDIUM",
//               "contentInfo": {
//                 "fileUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                 "forceRefresh": "false"
//               }
//             }
//           },
//           {
//             "title": "Card #4",
//             "description": "The description for card #4",
//             "suggestions": [
//               {
//                 "text": "About Us",
//                 "postbackData": "a"
//               }
//             ],
//             "media": {
//               "height": "MEDIUM",
//               "contentInfo": {
//                 "fileUrl": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
//                 "forceRefresh": "false"
//               }
//             }
//           }
//         ]
//       }
//     }
//   },
  "el": {
    "message": "Please Choose a given option",
    "type": "text",
    "suggession": [
      {
        "text": "About Us",
        "postbackData": "a"
      },
      {
        "text": "Contact Us",
        "postbackData": "b"
      },
      {
        "text": "Book Now",
        "postbackData": "c"
      },
      {
        "text": "Help",
        "postbackData": "d"
      }
    ]
  }
};

function convertToDynamicFormat(originalData) {
  const dynamicFormat = {};

  for (const key in originalData) {
    const section = originalData[key];

    if (section.suggession) {
      const suggestions = section.suggession.map((item) => {
        if (item.reply) {
          return item.reply;
        } else {
          return {
            text: item.text,
            postbackData: item.postbackData,
          };
        }
      });

      dynamicFormat[key] = {
        message: section.message,
        type: section.type,
        suggession: suggestions,
      };

      if (section.type === 'image') {
        dynamicFormat[key].image = {
          contentInfo: section.image.contentInfo,
        };
      } else if (section.type === 'card') {
        dynamicFormat[key].richCard = {
          standaloneCard: {
            cardContent: {
              title: section.richCard.standaloneCard.cardContent.title,
              description: section.richCard.standaloneCard.cardContent.description,
              media: section.richCard.standaloneCard.cardContent.media,
              suggestions: section.richCard.standaloneCard.cardContent.suggestions.map((suggestion) => suggestion.reply),
            },
          },
        };
      }
    //    else if (section.type === 'carousel') {
    //     dynamicFormat[key].richCard = {
    //       carouselCard: {
    //         cardWidth: section.richCard.carouselCard.cardWidth,
    //         cardContents: section.richCard.carouselCard.cardContents.map((card) => {
    //           return {
    //             title: card.title,
    //             description: card.description,
    //             media: card.media,
    //             suggestions: card.suggession.map((suggestion) => suggestion.reply),
    //           };
    //         }),
    //       },
    //     };
    //   }
    }
  }

  return dynamicFormat;
}

// Example usage
// const originalData = /* Your original JSON data */;
const dynamicFormat = convertToDynamicFormat(originalData);
console.log(JSON.stringify(dynamicFormat, null, 2));
