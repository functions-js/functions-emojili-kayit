const db = require('quick.db');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'say',
    aliases: ['say'],
    run: async(client, message, args) => {
        const mapping = {
            " ": "", // Sayı İdlerini <a:isim:id> şeklinde giriniz.
            "0": "",
            "1": "",
            "2": "",
            "3": "",
            "4": "",
            "5": "",
            "6": "",
            "7": "",
            "8": "",
            "9": "",
        };
        var toplamüye = message.guild.memberCount
        var online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size
        var sesli = message.guild.members.cache.filter(s => s.voice.channel).size;
        var tag = message.guild.members.cache.filter(a => a.user.username.includes(client.config.tag)).size
        var emojilitoplamüye = `${toplamüye}`.split("").map(c => mapping[c] || c).join("")
        var emojiilitag = `${tag}`.split("").map(c => mapping[c] || c).join("")
        var emojilises = `${sesli}`.split("").map(c => mapping[c] || c).join("")
        var emojilionline = `${online}`.split("").map(c => mapping[c] || c).join("")

        const embed = new MessageEmbed()
            .setColor('BLACK')
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setDescription(`• Sunucuda toplam **${toplamüye}** üye bulunmakta.
            • Sunucuda **${online}** aktif üye bulunmakta.
            • Ailemizde toplam **${tag}** üye bulunmakta.
            • Sunucuda sesli sohbetlerde toplam **${sesli}** üye bulunmakta`)
            .setTimestamp()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setFooter('İngiltereli X Muratva Stark X Niwren')
        message.channel.send(embed)
    }
}