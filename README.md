# The Storyblok Next Resend & React Email PoC

## Requirements

To use this project you have to have a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com), it's free.

## How to get started?

### 1. Install all dependecies

```sh
yarn # or npm install
```

### 2. Create .env file and add the SB Access Token & Resend API_Key

```
STORYBLOK_API_TOKEN=<Preview_Token_From_Your_Space_For_Local_Env>
RESEND_API_KEY=<Resend_Api_Key_Generated>
TESTING_EMAIL_ADDRESS=<Your_Email_Address_To_Receive_Results>
```

### 3. Run the project

Set the preview domain in <strong>Storyblok</strong> to `https://localhost:3010/`

```sh
# to run in developer mode
$ yarn dev # or npm run dev

# (in another terminal instance) to run ssh
$ mkcert localhost
$ local-ssl-proxy --source 3010 --target 3000 --cert localhost.pem --key localhost-key.pem
```

```sh
# to build your project
$ yarn build # or npm run build
```

### 4. Preview the email templates without content

```sh
# to preview emails in developer mode
$ cd email-templates
$ yarn & yarn dev # or npm run dev
```

## How to send an email with Resend locally?

To try out the React email template & Storyblok content demo, call [https://localhost:3010/api/send](https://localhost:3010/api/send) in your browser, when the server is running locally, and check your inbox in the address you defined in the .env variable.

## Resources

- [Next.js docs](https://nextjs.org/docs/#setup)
- [Storyblok Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial)
- [Resend](https://resend.com/)
- [React Email docs](https://react.email/docs/getting-started)
