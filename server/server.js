import express from "express";
import Stripe from "stripe";
import cors from "cors";

const PORT = 9000;
const app = express();
app.use(express.json());
app.use(cors());

const stripe = new Stripe(
  "sk_test_51GtG4fDPITEOQdN26eFpIHTK1ucnwP6Thk4xBbCxHFbGbdAwL4JpwJ16RGPTcVr4YU0k2m6zoSQhaWkO2v5Zq6z800f1TU0i1X",
  {
    apiVersion: "2020-03-02",
  }
);

app.post("/payment", async (req, res) => {
  const { amount, id } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Buy ticket",
      payment_method: id,
      confirm: true,
    });
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ success: false, err: e.message });
  }
});

app.listen(PORT, "192.168.1.105", console.log(`Server run on port ${PORT}`));

process.on("unhandledRejection", (err) => {
  console.log(`UnhadledRejection: ${err.message}`);
});
process.on("uncaughtException", (err) => {
  console.error(`UncaughtException: ${err.message}`);
});
