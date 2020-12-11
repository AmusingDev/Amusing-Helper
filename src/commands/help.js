const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const botconfig = require('./../botconfig.json');
const prefix = botconfig.prefix;

module.exports.run = async (client, msg, args) => {

	if (args[0]) return;

	msg.delete();
	const help = new MessageEmbed()

		.setColor(botconfig.embedcolor)
		.setAuthor('Amusing Helper', client.user.avatarURL())
		.setThumbnail(client.user.avatarURL())
		.setDescription("Amusing Helper is an open-source project that has been created for beginner bot developers as a learning tool!")	

	const errorEmbed = new MessageEmbed()

		.setColor(botconfig.errorcolor)
		.setTitle('Error!')
		.setDescription("I am not able to DM you, please check if '**Allow direct messages from server members**' is enabled or if you've blocked the bot")

	msg.author.send(help).catch(() => msg.channel.send(errorEmbed))
}

module.exports.command = {
	name: "help",
    aliases: []
}
