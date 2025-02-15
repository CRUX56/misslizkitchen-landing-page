require("dotenv").config(); //Load .env variables at the top

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendMail = require("./mailer");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    await sendMail(to, subject, message);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
