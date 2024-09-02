const suggestionsWithMsg = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },

  {
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
  },
  {
    f: {
      message: "Please Select ",
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
  },
];

/*
! ..........................step1:...................*/
/** */
let mapDataA = suggestionsWithMsg.map((item) => {
  return item;
});
// console.log(mapDataA,"...mapDataA");
/** */

/** */
let mapDataB = suggestionsWithMsg.filter((item) => {
  return item;
});
// console.log(mapDataB,"...mapDataB");
/** */
/** */
let mapDataC = suggestionsWithMsg.find((item) => {
  return item;
});
// console.log(mapDataC,"...mapDataC");
/** */

/** */
let mapDataD = suggestionsWithMsg.map((suggestions) => {
  return Object.values(suggestions)
});
// console.log(mapDataD,"...mapDataD");
/** */

/*
! ..........................step2:...................*/

/*
!in which find single (find and match and gve first value of start) value of start */
let mapData1 = suggestionsWithMsg.find((item) => {
  // return item["start"];
  return item.a;
});
// console.log(mapData1,"...mapData1");
/** */

/*
!in which find all value of start */
let mapData1a = suggestionsWithMsg.filter((item) => {
  // return item["start"];
  return item.start;
});
// console.log(mapData1a,"...mapData1a");
/** */

/*
!in which find all value of start */
const mapData1c = suggestionsWithMsg.map((item) => {
  return item.hasOwnProperty("start");
});
// console.log(mapData1c,"........mapData1c");
/** */

/*
!in which find all value of start */
const mapData1d = suggestionsWithMsg.filter((item) => {
  return item.hasOwnProperty("start");
});
// console.log(mapData1d,"........mapData1d");
/** */

/*
!in which find all value of start */
const mapData1e = suggestionsWithMsg.find((item) => {
  return item.hasOwnProperty("start");
});
// console.log(mapData1e,"........mapData1e");
/** */

/*
! ..........................step3:...................*/

/*
!in which find all value of in which (type === "image") */
const mapData3a1 = suggestionsWithMsg.map((item) => {
  const messageType = Object.keys(item);
  return item[messageType].type === "image";
});
// console.log(mapData3a1,"....mapData3a1");
/** */

/*
!in which find single value of in which (type === "image") */
const mapData3a2 = suggestionsWithMsg.find((item) => {
  const messageType = Object.keys(item);
  return item[messageType].type === "image";
});
// console.log(mapData3a2,"....mapData3a2");
/** */

/*
!in which find single value of in which (type === "image") */
const mapData3a3 = suggestionsWithMsg.filter((item) => {
  const messageType = Object.keys(item);
  return item[messageType].type === "image";
});
// console.log(mapData3a3,"....mapData3a3");
/** */

/*
!in which find all value of in which (type === "text") */
const mapData3b1 = suggestionsWithMsg.filter((item) => {
  const messageType = Object.keys(item);
  return item[messageType].type === "text";
});
// console.log(mapData3b1,".....mapData3b1");
/** */
/*
!in which find all value of in which (type === "text") */
const mapData3b2 = suggestionsWithMsg.map((item) => {
  const messageType = Object.keys(item);
  return item[messageType].type === "text";
});
// console.log(mapData3b2,".....mapData3b2");
/** */
/*
!in which find single value of in which (type === "text") */
const mapData3b3 = suggestionsWithMsg.find((item) => {
  const messageType = Object.keys(item);
  return item[messageType].type === "text";
});
// console.log(mapData3b3,"......mapData3b3");
/** */

/*
! ..........................step4 you want skip these step it is complex:...................*/

/** */
let mapData4a1 = suggestionsWithMsg.find((suggestions) => {
  return Object.values(suggestions).map((el) => {
    return el.type === "text";
  });
});
// console.log(mapData4a1,".....mapData4a1");
/** */

/** */
let mapData4a2 = suggestionsWithMsg.find((suggestions) => {
  return Object.values(suggestions).find((el) => {
    return el.type === "text";
  });
});
// console.log(mapData4a2,".....mapData4a2");
/** */

/** */
let mapData4a3 = suggestionsWithMsg.find((suggestions) => {
  return Object.values(suggestions).filter((el) => {
    return el.type === "text";
  });
});
// console.log(mapData4a3,".....mapData4a3");
/** */

