const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req, res) => {
    const { name, phone, query } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ameymali54@icloud.com",
            pass: "onkr-axrl-ubof-dzye"
        }
    });

    let mailOptions = {
        from: "ameymali54@icloud.com" ,
        to: "ameymali2@gmail.com",
        subject: `Enquiry from ${name}`,
        text: `Phone: ${phone}\nQuery: ${query}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("Mail Error", err);
            res.status(500).json({ error: err });
        } else {
            console.log("Mail Sent", info.response);
            res.status(200).json({ message: "Mail Sent" });
        }
    });
});

app.listen(9000, () => {
    console.log("Ready @ 9000");
});
