const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    
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
    var num = 0;
    var colarray= [];
    var frequency = 0.2;
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
        client.guilds.first().roles.find("name", process.env.ROLENAME).setColor(colarray[num]);
        num++;
    },150);
});
client.login(process.env.KEY);
