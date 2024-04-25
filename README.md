# Your First Cool Bot 😎🤖

Hey you wanna make a bot on the XMTP network? Heck yeah. This repo makes that easier. To see other Bot examples checkout [Awesome XMTP](https://github.com/xmtp/awesome-xmtp)

## Usage

Wanna try it out? Message `0x61175cdB3cdC0459896e10Cce0A4Dab49FD69702` on [Converse](https://converse.xyz/dm/0x61175cdB3cdC0459896e10Cce0A4Dab49FD69702) or [Coinbase Wallet](https://go.cb-w.com/messaging?address=0x61175cdB3cdC0459896e10Cce0A4Dab49FD69702)

## Development

#### Setup and Dependencies

To kickstart the tutorial, you'll need to clone the repository containing the bot code. Follow these steps:

```bash
git clone https://github.com/fabriguespe/your-first-cool-bot
cd your-first-cool-bot
# copy env variables template
cp .env.example .env
```

#### Variables

```bash
KEY= # the private key of the bot
XMTP_ENV= # set to production or dev network
REDIS_CONNECTION_STRING= # the connection string for the Redis database
```

#### Bot logic

This is a simple yet powerful conversational framework that will allow you to customize it to your needs.

```tsx
const cacheStep = inMemoryCacheStep.get(senderAddress) || 0;

let message = "";
if (cacheStep === 0) {
  message = "Welcome! Choose an option:\n1. Info\n2. Subscribe";
  // Move to the next step
  inMemoryCacheStep.set(senderAddress, cacheStep + 1);
} else if (cacheStep === 1) {
  if (content === "1") {
    message = "Here is the info.";
    //reset the bot to the initial step
    inMemoryCacheStep.set(senderAddress, 0);
  } else if (content === "2") {
    await redisClient.set(senderAddress, "subscribed");
    message =
      "You are now subscribed. You will receive updates.\n\ntype 'stop' to unsubscribe";
    //reset the bot to the initial step
    inMemoryCacheStep.set(senderAddress, 0);
  } else {
    message = "Invalid option. Please choose 1 for Info or 2 to Subscribe.";
    // Keep the same step to allow for re-entry
  }
} else {
  message = "Invalid option. Please start again.";
  inMemoryCacheStep.set(senderAddress, 0);
}

//Send the message
await context.reply(message);
```

#### Cron for daily subscriptions

Create a cron that sends daily messages to your **redis database** subscribers. This bot can run daily or according to your logic.

```jsx
cron.schedule(
  "0 0 * * *", //Daily
  async () => {
    const redisClient = await getRedisClient();
    const keys = await redisClient.keys("*");
    console.log(`Running daily task. ${keys.length} subscribers.`);
    for (const address of keys) {
      const subscriptionStatus = await redisClient.get(address);
      if (subscriptionStatus === "subscribed") {
        console.log(`Sending daily update to ${address}`);
        const client = await createClient();
        const conversation = await client?.conversations.newConversation(
          address
        );
        await conversation.send("Here is your daily update!");
      }
    }
  },
  {
    scheduled: true,
    timezone: "UTC",
  }
);
```

#### Install dependencies

> ⚠️ Ensure you're using `Yarn 4` for dependency management. Check with `yarn --version`.

```bash
# update to yarn 4
yarn set version stable

# install dependencies
yarn install

# running the bot

yarn build
yarn start

# to run with hot-reload:

yarn build:watch
yarn start:watch
```

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

## Documentation 📚

To learn more about XMTP, go to the [docs](https://docs.xmtp.org/).
