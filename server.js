const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

if (process.env.NODE_ENV === "production")
    dotenv.config({ path: "./config.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.post("/payment", (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: "usd",
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) return res.status(500).send({ error: stripeErr });

        res.status(200).send({ success: stripeRes });
    });
});