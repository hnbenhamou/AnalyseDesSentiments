import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import transporter from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: '"HYH" <ahsatout@gmail.com>',
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken
    ),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending verification email: ", error.message);
    throw new Error("Error sending verification email: " + error.message);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: '"HYH" <ahsatout@gmail.com>',
    to: email,
    subject: "Welcome to Our Service",
    html: `<p>Hello ${name},</p><p>Welcome to our service!</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Welcome email sent: " + info.response);
  } catch (error) {
    console.error("Error sending welcome email: ", error.message);
    throw new Error("Error sending welcome email: " + error.message);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const mailOptions = {
    from: '"HYH" <ahsatout@gmail.com>',
    to: email,
    subject: "Reset your password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Password reset email sent: " + info.response);
  } catch (error) {
    console.error("Error sending password reset email: ", error.message);
    throw new Error("Error sending password reset email: " + error.message);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const mailOptions = {
    from: '"HYH" <ahsatout@gmail.com>',
    to: email,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Password reset success email sent: " + info.response);
  } catch (error) {
    console.error(
      "Error sending password reset success email: ",
      error.message
    );
    throw new Error(
      "Error sending password reset success email: " + error.message
    );
  }
};
