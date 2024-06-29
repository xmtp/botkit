import xmtpClient from "./client.js";
import HandlerContext from "./handler-context.js";

type Handler = (context: HandlerContext) => Promise<void>;

export default async function run(handler: Handler) {
  const client = await xmtpClient();

  for await (const message of await client.conversations.streamAllMessages()) {
    try {
      if (
        message.senderAddress.toLowerCase() === client.address.toLowerCase()
      ) {
        continue;
      }

      const context = new HandlerContext(message);

      await handler(context);
    } catch (e) {
      console.log(`error`, e);
    }
  }
}
