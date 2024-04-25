import createClient from "./client.js";
import HandlerContext from "./handler-context.js";

type Handler = (context: HandlerContext) => Promise<void>;

export default async function run(handler: Handler, extraConfig?: any) {
  const client = await createClient(extraConfig);

  console.log(`Listening on ${client.address}`);

  for await (const message of await client.conversations.streamAllMessages()) {
    try {
      if (message.senderAddress === client.address) {
        continue;
      }

      const context = new HandlerContext(message);

      // Make sure to pass both context and extraConfig to the handler here
      await handler(context);
    } catch (e) {
      console.log(`error`, e);
    }
  }
}
