import "dotenv/config";
import HandlerContext from "./lib/handler-context";
import run from "./lib/runner.js";

run(async (context: HandlerContext) => {
  const messageBody = context.message.content;

  // To reply, just call `reply` on the HandlerContext.
  await context.reply(`ECHO: ${messageBody}`);
});

export { default as createClient } from "./lib/client.js";
export { default as run } from "./lib/runner.js";
export { default as HandlerContext } from "./lib/handler-context.js";
