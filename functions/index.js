const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HI7xqG8udYDD9WQhzbY0EC0tU0y1jKgOmTJFIVVOKFvQTu1g5aAP3blIVcTsuYJ3WnkYe9pmxS2cmkhi1LxyDks00oAHhJDB3"
);

// To set up an API

// 1 - App Config
const app = express();

// 2 - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// 3 - API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request received for >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// 4 - Listen Command
exports.api = functions.https.onRequest(app);
