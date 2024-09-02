/***this is very important */

function convertStructure(inputData) {
  const convertedData = {};

  for (const key in inputData) {
    const value = inputData[key];
    const convertedValue = {};

    if (value.message && value.type) {
      convertedValue.message = value.message;
      convertedValue.type = value.type;

      if (value.suggession) {
        convertedValue.suggession = value.suggession.map((suggestion) => ({
          reply: {
            text: suggestion.text,
            postbackData: suggestion.postbackData,
          },
        }));
      }
    }

    if (value.type === "image") {
      convertedValue.message = value.message;
      convertedValue.type = value.type;
      convertedValue.image = {
        contentInfo: {
          altText: value.image.contentInfo.altText,
          fileUrl: value.image.contentInfo.fileUrl,
          forceRefresh: value.image.contentInfo.forceRefresh,
        },
      };

      if (value.suggession) {
        convertedValue.suggession = value.suggession.map((suggestion) => ({
          reply: {
            text: suggestion.text,
            postbackData: suggestion.postbackData,
          },
        }));
      }
    }

    if (value.type === "card") {
      convertedValue.message = value.message;
      convertedValue.type = value.type;
      convertedValue.richCard = {
        standaloneCard: {
          cardContent: {
            title: value.richCard.standaloneCard.cardContent.title,
            description: value.richCard.standaloneCard.cardContent.description,
            media: {
              height: value.richCard.standaloneCard.cardContent.media.height,
              contentInfo: {
                fileUrl:
                  value.richCard.standaloneCard.cardContent.media.contentInfo
                    .fileUrl,
                forceRefresh:
                  value.richCard.standaloneCard.cardContent.media.contentInfo
                    .forceRefresh,
              },
            },
            suggestions:
              value.richCard.standaloneCard.cardContent.suggestions.map(
                (suggestion) => ({
                  reply: {
                    text: suggestion.text,
                    postbackData: suggestion.postbackData,
                  }
                })
              ),
          },
        },
      };

      if (value.suggession) {
        convertedValue.suggession = value.suggession.map((suggestion) => ({
          reply: {
            text: suggestion.text,
            postbackData: suggestion.postbackData,
          },
        }));
      }
    }

    if (value.type === "carousel") {
      convertedValue.message = value.message;
      convertedValue.type = value.type;
      convertedValue.suggession = value.suggession.map((suggestion) => ({
        reply: {
          text: suggestion.text,
          postbackData: suggestion.postbackData,
        },
      }));

      convertedValue.richCard = {
        carouselCard: {
          cardWidth: value.richCard.carouselCard.cardWidth,
          cardContents: value.richCard.carouselCard.cardContents.map(
            (card) => ({
              title: card.title,
              description: card.description,
              media: {
                height: card.media.height,
                contentInfo: {
                  fileUrl: card.media.contentInfo.fileUrl,
                  forceRefresh: card.media.contentInfo.forceRefresh,
                },
              },
              suggestions: card.suggestions.map((suggestion) => ({
                reply: {
                  text: suggestion.text,
                  postbackData: suggestion.postbackData,
                },
              })),
            })
          ),
        },
      };
    }

    convertedData[key] = convertedValue;
  }

  return convertedData;
}