/*
!this is not valid */
let mapData4b1 = suggestionsWithMsg.filter((suggestions) => {
  return Object.values(suggestions).filter((el) => {
    return el.type === "text";
  });
});
// console.log(mapData4b1,".....mapData4b1");
/** */

/*
!this is not valid */
let mapData4b2 = suggestionsWithMsg.filter((suggestions) => {
  return Object.values(suggestions).map((el) => {
    return el.type === "text";
  });
});
// console.log(mapData4b2,".....mapData4b2");
/** */

/** */
let mapData4b3 = suggestionsWithMsg.filter((suggestions) => {
  return Object.values(suggestions).find((el) => {
    return el.type === "text";
  });
});
// console.log(mapData4b3,".....mapData4b3");
/** */
/** */
let mapData4c1 = suggestionsWithMsg.map((suggestions) => {
  return Object.values(suggestions).filter((el) => {
    return el.type === "text";
  });
});
// console.log(mapData4c1,".....mapData4c1");
/** */

/** */
let mapData4c2 = suggestionsWithMsg.map((suggestions) => {
  return Object.values(suggestions).map((el) => {
    return el.type === "text";
  });
});
// console.log(mapData4c2,".....mapData4c2");
/** */

/** */
let mapData4c3 = suggestionsWithMsg.map((suggestions) => {
  return Object.values(suggestions).find((el) => {
    return el.type === "text";
  });
});
// console.log(mapData4c3,".....mapData4c3");
/** */

/*
! ..........................step5:...................*/

/**Example:======> */
const mapData5a1 = suggestionsWithMsg.map((item) => {
  const messageType = Object.keys(item);
  return item[messageType].suggession;
  // return item[messageType].suggession[0];
  // return item[messageType].suggession[1];
});
// console.log(mapData5a1,"....mapData5a1");

/**Example:======> */
const mapData5b1 = suggestionsWithMsg.filter((item) => {
  const messageType = Object.keys(item);
  return item[messageType].suggession;
  return item[messageType].suggession[0];
  return item[messageType].suggession[1];
});
// console.log(mapData5b1,"....mapData5b1");

/**Example:======> */
const mapData5c1 = suggestionsWithMsg.find((item) => {
  const messageType = Object.keys(item);
  return item[messageType].suggession;
  return item[messageType].suggession[0];
  return item[messageType].suggession[1];
});
// console.log(mapData5c1,"....mapData5c1");
/*
! ..........................step5AA:...................*/

/**Example:======> */
const mapData5AAa1 = suggestionsWithMsg.map((item) => {
  const messageType = Object.keys(item);
  return item[messageType].suggession.map(item=>item.reply?.text);
});
// console.log(mapData5AAa1,"....mapData5AAa1");

/**Example:======> */
const mapData5AAa2 = suggestionsWithMsg.map((item) => {
  const messageType = Object.keys(item);
  return item[messageType].suggession.filter(item=>item.reply?.text);
});
// console.log(mapData5AAa2,"....mapData5AAa2");

/**Example:======> */
const mapData5AAa3 = suggestionsWithMsg.map((item) => {
  const messageType = Object.keys(item);
  return item[messageType].suggession.find(item=>item.reply?.text);
});
// console.log(mapData5AAa3,"....mapData5AAa3");

/**Example:======> */
const mapData5AAa4 = suggestionsWithMsg.map((item) => {
  const messageType = Object.keys(item);
  return item[messageType].suggession.map(item=>item.reply?.text==="Men");
});
// console.log(mapData5AAa4,"....mapData5AAa4"); 

/**Example:======> */
const mapData5AAa5 = suggestionsWithMsg.map((item) => {
  const messageType = Object.keys(item);
  return item[messageType].suggession.filter(item=>item.reply?.text==="Men");
});
// console.log(mapData5AAa5,"....mapData5AAa5");

/**Example:======> */
const mapData5AAa6 = suggestionsWithMsg.map((item) => {
  const messageType = Object.keys(item);
  return item[messageType].suggession.find(item=>item.reply?.text==="Men");
});
// console.log(mapData5AAa6,"....mapData5AAa6");

