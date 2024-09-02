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
          text: suggestion.text,
          postbackData: suggestion.postbackData,
        }));
      }
    }

    if (value.image) {
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

    if (value.card) {
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
                fileUrl: value.richCard.standaloneCard.cardContent.media.contentInfo.fileUrl,
                forceRefresh: value.richCard.standaloneCard.cardContent.media.contentInfo.forceRefresh
              }
            },
            suggestions: value.richCard.standaloneCard.cardContent.suggestions.map(suggestion => ({
              text: suggestion.text,
              postbackData: suggestion.postbackData
            }))
          }
        }
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

    convertedData[key] = convertedValue;
  }

  return convertedData;
}

// Example usage
const beforeData = {
  start: {
    message: "Welcome to bot",
    type: "text",
    suggession: [
      {
        text: "About Us",
        postbackData: "a",
      },
      {
        text: "Contact Us",
        postbackData: "b",
      },
      {
        text: "Book Now",
        postbackData: "c",
      },
      {
        text: "Help",
        postbackData: "d",
      },
    ],
  },
  a: {
    message: "You are Selected Image",
    type: "image",
    image: {
      contentInfo: {
        altText: "Alternative text imarged",
        fileUrl:
          "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
        forceRefresh: true,
      },
    },
    suggession: [
      {
        text: "Men",
        postbackData: "e",
      },
      {
        text: "Women",
        postbackData: "f",
      },
      {
        text: "Back",
        postbackData: "x",
      },
    ],
  },
  b: {
    message: "You are Selected card",
    type: "card",
    richCard: {
      standaloneCard: {
        cardContent: {
          title: "This is a Title",
          description: "This is a description for the rich card",
          media: {
            height: "MEDIUM",
            contentInfo: {
              fileUrl:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
              forceRefresh: false,
            },
          },
          suggestions: [
            {
              text: "Suggestion #1",
              postbackData: "suggestion_1",
            },
            {
              text: "Suggestion #2",
              postbackData: "suggestion_2",
            },
          ],
        },
      },
    },
    suggession: [
      {
        text: "Men",
        postbackData: "e",
      },
      {
        text: "Women",
        postbackData: "f",
      },
      {
        text: "Back",
        postbackData: "y",
      },
    ],
  },
  c: {
    message: "Please Select Category",
    type: "text",
    suggession: [
      {
        text: "Men",
        postbackData: "e",
      },
      {
        text: "Women",
        postbackData: "f",
      },
      {
        text: "Back",
        postbackData: "start",
      },
    ],
  },
  e: {
    message: "What Service You want to use please select",
    type: "carousel",
    suggession: [
      {
        text: "Body Massage",
        postbackData: "g",
      },
      {
        text: "Hair Spa",
        postbackData: "h",
      },
      {
        text: "Back",
        postbackData: "z",
      },
    ],
    richCard: {
      carouselCard: {
        cardWidth: "MEDIUM",
        cardContents: [
          {
            title: "Card #1",
            description: "The description for card #1",
            suggestions: [
              {
                text: "Card1",
                postbackData: "c",
              },
            ],
            media: {
              height: "MEDIUM",
              contentInfo: {
                fileUrl:
                  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
                forceRefresh: "false",
              },
            },
          },
          {
            title: "Card #2",
            description: "The description for card #2",
            suggestions: [
              {
                text: "Card #2",
                postbackData: "a",
              },
            ],
            media: {
              height: "MEDIUM",
              contentInfo: {
                fileUrl:
                  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
                forceRefresh: "false",
              },
            },
          },
          {
            title: "Card #3",
            description: "The description for card #3",
            suggestions: [
              {
                text: "Book",
                postbackData: "c",
              },
            ],
            media: {
              height: "MEDIUM",
              contentInfo: {
                fileUrl:
                  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
                forceRefresh: "false",
              },
            },
          },
          {
            title: "Card #4",
            description: "The description for card #4",
            suggestions: [
              {
                text: "About Us",
                postbackData: "a",
              },
            ],
            media: {
              height: "MEDIUM",
              contentInfo: {
                fileUrl:
                  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=898&q=80",
                forceRefresh: "false",
              },
            },
          },
        ],
      },
    },
  },
  el: {
    message: "Please Choose a given option",
    type: "text",
    suggession: [
      {
        text: "About Us",
        postbackData: "a",
      },
      {
        text: "Contact Us",
        postbackData: "b",
      },
      {
        text: "Book Now",
        postbackData: "c",
      },
      {
        text: "Help",
        postbackData: "d",
      },
    ],
  },
};

const afterData = convertStructure(beforeData);
console.log(afterData.a);
console.log(afterData.b);
