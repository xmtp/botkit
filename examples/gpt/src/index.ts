import { run, HandlerContext } from "@xmtp/botkit";
import { textGeneration } from "./lib/openai.js";

// Initialize an array to store the conversation history
const systemPrompt =
  "You are a helpful assistant that lives inside a web3 messaging app. You love blockchain and decentralization and you are quite funny. You often tell crypto jokes.";

run(async (context: HandlerContext) => {
  const { message } = context;

  const { content } = message;

  try {
    const { reply, history } = await textGeneration(content, systemPrompt);

    await context.reply(reply);
  } catch (error) {
    // Handle the error, for example, by sending an error message to the user
    await context.reply(
      "Failed to process your request. Please try again later.",
    );
  }
});
