const Discord = require('discord.js');

module.exports.run = async (client, msg, args) => {

    if (args[0]) return; // If there are any arguments the command will not work
    let latency = Date.now() - msg.createdTimestamp;
    let api_latency = Math.round(client.ws.ping);
    
    msg.channel.send(`**Latency**: \`${latency}ms\`\n**API Latency**: \`${api_latency}ms\``).catch(msg.channel.send("An error has occured!"));

}

module.exports.command = {
    name: "ping", // What the user has to say to trigger the command
    aliases: ["latency"] // Command alternatives
}
