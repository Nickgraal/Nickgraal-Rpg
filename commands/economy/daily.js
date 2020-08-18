const discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
  name: 'daily',
  category: 'economy',
  usage: 'daily',
  description: 'Get daily coins!',
  run: async(client, message, args) => {
   
    let timeout = 3600000
    let daily = await db.fetch(`daily_${message.author.id}`)
    
    if(daily != null && timeout -  (Date.now() - daily) > 0) {
      let time = ms(timeout -  (Date.now() - daily));
      
      message.channel.send(`You already claimed your daily reward come back in ${time.hours} hours ${time.minutes} minutes!`)
      
    }else {
      let amountearned = Math.floor(Math.random() * 300) + 1
      
      let embed = new discord.MessageEmbed()
      .setAuthor(`${message.author.tag}, it played of`)
      .setDescription(`${message.author}, ${amountearned} added to your wallet!`)
      .setColor('GREEN')
      
      message.channel.send(embed)
      
      db.add(`coins_${message.author.id}`, amountearned)
      db.set(`daily_${message.author.id}`, Date.now())
    }
  }
}