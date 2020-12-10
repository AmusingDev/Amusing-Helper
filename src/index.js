// ---------------------------------------- PACKAGES ---------------------------------------- //

const { Client, MessageEmbed } = require('discord.js');
const { ShardingManager } = require('discord.js');
const botconfig = require('./botconfig.json');
const Discord = require('discord.js');
const prefix = botconfig.prefix;
const fs = require('fs');

const client = new Discord.Client();
client.aliases = new Discord.Collection();
client.commands = new Discord.Collection();
const status_options = ['!help`, "Open-source Project"];

// ---------------------------------------- LOAD COMMANDS ---------------------------------------- //

	fs.readdir('./commands/', (err, files) => {

		if (err) console.log(err);

		let file = files.filter(f => f.split('.').pop() === 'js')
		if (file.length <= 0) {
			console.log("Couldn't find commands.");
			return;
		}

		file.forEach((f, i) => {
			let props = require(`./commands/${f}`);
			client.commands.set(prefix + props.command.name, props);

			if (props.command.aliases) {
				props.command.aliases.forEach(alias => {
					client.aliases.set(prefix + alias, props);
				});
			};

			console.log(`${f} is Working`);
		});

	});

// ---------------------------------------- DEBUGGING ---------------------------------------- //

client.on('error', console.error);

client.on('debug', console.log)
	.on('warn', console.log);

// ---------------------------------------- ON START ---------------------------------------- //

client.on('ready', () => {

	console.log(`\nThe bot is online in ${client.guilds.cache.size} servers!`);

	setInterval(() => {
		const index = Math.floor(Math.random() * (activity_list.length));
		client.user.setActivity(status_options[index], { type: 'WATCHING' }); // Changes the bot's status/activity every 2.5 seconds
	}, 2500);

});

// ---------------------------------------- ON COMMAND ---------------------------------------- //

client.on('message', async msg => {

	if (msg.author.bot) return;

	let messageArray = msg.content.toLowerCase().split(' ');
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	let commandfile = client.commands.get(cmd.replace(prefix.length - 1)) || client.aliases.get(cmd.replace(prefix.length - 1));
	if (commandfile) commandfile.run(client, msg, args);

});

// ---------------------------------------- CLIENT LOGIN ---------------------------------------- //

client.login("TOKEN"); // Replace "TOKEN" with your bot's token
