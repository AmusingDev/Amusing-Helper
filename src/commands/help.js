const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const config = require('./../config.json');

module.exports.run = async (client, msg, args) => {

	if (args[0]) return; // If there are any arguments the command will not work

	msg.delete();
	const help = new MessageEmbed()

		.setColor(botconfig.embedcolor) // The color of the embed (left line)
		.setAuthor('Amusing Helper', client.user.avatarURL()) // Author line - ("Text", image)
		.setThumbnail(client.user.avatarURL()) // Image on the right side
		.setDescription("Amusing Helper is an open-source project that has been created for beginner bot developers as a learning tool!") // Main text

	const errembed = new MessageEmbed()

		.setColor(botconfig.errorcolor)
		.setTitle('Error!') // Large title text
		.setDescription("I am not able to DM you, please check if '**Allow direct messages from server members**' is enabled or if you've blocked the bot")

	msg.author.send(help).catch(() => msg.channel.send(errembed)); // Sends the embed to the author's DMs. If the author's DMs are closed, the bot will send the error 																		  embed in the chat
}

module.exports.command = {
    name: "help", // What the user has to say to trigger the command
    aliases: [] // Command alternatives
}
