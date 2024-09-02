const suggestionsWithMsg = {
  start: {
    message: "message start1",
    type: "text",
    suggession: [
      {
        reply: {
          text: "About Us",
          postbackData: "a",
        },
      },
      {
        reply: {
          text: "Contact Us",
          postbackData: "b",
        },
      },
      {
        reply: {
          text: "Book Now",
          postbackData: "c",
        },
      },
      {
        reply: {
          text: "Help",
          postbackData: "d",
        },
      },
    ],
  },

  start: {
    message: "message start2",
    type: "text",
    suggession: [
      {
        reply: {
          text: "About Us",
          postbackData: "a",
        },
      },
      {
        reply: {
          text: "Contact Us",
          postbackData: "b",
        },
      },
      {
        reply: {
          text: "Book Now",
          postbackData: "c",
        },
      },
      {
        reply: {
          text: "Help",
          postbackData: "d",
        },
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
        reply: {
          text: "Men",
          postbackData: "e",
        },
      },
      {
        reply: {
          text: "Women",
          postbackData: "f",
        },
      },
      {
        reply: {
          text: "Back",
          postbackData: "x",
        },
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
              reply: {
                text: "Suggestion #1",
                postbackData: "suggestion_1",
              },
            },
            {
              reply: {
                text: "Suggestion #2",
                postbackData: "suggestion_2",
              },
            },
          ],
        },
      },
    },
    suggession: [
      {
        reply: {
          text: "Men",
          postbackData: "e",
        },
      },
      {
        reply: {
          text: "Women",
          postbackData: "f",
        },
      },
      {
        reply: {
          text: "Back",
          postbackData: "y",
        },
      },
      {
        liveAgentRequest: {},
      },
    ],
  },

  c: {
    message: "Please Select Category",
    type: "text",
    suggession: [
      {
        reply: {
          text: "Men",
          postbackData: "e",
        },
      },
      {
        reply: {
          text: "Women",
          postbackData: "f",
        },
      },
      {
        reply: {
          text: "Back",
          postbackData: "z",
        },
      },
    ],
  },

  e: {
    message: "What Service You want to use please select",
    type: "carousel",
    suggession: [
      {
        reply: {
          text: "Body Massage",
          postbackData: "g",
        },
      },
      {
        reply: {
          text: "Hair Spa",
          postbackData: "h",
        },
      },
      {
        reply: {
          text: "Back",
          postbackData: "z",
        },
      },
      {
        liveAgentRequest: {},
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
                reply: {
                  text: "Card1",
                  postbackData: "c",
                },
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
                reply: {
                  text: "Card #2",
                  postbackData: "a",
                },
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
                reply: {
                  text: "Book",
                  postbackData: "c",
                },
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
                reply: {
                  text: "About Us",
                  postbackData: "a",
                },
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
};


let mapData1 = suggestionsWithMsg.start
let mapData2 = suggestionsWithMsg["start"]
console.log(mapData1, "...mapData1");
console.log(mapData2, "...mapData2");

// /*
// !in which find single (find and match and gve first value of start) value of start */
// let mapData1 = Object.values(suggestionsWithMsg).find((item) => {
//   // return item["start"];
//   return item.start;
// });
// console.log(mapData1, "...mapData1");
// /** */
// /*
// !in which find all value of start */
// let mapData1a = suggestionsWithMsg.filter((item) => {
//   // return item["start"];
//   return item.start;
// });
// // console.log(mapData1a, "...mapData1a");
// /** */

// /*
// !in which find all value of start */
// let mapData1b = suggestionsWithMsg.filter((item) => {
//   // return item["start"];
//   return item.start;
// });
// // console.log(mapData1b, "...mapData1b");
// /** */
// /*
// !in which find all value of start */
// const mapData1c = suggestionsWithMsg.filter((item) => {
//   return item.hasOwnProperty("start");
// });
// // console.log(mapData1b,"........mapData1b");

// /** */

// /** */
// let mapData2 = suggestionsWithMsg.map((suggestions) => {
//   return Object.values(suggestions);
// });
// // console.log(mapData2,"...mapData2");
// /** */
// /*
// !in which find all value of in which (type === "image") */
// const mapData3a = suggestionsWithMsg.filter((item) => {
//   const messageType = Object.keys(item);
//   return item[messageType].type === "image";
// });

// // console.log(mapData3a,"....mapData3a");
// /** */
// /*
// !in which find single value of in which (type === "image") */
// const mapData3b = suggestionsWithMsg.find((item) => {
//   const messageType = Object.keys(item);
//   return item[messageType].type === "image";
// });
// // console.log(mapData3b,"....mapData3b");

// /** */
// /*
// !in which find all value of in which (type === "text") */
// const mapData4a = suggestionsWithMsg.filter((item) => {
//   const messageType = Object.keys(item);
//   return item[messageType].type === "text";
// });
// // console.log(mapData4a,".....mapData4a");
// /** */
// /*
// !in which find single value of in which (type === "text") */
// const mapData4b = suggestionsWithMsg.find((item) => {
//   const messageType = Object.keys(item);
//   return item[messageType].type === "text";
// });
// // console.log(mapData4b,"......mapData4b");
// /** */

// /** */
// let mapData5a = suggestionsWithMsg.find((suggestions) => {
//   return Object.values(suggestions).map((el) => {
//     return el.type === "text";
//   });
// });
// // console.log(mapData5a,".....mapData5a");
// /** */

// /** */
// let mapData5a1 = suggestionsWithMsg.find((suggestions) => {
//   return Object.values(suggestions).find((el) => {
//     return el.type === "text";
//   });
// });
// // console.log(mapData5a1,".....mapData5a1");
// /** */

// /** */
// let mapData5a2 = suggestionsWithMsg.find((suggestions) => {
//   return Object.values(suggestions).filter((el) => {
//     return el.type === "text";
//   });
// });
// // console.log(mapData5a2,".....mapData5a2");
// /** */

// /** */
// let mapData5b = suggestionsWithMsg.filter((suggestions) => {
//   return Object.values(suggestions).find((el) => {
//     return el.type === "text";
//   });
// });
// // console.log(mapData5b,".....mapData5b");
// /** */

// /** */
// let mapData5b1 = suggestionsWithMsg.filter((suggestions) => {
//   return Object.values(suggestions).filter((el) => {
//     return el.type === "text";
//   });
// });
// // console.log(mapData5b1,".....mapData5b1");
// /** */

// /** */
// let mapData5b2 = suggestionsWithMsg.filter((suggestions) => {
//   return Object.values(suggestions).map((el) => {
//     return el.type === "text";
//   });
// });
// // console.log(mapData5b2,".....mapData5b2");
// /** */

// let mapData8 = suggestionsWithMsg.map((suggestions) => {
//   return Object.values(suggestions).map((el) => {
//     return el.suggession;
//     // return el.suggession[0];
//   });
// });
// // console.log(mapData8,"mapData8");
// let mapData8a = suggestionsWithMsg.map((suggestions) => {
//   // return suggestions;
//   return suggestions.start;
// });
// // console.log(mapData8a,"mapData8a");
// /** */
// let mapData9 = suggestionsWithMsg.map((suggestions) => {
//   return Object.values(suggestions).map((el) => {
//     return Object.values(el.suggession).find((elem) => {
//       return elem.postbackData == "e";
//     });
//   });
// });
// // console.log(mapData9,".....mapData9");

// /** */
// // let mapData7 = suggestionsWithMsg.map((suggestions) => {
// //   const key = Object.keys(suggestions)[0];
// //   const el = suggestions[key];

// //   if (el && el.suggession) {
// //     const foundElem = el.suggession.find((elem) => {
// //       return elem && elem.reply && elem.reply.postbackData === "c";
// //     });
// //     if (foundElem && foundElem.reply) {
// //       return foundElem.reply;
// //     } else {
// //       return null;
// //     }
// //   } else {
// //     return null;
// //   }
// // });
// // console.log(mapData7, "mapData7");
// // console.log(mapData.filter(Boolean)); // Remove undefined entries from the result

// // console.log(mapData);
