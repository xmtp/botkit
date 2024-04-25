import "dotenv/config";
import HandlerContext from "../src/lib/handler-context";
import run from "../src/lib/runner.js";

run(async (context: HandlerContext) => {
  const messageBody = context.message.content;

  // To reply, just call `reply` on the HandlerContext.
  await context.reply(`ECHO: ${messageBody}`);
});
