const discord = require('discord.js')
const api = require('covidapi')

module.exports = {
  name: 'covid',
  description: 'Gives you an information about covid',
  usage: 'covid',
  run: async(client, message, args) => {
    const data = await api.all()
    const coronaembed = new discord.MessageEmbed()
    .setColor('#ff2052')
    .setTitle('Corona Stats')
    .setDescription('Number of cases may differ from other sources')
    .addField('Cases', data.cases, true)
    .addField('Today Cases', data.todayCases, true)
    .addField('Deaths', data.deaths, true)
    .addField('Active Cases', data.active, true)
    .addField('Critical', data.critical, true)
    .addField('Recovered', data.recovered, true)
  message.channel.send(coronaembed)
  }
}