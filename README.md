# discord-js-bootstrap
starting point to create a discord.js v13 bot

It uses both the command handler and event handler listed in the discord.js guide.

## Setup:
- cp `config.json.template` to `config.json` and edit it according to your needs
- run `node depoy-commands.js` to register the slash commands with Discord
- run `node .` to run the bot

## Structure:
- `/commands` contains each of the slash commands with some examples.
- `/events` are the event handlers
  - `ready.js` handles the bot login
  - `interactionCreate.js` handles any interactions (currently only has slash commands)
  - `messageCreate.js` handles any messages as Discord.js v12 used to do