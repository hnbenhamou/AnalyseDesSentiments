import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
  endpoint: process.env.MAILTRAP_ENDPOINT,
  token: process.env.MAILTRAP_TOKEN,
  testInboxId: 2587295,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Abdelhakim",
};
