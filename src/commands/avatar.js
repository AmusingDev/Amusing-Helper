const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const config = require('./../config.json');

module.exports.run = async (client, msg, args) => {

    if (args[1]) return;
    if (!args[0]) {
    
        let user = client.users.cache.get(msg.author.id);
        const embed = new MessageEmbed()

            .setColor(config.color)
            .setAuthor(`${msg.author.username}#${msg.author.discriminator}`, msg.author.displayAvatarURL())
            .setImage(msg.author.displayAvatarURL({size: 2048}))
            
        msg.channel.send(embed);
        
    } else {
    
	    let user = client.users.cache.get(args[0].replace(/[<@!>]/g, ''));
	    const embed = new MessageEmbed()

            .setColor(config.color)
            .setAuthor(`${user1.username}#${user1.discriminator}`, user1.displayAvatarURL())
            .setImage(user1.displayAvatarURL({size: 2048}))
		
        msg.channel.send(embed);
}

module.exports.help = {
	name: "avatar",
	aliases: ["av"]
}
