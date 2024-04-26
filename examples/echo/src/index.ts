import "dotenv/config";
import { xmtpClient, run, HandlerContext } from "@xmtp/botkit";

run(async (context: HandlerContext) => {
  const { content, senderAddress } = context.message;

  await context.reply(`ECHO: ${content}`);
});
