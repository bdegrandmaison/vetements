import "dotenv";
import { createTransport, getTestMessageUrl } from "nodemailer";

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function createEmail(text: string): string {
  return `
    <div style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
    ">
        <h2>Bonjour</h2>
        <p>${text}</p>
        <p>😗</p>
    </div>
    `;
}

export interface MailResponse {
  accepted?: string[] | null;
  rejected?: null[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}
export interface Envelope {
  from: string;
  to?: string[] | null;
}

export async function sendPasswordResetEmail(
  resetToken: string,
  to: string
): Promise<void> {
  const info = (await transport.sendMail({
    to,
    from: "test@example.com",
    subject: "Vetements | Réinitialisation de mot de passe",
    html: createEmail(` Voici le lien pour réinitialiser votre mot de passe
    <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Cliquez ici pour réinitialiser</a>
    `),
  })) as MailResponse;
  if (process.env.MAIL_USER.includes("ethereal.email")) {
    console.log(`✉ Mail envoyé! Visionner: ${getTestMessageUrl(info)}`);
  }
}
