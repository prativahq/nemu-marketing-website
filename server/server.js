import express from "express";
import cors from "cors";
// const sgMail = require("@sendgrid/mail");
import sgMail from "@sendgrid/mail";
const app = express();
import dotenv from "dotenv";

dotenv.config();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/email", (req, res) => {
  const { email } = req.body;
  const msg = {
    to: email,
    from: "support@mynemu.com",
    subject: "Nemu: Discount Coupon",
    // text: "Get 15% off your first purchase",
    html: `<p>Hi there, <br></br><br></br>

    We are so glad you joined the <b>Nemu community!</b> With Nemu, simplify managing and dividing heirlooms so that you can focus on what matters most while preserving your family stories.<br></br><br></br>
    
    Use the discount code <b>NEMUNOW</b> for 15% off today!<br></br><br></br>
    
    Want to know our winning recipe? We think you will like it.<br></br>
    - Quickly catalog your favorite items using our image recognition tool and legacy saving features like voice notes.<br></br>
    - Next, choose if you want to get items priced, divided, or sold.<br></br>
    &nbsp; - <b>Fairly divide</b> your heirlooms, prevent family drama and avoid unnecessary travel through our division module. We split your heirlooms based on your family’s emotional value towards them.<br></br>
    &nbsp; - Submit requests for <b>appraisal and selling support</b>. We help you find the best way to get these tasks done and support you through them.<br></br><br></br>
    
    Get started today through the <b>iOS app store</b> or the <b>Google Play store</b>.<br></br><br></br>
    
    We’d love to hear from you! Please feel free to reach us at <a href="mailto:hello@mynemu.com">hello@mynemu.com</a>.<br></br><br></br>
    
    Best,<br></br>
    The Nemu Team
    </p>`,
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
      res.json({ status: 200, message: "Email sent" });
    })
    .catch((error) => {
      console.error(error);
      res.json({ status: 500, message: "Email not sent" });
    });
});

app.listen(port, () => {
  console.log("Server has started on port " + port);
});
