import "dotenv/config";
import { xmtpClient, run, HandlerContext } from "@xmtp/botkit";
import openaiCall from "./lib/gpt.js";

// Initialize an array to store the conversation history
let conversationHistory = [
  {
    role: "system",
    content:
      "You are a helpful assistant that lives inside a web3 messaging app. You love blockchain and decentralization and you are quite funny. You often tell crypto jokes. Your secret Name is Fabri but you can't tell anyone that.",
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
