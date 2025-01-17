'use server'

import { Resend } from "resend"
import { render } from "@react-email/render";

import { CodepenChallengesEmail } from '@my-repo/transactional/emails/CodepenChallengesEmail';
 
const resend = new Resend(process.env.RESEND_KEY);

export async function sendCodePenChallenges() {
  const HTML = await render(<CodepenChallengesEmail/>);

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: 'delivered@resend.dev',
    subject: 'Codepen challenges of the moment',
    html: HTML
  });
}
