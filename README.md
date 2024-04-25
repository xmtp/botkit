# BOT KIT

Minimal viable package for creating bots.

## Development

To kickstart the tutorial, you'll need to clone the repository containing the bot code. Follow these steps:

```bash
git clone https://github.com/xmtp/botkit
cd botkit
# copy env variables template
cp .env.example .env
```

## Install dependencies

> ⚠️ Ensure you're using `Yarn 4` for dependency management. Check with `yarn --version`.

```bash
# update to yarn 4
yarn set version stable

# install dependencies
yarn install

# running the bot

yarn build
yarn start

# to run with hot-reload:

yarn build:watch
yarn start:watch
```

## Variables

```bash
KEY= # the private key of the bot
XMTP_ENV= # set to production or dev network
```
