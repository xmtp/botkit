# Bot Kit

Minimal viable package for creating bots.

## Usage

```bash
yarn add @xmtp/botkit
```

```tsx
import { xmtpClient, run, HandlerContext } from "@xmtp/botkit";

run(async (context: HandlerContext) => {
  const messageBody = context.message.content;

  // To reply, just call `reply` on the HandlerContext.
  await context.reply(`ECHO: ${messageBody}`);
});
```

### Examples

- [Echo](https://github.com/xmtp/botkit/tree/main/examples/echo): Get started with a simple echo bot
- [Conversational](https://github.com/xmtp/botkit/tree/main/examples/conversational): Drive retention with conversations and subscriptions
- [GPT](https://github.com/xmtp/botkit/tree/main/examples/gpt): Relay messages through Open AI APIs

## Development

To kickstart the tutorial, you'll need to clone the repository containing the bot code. Follow these steps:

```bash
git clone https://github.com/xmtp/botkit
cd botkit
# copy env variables template
cp .env.example .env
```

> ⚠️ Bot kit is not compatible with `bun`. Use `npm` or `yarn`

```bash
# install dependencies
yarn install

# running the bot
yarn build
yarn start

# to run with hot-reload
yarn build:watch
yarn start:watch
```

## Variables

```bash
KEY= # the private key of the bot
XMTP_ENV= # set to production or dev network
```

## Development

## Deployment

Railway is a platform that simplifies application deployment. Here’s how to deploy this bot:

> 🏎️ Want to race ahead? Start from a pre-built [railway template](https://railway.app/template/X174KA?referralCode=AxzNoN)

- Sign up at [Railway](https://railway.app/).
- Click 'New Project' and select 'Node.js'.
- Create a redis DB
- Connect your GitHub repository or use Railway's template.
- Set your environment variables and redis string url
- Deploy your application.
- Deploy a [ENS domain](https://ens.domains/) and share your bot!

## Identities 🥷🏻

![](https://github.com/xmtp/awesome-xmtp/assets/1447073/9bb4f8c2-321e-4b6d-b52e-2105d69c4d47)

Learn about the almost 2 million identities that are already part of XMTP by visiting the [Dune dashboard](https://dune.com/xmtp_team/dash).
