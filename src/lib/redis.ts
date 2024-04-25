import { createClient, RedisClientType } from "@redis/client";

export const getRedisClient = async () => {
  try {
    console.log("Connecting to Redis...", process.env.REDIS_CONNECTION_STRING);
    const client = createClient({
      url: process.env.REDIS_CONNECTION_STRING,
      socket: {
        connectTimeout: 10000, // Timeout in milliseconds
      },
    });
    const redisPersistence = await import("@xmtp/redis-persistence");
    await client.connect();
    return {
      redisClient: client,
      redisConfig: {
        basePersistance: new redisPersistence.RedisPersistence(
          client as any,
          "xmtp:"
        ),
      },
    };
  } catch (error) {
    console.error(
      "Failed to connect to Redis. Please check the connection settings."
    );
    throw new Error("Redis connection failure"); // Throw a generic error message
  }
};
/*
export const getBasePersistence = async (redisClient: RedisClientType) => {
  const redisPersistence = await import("@xmtp/redis-persistence");
  // Assuming RedisPersistence expects a RedisClientType, cast it explicitly
  return {
    client: redisClient,
    basePersistance: new redisPersistence.RedisPersistence(
      redisClient as any,
      "xmtp:"
    ),
  };
};*/
