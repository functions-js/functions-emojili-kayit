const Discord = require('discord.js');
const db = require('quick.db')
const moment = require("moment");

module.exports = {
    name: 'topteyit',
    aliases: ['tt', 'teyittop'],

run: async(client, message, args) => { 
let top = message.guild.members.filter(uye => db.get(`erkek_${uye.id}`)).array().sort((uye1, uye2) => Number(db.get(`kız_${uye2.id}`))+Number(db.get(`erkek_${uye1.id}`))).slice(0, 10).map((uye, index) => (index+1)+"-) "+ uye + " | " + db.get(`toplam_${uye.id}`)).join('\n');
message.channel.send(
new Discord.RichEmbed().setTitle('Top Teyit')
.setTimestamp()
.setFooter("İngiltereli X Niwren X Muratva Stark")
.setDescription(top)
.setColor("RANDOM"));
  
}
