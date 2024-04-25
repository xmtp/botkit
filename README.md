# BOT KIT

Minimal viable package for creating bots.

## Usage

```bash
yarn add @xmtp/botkit
```

```tsx
import { createClient, run, HandlerContext } from "@xmtp/botkit";

run(async (context: HandlerContext) => {
  const messageBody = context.message.content;

  // To reply, just call `reply` on the HandlerContext.
  await context.reply(`ECHO: ${messageBody}`);
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
```

## Development

To kickstart the tutorial, you'll need to clone the repository containing the bot code. Follow these steps:

```bash
git clone https://github.com/xmtp/botkit
cd botkit
# copy env variables template
cp .env.example .env
```
