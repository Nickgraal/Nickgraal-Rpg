const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'setwelcome',
  category: 'moderation',
  usage: 'setwelcome <#channel>',
  run: (client, message, args) => {
  
  
  let channel = message.mentions.channels.first()
  
  if(!channel) {
    return message.channel.send('Please mention the channel first')
  }
    
    
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Welcome channel has been set`)
  }
}