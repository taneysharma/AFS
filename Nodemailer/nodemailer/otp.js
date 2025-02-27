const nodemailer = require("nodemailer");

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  service: "gmail",
  secure: false, // Use true for port 465
  auth: {
    user: "taney219621@gmail.com",
    pass: "xqfw oqla tcjy hbvt", // Use App Password instead of real password-
  },
});

// Function to generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Store OTP in-memory (Use a DB in production)
let storedOTP = generateOTP();
async function sendOTP(email) {
  try {
    const info = await transporter.sendMail({
      from: "taney219621@gmail.com",
      to: "shruti842.be22@chitkara.edu.in",
      subject: "Your OTP for Verification",
      text: `Your OTP is: ${storedOTP}`,
      html: `<p>Your OTP is: <b>${storedOTP}</b></p>`,
    });

    console.log("OTP sent: %s", info.messageId);
    return storedOTP; // For testing, log this (remove in production)
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Function to verify OTP
function verifyOTP(inputOTP) {
  return inputOTP === storedOTP;
}

// Example usage
const email = "taney887.be22@chitkara.edu.in";
sendOTP(email);

// Simulating OTP verification (replace with actual user input)
setTimeout(() => {
  const userInput = "123456"; // Replace with actual user input
  if (verifyOTP(userInput)) {
    console.log("OTP verified successfully!");
  } else {
    console.log("Invalid OTP!");
  }
}, 10000); // Simulating delay before user enters OTP
