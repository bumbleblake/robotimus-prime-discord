const Discord = require("discord.js");
const client = new Discord.Client();
client.on('guildMemberAdd', member => {
    var rand = Math.round(Math.random()*6);
    var msg;
    switch(rand){
        case 0:
        msg = `${member} has joined the phat gang`
        break;
        case 1:
        msg = `${member} is only here for the phatbux :triumph:`
        break;
        case 2: 
        msg = `${member} is most likely a thot`
        break;
        case 3:
        msg = `${member} you're mum fat`
        break;
        case 4:
        msg = `${member} hello this is microsoft tech support how may i help you`
        break;
        case 5:
        msg = `${member} wuss poppin jimbo`
        break;
        case 6:
        msg = `${member} has been infected with gay`
        break;
    }
    client.channels.get('383814468599152640').send(`${msg}`);
    member.addRole(member.guild.roles.find("name","memer").id);
    member.addRole(member.guild.roles.find("name","trash").id);
});
client.on('guildMemberRemove', member => {
    var rand = Math.round(Math.random()*6);
    var msg;
    switch(rand){
        case 0:
        msg = `**${member.user.username}** oh damn he ded`
        break;
        case 1:
        msg = `**${member.user.username}** understandable have a great day`
        break;
        case 2: 
        msg = `**${member.user.username}** lol bye`
        break;
        case 3:
        msg = `**${member.user.username}** got stung by bumble and died of phat`
        break;
        case 4:
        msg = `**${member.user.username}** downloaded protegent and died`
        break;
        case 5:
        msg = `**${member.user.username}** got beaned xd`
        break;
        case 6:
        msg = `**${member.user.username}** wow what a loser xd`
        break;
    }
    client.channels.get('383814468599152640').send(msg);
});
client.on('ready', () => {
    client.user.setGame('me me big boy');
    client.users.get('145772530454626304').sendMessage('ey b0ss');
    function byte2Hex(n)
  {
    var nybHexString = "0123456789ABCDEF";
    return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
  }
  function RGB2Color(r,g,b)
  {
    return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
  }
  client.user.setGame(`bumble is fat`);
  var num = 0;
  var colarray= [];
  var frequency = 0.21;
  for (var i = 0; i < 32; ++i)
  {
     red   = Math.sin(frequency*i + 0) * 127 + 128;
     green = Math.sin(frequency*i + (2*Math.PI/3)) * 127 + 128;
     blue  = Math.sin(frequency*i + (4*Math.PI/3)) * 127 + 128;
  
     colarray.push(RGB2Color(red,green,blue));
  }
  setInterval(function(){
      if(num == colarray.length){
          num = 0;
      }
      client.guilds.first().roles.find("id","145772530454626304").setColor(colarray[num]);
      client.guilds.first().roles.find("name","dad").setColor(colarray[num]);
      num++;
  },25);
});
client.login('MzU5NTM5NTA2MDkwNzM3NjY1.DPpwCQ.lvzu2ylrec-mHp0oDVJJ1mBBTp0');
