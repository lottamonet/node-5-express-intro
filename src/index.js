// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

//import the express module
import express from "express";

//apply the express module to the app variable
const app = express();

//set the port to 3000
const port = 3000;

//middleware to parse incoming JSON requests
app.use(express.json());

//start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



// --------------------------------- 
// Helper Functions
// ---------------------------------

// ---------------------------------
// Our very first API Endpoints
// ---------------------------------
app.get("/", (req, res) => {
  res.send("Hello Universe!");
});

app.get("/get-user", (req, res) => {
  res.send("Hello user!");
});

// add a dynamic parameter
app.get("/get-user-name/:userName", (req, res) => {
  const name = req.params.userName;
  res.send(`Hello ${name}!`);
});

// order yummy tacos
app.get("/order-tacos/:protien/:numTacos", (req, res) => {
    const protien = req.params.protien;
    const numTacos = req.params.numTacos;

    res.send(`Your order of ${numTacos} ${protien} tacos is on the way!`)
});
// --------------------------------
// 🚀 LEVEL 1 CHALLENGES 
// --------------------------------

// 1. 🏆 Add a /goodbye endpoint that responds with "Goodbye, see you later!"
app.get("/goodbye", (req, res) => {
    res.send("Goodbye, see you later!")
});

// 2. 🏆 Add a /happy-birthday endpoint that responds with "Happy birthday!!!"
app.get("/happy-birthday", (req, res) => {
    res.send("Happy birthday!!!");
});

// --------------------------------
// 🚀 LEVEL 2 CHALLENGES — ADDING DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /happy-birthday/:name endpoint says "Happy birthday, [name]!!!"
app.get("/happy-birthday/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Happy birthday, ${name}!!!`);
});

// 2. 🏆 Add a /say-hello/:name/:language endpoint that says hello in multiple languages. Examples:
//      - If language = "English", respond with "Hello, [name]!"
//      - If language = "Spanish", respond with "Hola, [name]!"
//      - If language = "Vietnamese", respond with "Xin chao, [name]!"
//      - If language = "Turkish", respond with "Merhaba, [name]!"
//      - Add as many languages as you want! 
//      - Otherwise, respond with "Language not supported."" 
app.get("/say-hello/:name/:language", (req, res) => {
    const name = req.params.name;
    const language = req.params.language.toLowerCase();
    let greeting;
    if (language === "english") {
        greeting = `Hello, ${name}!`;
    } else if (language === "spanish") {
        greeting = `Hola, ${name}!`;
    } else if (language === "vietnamese") {
        greeting = `Xin chao, ${name}!`;
    } else if (language === "turkish") {
        greeting = `Merhaba, ${name}!`;
    } else {
        greeting = "Language not supported.";
    }
    res.send(greeting);
});

// --------------------------------
// 🚀 LEVEL 3 CHALLENGES — EVEN MORE DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /calculate-dog-years/:dogName/:humanYears endpoint that calculates a dog's age in dog years. Refer to your dogAgeCalculator.js file. 
// 1 human year = 15 dog years for the first year, 9 dog years for the second year, and 5 dog years for each year after that.
app.get("/calculate-dog-years/:dogName/:humanYears", (req, res) => {
    const dogName = req.params.dogName;
    const humanYears = Number(req.params.humanYears);
    let dogYears;

    if (humanYears === 1) {
        dogYears = 15;
    } else if (humanYears === 2) {
        dogYears = 15 + 9;
    } else if (humanYears > 2) {
        dogYears = 15 + 9 + (humanYears - 2) * 5;
    } else {
        dogYears = 0; // Handle case for humanYears <= 0
    }

    res.send(`${dogName} is ${dogYears} years old in dog years.`);
});

// 2. 🏆 Add a /calculate-tip/:bill/:tipPercentage/:numGuests endpoint that calculates the amount each guests owes. Refer to your tipCalculator.js file. 
app.get ("/calculate-tip/:bill/:tipPercentage/:numGuests", (req, res) => {
    const bill = Number(req.params.bill);
    const tipPercentage = .20;
    const numGuests = Number(req.params.numGuests);

    let tipAmount = bill * tipPercentage;
    let totalBill = bill + tipAmount;
    let amountOwedPerGuest = totalBill / numGuests;

    res.send(`The tip amount is ${tipAmount}, which brings the total bill to ${totalBill}. Each guest owes ${amountOwedPerGuest}.`)

}); 
// --------------------------------
// LEVEL 4 CHALLENGES — USING THE FILE SYSTEM MODULE
// --------------------------------

// 1. 🏆 Add a /get-birthstone/:month endpoint that tells the user the birthstone for the inputted month using the fs module. Use the birthstones-data.json file in this fold

// 2. 🏆 Add a /get-all-pizza-orders endpoint that responds with the array of pizza orders. Use the pizza-orders-data.json file in this folder.

// 3. 🏆 Add a /get-one-pizza-order/:index endpoint that responds with the specified pizza order. 

// --------------------------------
// 🚀 LEVEL 5 CHALLENGES — USING THIRD-PARTY MODULES
// --------------------------------

// 1. 🏆 Add a /is-leap-year/:year endpoint that responds with whether the specified year is a leap year. Use the moment third-party node module and refer to your leap-year.js file.

// 2. 🏆 Add a /get-signs/:month/:day/:year endpoint that responds with the user's astrological and zodiac signs based on their inputted birthday. Use the horoscope third-party node module and refer to your sign-finder.js file.
