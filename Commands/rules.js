module.exports = {
    name: "rules",
    description: "Send Server Rules",
    execute(message, args){
        const RulesEmbed = {
            color: '#13C6DC',
            title: 'Rules: ',
            url: 'https://twitch.tv/la3eeb',
            description: 'Some Rule ;)',
            author: {
                name: 'Omar Abubakr',
                icon_url: 'https://i.imgur.com/AfFp7pu.png',
                url: 'https://youtube.com'
            },
            thumbnail: {
                url: 'https://i0.wp.com/www.pultimate.ca/wp-content/uploads/2020/03/Screen-Shot-2020-03-03-at-11.11.17-AM.png?fit=312%2C232&ssl=1',
            },
            fields: [
                {
                    name: 'Do not Forget',
                    value: 'To Subscribe',
                    inline: false,
                },
                {
                    name: 'Rule 1',
                    value: 'Be Nice',
                    inline: true,
                },
                {
                    name: 'Rule 2',
                    value: 'No Bad Words',
                    inline: true,
                }
            ],
            image: {
                url: 'http://pa1.narvii.com/7618/b0a347de1deb16fe921f8305d6e3b4d456a6488ar1-721-420_00.gif',
            },
            footer: {
                text: 'For More Rules Go To Rules Channel',
                icon_url: 'https://i.imgur.com/AfFp7pu.png',
            },
        };
        message.channel.send({ embeds: [RulesEmbed] })
    }
}