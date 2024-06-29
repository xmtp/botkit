import { Client as XmtpClient } from "@xmtp/xmtp-js";
import { Wallet } from "ethers";
import { GrpcApiClient } from "@xmtp/grpc-api-client";

export default async function xmtpClient(
  privateKey: string | null = null,
): Promise<XmtpClient> {
  let key = privateKey ?? process.env.KEY;
  if (!key) {
    key = await Wallet.createRandom().privateKey;
    console.error(
      "KEY not set. Using random one. For using your own wallet , set the KEY environment variable.",
    );
    console.log("Random private key: ", key);
  }
  const wallet = new Wallet(key);
  let env = process.env.XMTP_ENV;
  if (process.env.XMTP_ENV !== "production" && process.env.XMTP_ENV !== "dev") {
    console.error("XMTP_ENV must be set to 'production' or 'dev'"); // log in colors in terminal
    env = "production";
  }

  const defaultConfig = {
    env: env as any,
    apiClientFactory: GrpcApiClient.fromOptions as any,
  };
  const client = await XmtpClient.create(wallet, defaultConfig);
  console.log(`Listening on ${client.address}`);

  return client;
}
