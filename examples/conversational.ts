import "dotenv/config";
import HandlerContext from "../src/lib/handler-context";
import run from "../src/lib/runner.js";

//Tracks conversation steps
const inMemoryCacheStep = new Map<string, number>();

//List of words to stop or unsubscribe.
const stopWords = ["stop", "unsubscribe", "cancel", "list"];

run(async (context: HandlerContext) => {
  const { content, senderAddress } = context.message;
  const lowerContent = content.toLowerCase();

  //Handles unsubscribe and resets step
  if (stopWords.some((word) => lowerContent.includes(word))) {
    inMemoryCacheStep.set(senderAddress, 0);
  }

  const cacheStep = inMemoryCacheStep.get(senderAddress) || 0;

  let message = "";
  if (cacheStep === 0) {
    message =
      "Welcome! Choose an option:\n1. Info\n2. Another Option\ntype 'stop' to restart";
    // Move to the next step
    inMemoryCacheStep.set(senderAddress, cacheStep + 1);
  } else if (cacheStep === 1) {
    if (content === "1") {
      message = "Here is the info.";
      //reset the bot to the initial step
      inMemoryCacheStep.set(senderAddress, 0);
    } else if (content === "2") {
      message = "This is option 2.";
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
});
