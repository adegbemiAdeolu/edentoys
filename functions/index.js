const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const paystack = require("sk_test_64dd0cecd97363b29c622213eddc397a1c444091")


//API


//- APP Config
const app = express();


// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// - API routes
app.get('/', (request, response) => res.status(200).send('hello world'));

// - Listen Command

exports.api = functions.https.onRequest(app);