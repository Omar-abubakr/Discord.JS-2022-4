module.exports = {
    name: "donate",
    description: "Send My Donation Links",
    execute(message, args){
        /*let role = message.guild.roles.cache.find(r => r.name === "Mod")
        if(message.member.roles.cache.some(r => r.name === "Mod")){
        message.channel.send("DL");
        message.member.roles.remove(role).catch(console.log);
        } else {
            message.channel.send("يبدو أنه ليس عند الحق لإستخدام الأمر سأعطيه اياك");
            message.member.roles.add(role).catch(console.log);
        }
    }*/
    if(message.member.permissions.has("KICK_MEMBERS")){
        message.channel.send("PH");
    } else {
        message.channel.send("You DO NOT have the Permission");
    }
}
}