// Example usage
// const beforeData = {
//   start: {
//     message: "Welcome to bot",
//     type: "text",
//     suggession: [
//       {
//         text: "About Us",
//         postbackData: "a",
//       },
//       {
//         text: "Contact Us",
//         postbackData: "b",
//       },
//       {
//         text: "Book Now",
//         postbackData: "c",
//       },
//       {
//         text: "Help",
//         postbackData: "d",
//       },
//     ],
//   },
//   a: {
//     message: "You are Selected Image",
//     type: "image",
//     image: {
//       contentInfo: {
//         altText: "Alternative text imarged",
//         fileUrl:
//           "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
//         forceRefresh: true,
//       },
//     },
//     suggession: [
//       {
//         text: "Men",
//         postbackData: "e",
//       },
//       {
//         text: "Women",
//         postbackData: "f",
//       },
//       {
//         text: "Back",
//         postbackData: "x",
//       },
//     ],
//   },
//   b: {
//     message: "You are Selected card",
//     type: "card",
//     richCard: {
//       standaloneCard: {
//         cardContent: {
//           title: "This is a Title",
//           description: "This is a description for the rich card",
//           media: {
//             height: "MEDIUM",
//             contentInfo: {
//               fileUrl:
//                 "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//               forceRefresh: false,
//             },
//           },
//           suggestions: [
//             {
//               text: "Suggestion #1",
//               postbackData: "suggestion_1",
//             },
//             {
//               text: "Suggestion #2",
//               postbackData: "suggestion_2",
//             },
//           ],
//         },
//       },
//     },
//     suggession: [
//       {
//         text: "Men",
//         postbackData: "e",
//       },
//       {
//         text: "Women",
//         postbackData: "f",
//       },
//       {
//         text: "Back",
//         postbackData: "y",
//       },
//     ],
//   },
//   c: {
//     message: "Please Select Category",
//     type: "text",
//     suggession: [
//       {
//         text: "Men",
//         postbackData: "e",
//       },
//       {
//         text: "Women",
//         postbackData: "f",
//       },
//       {
//         text: "Back",
//         postbackData: "start",
//       },
//     ],
//   },
//   e: {
//     message: "What Service You want to use please select",
//     type: "carousel",
//     suggession: [
//       {
//         text: "Body Massage",
//         postbackData: "g",
//       },
//       {
//         text: "Hair Spa",
//         postbackData: "h",
//       },
//       {
//         text: "Back",
//         postbackData: "z",
//       },
//     ],
//     richCard: {
//       carouselCard: {
//         cardWidth: "MEDIUM",
//         cardContents: [
//           {
//             title: "Card #1",
//             description: "The description for card #1",
//             suggestions: [
//               {
//                 text: "Card1",
//                 postbackData: "c",
//               },
//             ],
//             media: {
//               height: "MEDIUM",
//               contentInfo: {
//                 fileUrl:
//                   "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                 forceRefresh: "false",
//               },
//             },
//           },
//           {
//             title: "Card #2",
//             description: "The description for card #2",
//             suggestions: [
//               {
//                 text: "Card #2",
//                 postbackData: "a",
//               },
//             ],
//             media: {
//               height: "MEDIUM",
//               contentInfo: {
//                 fileUrl:
//                   "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                 forceRefresh: "false",
//               },
//             },
//           },
//           {
//             title: "Card #3",
//             description: "The description for card #3",
//             suggestions: [
//               {
//                 text: "Book",
//                 postbackData: "c",
//               },
//             ],
//             media: {
//               height: "MEDIUM",
//               contentInfo: {
//                 fileUrl:
//                   "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
//                 forceRefresh: "false",
//               },
//             },
//           },
//           {
//             title: "Card #4",
//             description: "The description for card #4",
//             suggestions: [
//               {
//                 text: "About Us",
//                 postbackData: "a",
//               },
//             ],
//             media: {
//               height: "MEDIUM",
//               contentInfo: {
//                 fileUrl:
//                   "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
//                 forceRefresh: "false",
//               },
//             },
//           },
//         ],
//       },
//     },
//   },
//   el: {
//     message: "Please Choose a given option",
//     type: "text",
//     suggession: [
//       {
//         text: "About Us",
//         postbackData: "a",
//       },
//       {
//         text: "Contact Us",
//         postbackData: "b",
//       },
//       {
//         text: "Book Now",
//         postbackData: "c",
//       },
//       {
//         text: "Help",
//         postbackData: "d",
//       },
//     ],
//   },
// };

const beforeData = {
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
        "value": "zxcvbnm"
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



const afterData = convertStructure(beforeData);
console.log(afterData.a);
console.log(afterData.b);
console.log(afterData.e);
