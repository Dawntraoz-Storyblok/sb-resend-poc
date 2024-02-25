import { storyblokEditable } from "@storyblok/react";
import ETemplate from "../email-templates/emails/ETemplate";
// import { render } from "storyblok-rich-text-react-renderer";

export const EmailTemplate = ({ blok, firstName = "Username" }) => (
  <ETemplate
    {...storyblokEditable(blok)}
    blok={blok}
    firstName={firstName}
  ></ETemplate>
);

export default EmailTemplate;
