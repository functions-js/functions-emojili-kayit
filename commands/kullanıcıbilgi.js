const Discord = require('discord.js');
const db = require('quick.db');
const moment = require("moment");

module.exports = {
        name: 'kullanıcıbilgi',
        aliases: ['kb'],
        run: async(client, message, args) => {


                var member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
                var user = message.guild.member(member);

                let status = member.presence.status.replace("offline", "Gorunmez/Çevrimdışı").replace("online", "Çevrimiçi").replace("idle", "Boşta").replace("dnd", "Rahatsız Etmeyin")
                let katılma = moment(user.joinedAt).format(`HH:mm | DD/MM/YYYY`).replace("/01/", " Ocak ").replace("/02/", " Şubat ").replace("/03/", " Mart ").replace("/04/", " Nisan ").replace("/05/", " Mayıs ").replace("/06/", " Haziran ").replace("/07/", " Temmuz ").replace("/08/", "Ağustos").replace("/09/", " Eylül ").replace("/10/", " Ekim ").replace("/11/", " Kasım ").replace("/12/", " Aralık ")
                let roller = user.roles.cache.filter(x => x.name !== "@everyone").map(x => x).join(', ')
                let erkek = db.get(`erkek_${member.id}`) || 0
                let kız = db.get(`kız_${member.id}`) || 0
                let toplam = db.get(`toplam_${member.id}`) || 0
                message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setDescription(`__**Kullanıcı Bilgisi**__ \n\nKullanıcı: ${member}\nID: ${member.id}\nTag: ${member.tag}\nDurum: ${status}\n\n**Üyelik Bilgisi**\n\nTakma ad: ${user.displayName.replace("`", "")} ${user.nickname ? "" : "[Yok]"}\nKatılma Tarihi: ${katılma}\nRolleri: ${roller}\n\n**Teyit Bilgisi**\nToplam: ${toplam}(Erkek: ${erkek} || Bayan: ${kız})`).setThumbnail(message.author.avatarURL({ dynamic: true })))

    }
}
