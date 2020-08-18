const discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'inventory',
  category: 'economy',
  usage: 'inventory',
  description: 'Access your inventory!',
  run: async(client, message, args) => {
    let items = db.get(message.author.id)
    let user = message.author
    if(items === null) items = 'This user has nothing!'
    
    let embed = new discord.MessageEmbed()
    .setTitle(`${message.author.username}'s Inventory`)
    .setColor('RANDOM')
    .addField('Inventory', items)
    message.channel.send(embed)
    
  }
}