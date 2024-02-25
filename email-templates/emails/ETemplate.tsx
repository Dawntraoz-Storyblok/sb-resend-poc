import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const ETemplate = ({ blok = {}, firstName }) => (
  <Html>
    <Head />
    <Preview>
      {blok.preheader ?? "<Preview text coming from Storyblok>"}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Hr style={hr} />
          <Text style={paragraph}>{`${
            blok.header ?? "<Header text coming from Storyblok>"
          } ${firstName}`}</Text>
          <Text style={paragraph}>
            {blok.summary ?? "<Summary text coming from Storyblok>"}
          </Text>
          <Button style={button} href="#">
            CTA button
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>
            If you haven't finished your integration, you might find our{" "}
            <Link style={anchor} href="https://stripe.com/docs">
              docs
            </Link>{" "}
            handy.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Storyblok, React Email & Resend, working together since 2024
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ETemplate;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};

const anchor = {
  color: "#556cd6",
};

const button = {
  backgroundColor: "#656ee8",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
