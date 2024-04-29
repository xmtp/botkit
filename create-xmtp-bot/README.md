# create-xmtp-bot

create-xmtp-bot is a command-line interface tool designed to help developers create and manage their custom build configurations easily.

To install it run the following command:

```bash
npx install create-xmtp-bot@latest
```

**Set the variables**

```bash
KEY= # 0x... the private key of the bot (with the 0x prefix)
XMTP_ENV=production # or `dev`
```

> ⚠️ Bot kit is not compatible with `bun` yet. Use `npm` or `yarn`

```bash
# install dependencies
yarn install

# running the bot
yarn build
yarn start

# to run with hot-reload
yarn build:watch
yarn start:watch

# run the gm example
yarn build:watch
yarn start:gm
```
