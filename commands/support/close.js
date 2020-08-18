const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
  name: "close",
    
  run: async (client, message, args) => {
   const channel = message.mentions.channels.first() || message.channel
   
   ticket.closeTicket(message, channel)
 } 
}