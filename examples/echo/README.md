# Echo Bot

Simple echo bot

## Usage

```jsx
import "dotenv/config";
import { xmtpClient, run, HandlerContext } from "@xmtp/botkit";

run(async (context: HandlerContext) => {
  const { content, senderAddress } = context.message;

  await context.reply(`ECHO: ${content}`);
});
```

## Running the bot

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
OPEN_AI_API_KEY= # openai api key
```
