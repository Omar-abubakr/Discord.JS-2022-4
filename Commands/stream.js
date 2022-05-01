module.exports = {
    name: "stream",
    description: "Send That i am live",
    execute(message, args){
        if(message.member.roles.cache.has('915301886423339029')){
        message.channel.send("I am Live Now On Twitch");
        message.member.roles.remove('915301886423339029').catch(console.log);
        } else {
            message.channel.send("يبدو أنه ليس عند الحق لإستخدام الأمر سأعطيه اياك");
            message.member.roles.add('915301886423339029').catch(console.log);
        }
    }
}