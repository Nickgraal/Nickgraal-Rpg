const { DiscordTicket } = require('discord_ticket_maker')
const ticket = new DiscordTicket()

module.exports = {
  name: "ticket-role",
  description: "Set support ticket role",
  run: async (client, message, args) => {
    const role = message.mentions.roles.first()
    
    ticket.setRole(message, role)
  }
}