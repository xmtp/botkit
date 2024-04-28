import { Client as XmtpClient } from "@xmtp/xmtp-js";
import { Wallet } from "ethers";
import { GrpcApiClient } from "@xmtp/grpc-api-client";

// Accept a config object as a parameter
export default async function xmtpClient(
  newBotConfig = {}
): Promise<XmtpClient> {
  const key = process.env.KEY;
  if (!key) {
    throw new Error("KEY not set");
  }

  const wallet = new Wallet(key);
  if (process.env.XMTP_ENV !== "production" && process.env.XMTP_ENV !== "dev") {
    throw new Error("XMTP_ENV must be set to 'production' or 'dev'");
  }

  const defaultConfig = {
    env: process.env.XMTP_ENV as any,
    apiClientFactory: GrpcApiClient.fromOptions,
  };
  // Merge the default configuration with the provided config. Repeated fields in newBotConfig will override the default values
  const finalConfig = { ...defaultConfig, ...newBotConfig };
  const client = await XmtpClient.create(wallet, finalConfig);

  return client;
}
