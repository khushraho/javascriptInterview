/*
!Example1 using Find Method */

// let arrayBoatMessage = [
//   { message: "Hi", response: "Welcome to Chandan Kumar" },
//   { message: "Hello ", response: "Hello sir, how can I help you" },
//   { message: "Hello boat ", response: "Hello sir , how can I help you" },
//   { message: "How are you", response: "I am good" },
//   { message: "What is your name", response: "I am Bot Prakash Kumar" },
// ];

// let message = "Hello Boat";
// let chatBoatMessage = "";
// // Find the object in arrayBoatMessage that contains the given message
// let matchingMessage = arrayBoatMessage.find(item => item.message.toLowerCase().includes(message.toLowerCase()));

// // If a matching message is found, save its response to chatBoatMessage
// // if (matchingMessage) {
// //   chatBoatMessage = matchingMessage.response;
// // } else {
// //   chatBoatMessage = "Sorry, I don't understand that message.";
// // }
// chatBoatMessage= matchingMessage.response
// console.log(chatBoatMessage);

/*
!Example1 using Filter Method */

let arrayBoatMessage = [
  { message: "Hello boat", response: "Hello sir, how can I help you" },
  { message: "How are you", response: "I am good" },
  { message: "What is your name", response: "I am Bot Chandan Kumar" },
];

let message = "How are you"; // Convert to lowercase for case-insensitive comparison
// let message = "hello boat"; // Convert to lowercase for case-insensitive comparison

// Use the filter method to find all matching entries (case-insensitive)
let matchingMessages = arrayBoatMessage.filter(item => item.message.toLowerCase().includes(message.toLowerCase()));
console.log(matchingMessages);

if (matchingMessages.length > 0) {
//   console.log("Matching responses:", matchingMessages);

let boatMessage = matchingMessages.map(item => item.response);
// let boatMessage =matchingMessages[0].response;
console.log(boatMessage,".........boatMessage");
console.log({boatMessage});

} else {
  console.log("Sorry, no matching responses found.");
}
