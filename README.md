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

> ⚠️ Bot kit is not compatible with `bun`. Use `npm` or `yarn`

```bash
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
