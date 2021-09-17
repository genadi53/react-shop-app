if (process.env.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const path = require("path");
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51IwpIGGsIir6ptzl3HduCvY7iYjZw6S3NHi6Lo9iSKM0QTJ0ICpCJZDQZjmra5AyNZfOV8aRibvjqni7awYGKnjF00Elq4aM0Q"
);
const compression = require("compression");
const enforce = require("express-sslify");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000/",
    credentials: true,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(compression());
  app.use(express.static(path.join(__dirname, "client/build")));
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.get("/serviceWorkerRegistration.js", (req, res) => {
  console.log(path.resolve(__dirname, "..", "serviceWorkerRegistration.js"));
  res.sendFile(
    path.resolve(
      __dirname,
      "..",
      "client/build",
      "serviceWorkerRegistration.js"
    )
  );
});

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    //currency: 'bgn',
    currency: "usd",
    description: "Learning React",
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port: ${port}`);
});
