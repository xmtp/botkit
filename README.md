# Bot Kit

Minimal viable package for creating bots.

## Usage

```bash
yarn add @xmtp/botkit
```

```tsx
import { run, HandlerContext } from "@xmtp/botkit";

run(async (context: HandlerContext) => {
  // Get the message and the address from the sender
  const { content, senderAddress } = context.message;

  // To reply, just call `reply` on the HandlerContext.
  await context.reply(`ECHO: ${content}`);
});
```

## Examples

- [Echo](https://github.com/xmtp/botkit/tree/main/examples/echo): Get started with a simple echo bot
- [Conversational](https://github.com/xmtp/botkit/tree/main/examples/conversational): Drive retention with conversations and subscriptions
- [GPT](https://github.com/xmtp/botkit/tree/main/examples/gpt): Relay messages through Open AI APIs

See more examples in the [Awesome XMTP ⭐️](https://github.com/xmtp/awesome-xmtp) repo

## Deployment

Here’s how to easily deploy this bot:

- Sign up at [Railway](https://railway.app/).
- Click 'New Project' and select 'Node.js'.
- Create a Rredis DB or other (Optional)
- Connect your GitHub repository
- Set your environment variables
- Deploy your application.
- Register an [ENS domain](https://ens.domains/) and share your bot!

## Development

To kickstart the tutorial, you'll need to clone the repository containing the bot code. Follow these steps:

```bash
git clone https://github.com/xmtp/botkit
cd botkit
# copy env variables template
cp .env.example .env
```

**Set the variables**

```bash
KEY= # the private key of the bot
XMTP_ENV= # set to production or dev network
```

> ⚠️ Bot kit is not compatible with `bun` yet. Use `npm` or `yarn`

```bash
# install dependencies
yarn install

# running the bot
yarn build
yarn start

# to run with hot-reload
yarn build:watch
yarn start:watch

# run the echo example
yarn build:watch
yarn start:echo
```

## Messaging apps 💬

Test the bots in messaging apps

- [Converse](https://getconverse.app/): Own your conversations. Works with Frames (Transactions TBA)
- [Coinbase Wallet](https://www.coinbase.com/wallet): Your key to the world of crypto. (Frame support TBA)
- [dev-inbox](https://dev-dev-inbox.vercel.app/): Dev focused messaging client that renders Frames (Transactions TBA) (dev network)

## Identities

![](https://github.com/xmtp/awesome-xmtp/assets/1447073/9bb4f8c2-321e-4b6d-b52e-2105d69c4d47)

Learn about the almost 2 million identities that are already part of XMTP by visiting the [Dune dashboard](https://dune.com/xmtp_team/dash).
