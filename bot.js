const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(NjU1MDM5MDM3NTYzOTk0MTE2.XfSBAA.7XUqtVv6OCz6x7T5XCjv0U3dS3o);
