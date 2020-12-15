const Discord = require('discord.js');

module.exports.run = async (client, msg, args) => {

    if (args[0]) return; // If there are any arguments the command will not work
    let latency = `\`${Date.now() - msg.createdTimestamp}ms\``;
    let api_latency = `\`${Math.round(client.ws.ping)}ms\``;
    
    msg.channel.send(`**Latency**: ${latency}\n**API Latency**: ${api_latency}`).catch(console.error);

}

module.exports.command = {
    name: "ping", // What the user has to say to trigger the command
    aliases: ["latency"] // Command alternatives
}
