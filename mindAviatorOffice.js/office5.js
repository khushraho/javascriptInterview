/**
*! five and six file is connected with each other in this only type==text worked*/


function convertStructure(originalJson) {
    const convertedJson = {};

    for (const key in originalJson) {
        convertedJson[key] = {
            message: originalJson[key].message,
            type: originalJson[key].type,
        };

        if (originalJson[key].suggession) {
            convertedJson[key].suggession = originalJson[key].suggession.map((suggestion) => {
                return {
                    "reply": {
                        text: suggestion.text,
                        postbackData: suggestion.postbackData,
                    }
                };
            });
        }
    }

    return convertedJson;
}

// Example usage
const originalJson = {
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
            },~~
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
    "e": {
        "message": "What Service You want to use please select",
        "type": "carousel",
        "suggession": [
            {
                "text": "Body Massage",
                "postbackData": "g"
            },
            {
                "text": "Hair Spa",
                "postbackData": "h"
            },
            {
                "text": "Back",
                "postbackData": "z"
            },
            {
                "liveAgentRequest": {}
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
                                "text": "Card1",
                                "postbackData": "c"
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
}
    ;

const convertedJson = convertStructure(originalJson);
const convertedJsonFinally=JSON.stringify(convertedJson, null, 2);
console.log(convertedJsonFinally, ".....convertedFinally");
// console.log(JSON.stringify(convertedJson, null, 2));
