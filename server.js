const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const e = require("express");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => {
  console.log("Server is Running");
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "anasamin26@gmail.com",
    pass: "evytiomovmmupsae",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send Email");
  }
});

router.post("/connect", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  console.log("First Name: ", req.body.firstName);
  console.log("Last Name: ", req.body.lastName);
  console.log("Email: ", req.body.email);
  console.log("Phone: ", req.body.phone);
  console.log("Message: ", req.body.message);

  const mail = {
    from: name,
    to: "anasamin26@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone:${phone}</p>
        <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    console.log("I am in sending phase");
    if (error) {
      console.log("Ouch Something terrible happened");
      res.json(error);
    } else {
      console.log("Ready for delivery");

      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
