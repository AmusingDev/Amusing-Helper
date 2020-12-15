const Discord = require('discord.js');

module.exports.run = async (client, msg, args) => {

    if (args[0]) return; // If there are any arguments the command will not work
    
    let roles = msg.guild.roles.cache.size <= 35 ? `<@&${msg.guild.roles.cache.map(role => role.id).join('>, <@&')}>` : 'Too many roles...';
    let latency = `${Date.now() - msg.createdTimestamp}ms`;

	const embed = new MessageEmbed()

		.setColor(config.embedcolor) // The color of the embed (left line)
		.setAuthor(msg.guild.name, msg.guild.iconURL()) // Author line - The guild's name and icon
		.setThumbnail(msg.guild.iconURL()) // Image on the right side - The guild's icon
		.addField('Owner', `<@${msg.guild.ownerID}>`, true) // Text field - Guild owner's ID
		.addField('Region', msg.guild.region, true) // Text field - Guild's region
		.addField('Server ID', msg.guild.id, true) // Text field - Guild's ID
		.addField('Members', msg.guild.members.cache.size, true) // Text field - Guild's total member count
		.addField(`Users`, msg.guild.members.cache.filter(member => !member.user.bot).size, true)  // Text field - Guild's user count (non-bots)
		.addField(`Bots`, msg.guild.members.cache.filter(member => member.user.bot).size, true) // Text field - Guild's bot count (bots)
		.addField(`Online`, msg.guild.presences.cache.size, true)  // Text field - Guild's total online user count
		.addField('Emojis', msg.guild.emojis.cache.size, true) // Text field - Guild's emoji count
		.addField('Roles', msg.guild.roles.cache.size, true) // Text field - Guild's role count
		.addField('Channels', `Total: **${msg.guild.channels.cache.filter((c) => c.type !== 'category').size}**\nCategories: **${msg.guild.channels.cache.filter((c) => c.type === 'category').size}**\nText: **${msg.guild.channels.cache.filter((c) => c.type === 'text').size}**\nVoice: **${msg.guild.channels.cache.filter((c) => c.type === 'voice').size}**`) // Text field - Guild's channel count
		.addField('Server Boosting', `Boosts: **${msg.guild.premiumSubscriptionCount}**\nTier: **${msg.guild.premiumTier}**`) // Text field - Guild's server boosting count
		.addField('Role List', roles) // Text field - Lists all of the guild's roles (unless the guild has more than 35 roles)
		.setFooter(`Latency: ${latency}`) // Footer - User's latency
		.setTimestamp() // Timestamp - The exact time when the message was sent

	msg.channel.send(embed).catch(console.error); // Sends the embed in the channel the command is used in. If the bot encounters an error, the error will be logged

}

module.exports.command = {
    name: "serverinfo", // What the user has to say to trigger the command
    aliases: ["server-info", "guildinfo", "guild-info"] // Command alternatives
}
