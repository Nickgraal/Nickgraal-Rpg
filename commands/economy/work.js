const discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
  name: 'work',
  category: 'economy',
  usage: 'work',
  description: 'Work to gain money',
  run: async(client, message, args) => {
   
    let timeout = 3600000
    let worked = await db.fetch(`worked_${message.author.id}`)
    
    if(worked != null && timeout -  (Date.now() - worked) > 0) {
      let time = ms(timeout -  (Date.now() - worked));
      
      message.channel.send(`You already claimed your daily reward come back in ${time.hours} hours ${time.minutes} minutes!`)
      
    }else {
      let amountearned = Math.floor(Math.random() * 500) + 1
      
      let jobs = ('Developer', 'Teacher', 'Doctor', 'Casier')
      let job = jobs[Math.floor(Math.random()* jobs.lenght)]
      
      let embed = new discord.MessageEmbed()
      .setAuthor(`${message.author.tag}, it played of`)
      .setDescription(`${message.author}, you worked as ${job} and earned ${amountearned}`)
      .setColor('BLUE')
      
      message.channel.send(embed)
      
      db.add(`coins_${message.author.id}`, amountearned)
      db.set(`worked_${message.author.id}`, Date.now())
    }
  }
}