// /**Example:======> THIS IS NOT WORKING */
const mapData5AAb1 = suggestionsWithMsg.filter((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.map(item=>item.reply?.text);
});
// console.log(mapData5AAb1,"....mapData5AAb1");


// /**Example:======> THIS IS NOT WORKING */
const mapData5AAb2 = suggestionsWithMsg.filter((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.filter(item=>item.reply?.text);
});
// console.log(mapData5AAb2,"....mapData5AAb2");


// /**Example:======> THIS IS NOT WORKING */
const mapData5AAb3 = suggestionsWithMsg.filter((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.find(item=>item.reply?.text);
});
// console.log(mapData5AAb3,"....mapData5AAb3");


// /**Example:======>THIS IS NOT WORKING  */
const mapData5AAb4 = suggestionsWithMsg.filter((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.map(item=>item.reply?.text==="Men");
});
// console.log(mapData5AAb4,"....mapData5AAb4");


// /**Example:======>THIS IS NOT WORKING */
const mapData5AAb5 = suggestionsWithMsg.filter((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.filter(item=>item.reply?.text==="Men");
});
// console.log(mapData5AAb5,"....mapData5AAb5");


// /**Example:======> */
const mapData5AAb6 = suggestionsWithMsg.filter((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.find(item=>item.reply?.text==="Men");
});
// console.log(mapData5AAb6,"....mapData5AAb6");

// /**Example:======> THIS IS NOT WORKING*/
const mapData5AAe1 = suggestionsWithMsg.find((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.find(item=>item.reply?.text);
});
// console.log(mapData5AAe1,"....mapData5AAe1");

// /**Example:======> THIS IS NOT WORKING*/
const mapData5AAe2 = suggestionsWithMsg.find((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.filter(item=>item.reply?.text);
});
// console.log(mapData5AAe2,"....mapData5AAe2");

// /**Example:======> THIS IS NOT WORKING*/
const mapData5AAe3 = suggestionsWithMsg.find((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.map(item=>item.reply?.text);
});
// console.log(mapData5AAe3,"....mapData5AAe3");


// /**Example:======> */
const mapData5AAe4 = suggestionsWithMsg.find((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.find(item=>item.reply?.text==="Men");
});
// console.log(mapData5AAe4,"....mapData5AAe4");


// /**Example:======> THIS IS NOT WORKING*/
const mapData5AAe5 = suggestionsWithMsg.find((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.filter(item=>item.reply?.text==="Men");
});
// console.log(mapData5AAe5,"....mapData5AAe5");


// /**Example:======> THIS IS NOT WORKING*/
const mapData5AAe6 = suggestionsWithMsg.find((item) => {
  const messageType = Object.keys(item);
   return item[messageType].suggession.map(item=>item.reply?.text==="Men");
});
// console.log(mapData5AAe6,"....mapData5AAe6");

/*
! ..........................step6:...................*/

/**Example */
let mapData6a1 = suggestionsWithMsg.map((suggestions) => {
  return Object.values(suggestions).map((el) => {
    return el.suggession;
  });
});
// console.log(mapData6a1,".........mapData6a1");

/**Example */
let mapData6a2 = suggestionsWithMsg.map((suggestions) => {
  return Object.values(suggestions).filter((el) => {
    return el.suggession;
    
  });
});
// console.log(mapData6a2,".........mapData6a2");

/**Example */
let mapData6a3 = suggestionsWithMsg.map((suggestions) => {
  return Object.values(suggestions).find((el) => {
    return el.suggession;
   
  });
});
// console.log(mapData6a3,"..........mapData6a3");







/*
! ..........................step7(pending)):...................*/
/** */
let mapData7a = suggestionsWithMsg.map((suggestions) => {
  return Object.values(suggestions).map((el) => {
    return Object.values(el.suggession).map((elem) => {
      return elem;
    });
  });
});
// console.log(mapData7a,".....mapData7a");
/** */

let mapData7b = suggestionsWithMsg.map((suggestions) => {
  return Object.values(suggestions).map((el) => {
    return Object.values(el.suggession).map((elem) => {
      return elem.reply;
    });
  });
});
// console.log(mapData7b,".....mapData7b");
/** */










