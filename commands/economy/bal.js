const { MessageEmbed } = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'bal',
  category: 'economy',
  usage: 'bal',
  description: 'Gives your balance!',
  run: async(client, message, args) => {
    
    let user = message.mentions.users.first() || message.author
    let coins = db.fetch(`coins_${user.id}`)
    
    if (coins === null) coins = 0
    
    message.channel.send(`${user} you have ${coins}`)
  }
}