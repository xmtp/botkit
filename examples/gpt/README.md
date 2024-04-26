# Gpt Bot

Learn how to relay your bot messages to GPT Api's

## Usage

```jsx
// Initialize an array to store the conversation history
let conversationHistory = [
  {
    role: "system",
    content:
      "You are a helpful assistant that lives inside a web3 messaging app. You love blockchain and decentralization and you are quite funny. You often tell crypto jokes.",
  },
];

run(async (context: HandlerContext) => {
  const { message } = context;

  const { content } = message;

  try {
    const { reply, messages } = await openaiCall(
      content,
      conversationHistory,
      message.senderAddress
    );
    conversationHistory = messages; // Update the conversation history
    await context.reply(reply);
  } catch (error) {
    // Handle the error, for example, by sending an error message to the user
    await context.reply(
      "Failed to process your request. Please try again later."
    );
  }
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
