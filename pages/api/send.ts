import type { NextApiRequest, NextApiResponse } from "next";
import ETemplate from "../../email-templates/emails/ETemplate";
import { Resend } from "resend";
import { getStoryblokApi } from "@storyblok/react";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const storyblokApi = getStoryblokApi();
  const {
    data: { story },
  } = await storyblokApi.get(`cdn/stories/email/template`, {
    version: "draft",
  });

  const { data, error } = await resend.emails.send({
    from: "Albi from Storyblok <poc@resend.dev>",
    to: [process.env.TESTING_EMAIL_ADDRESS],
    subject: "Hello world",
    react: ETemplate({
      blok: story.content,
      firstName: "Alba",
    }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};
