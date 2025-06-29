const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_14_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDgsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNjgsXG4gICAgICAgIDc2LFxuICAgICAgICA4NixcbiAgICAgICAgMjM5LFxuICAgICAgICA0MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5LFxuICAgICAgICA1MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDUwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICA2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDQsXG4gICAgICAgIDE5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODksXG4gICAgICAgIDE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDc3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjksXG4gICAgICAgIDgzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDc1LFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyaEhOTGRoU3NmZzA0Qm11MUVlbE1hV3dER0FWMDNTNEM4L3djTzBEc21zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg5NjM0MjAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNkQ1Njk5RDNCNjY2NjJGMTI1QjAwQzhDODQ3Q0NBMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3NTExODQ4OTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4OTYzNDIwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjU2QjM1MjU2MDE0Mjc5RjQ1MjUyMzgyNzVDM0I2NzNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzUxMTg0ODk0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3ODk2MzQyMDFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBERDg5MTZBNDk3QkU5QjI5MThBM0E2RjQ4ODU3MUZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc1MTE4NDg5OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ0dHRMbWhiNlRiV0MyeFZCb3E4d2d3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjM3MTVkMGE0LWRhNjctNDA2Zi1hNGRjLWMxZWQ3OThiMzg3MFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICAyMDcsXG4gICAgICAzLFxuICAgICAgNjYsXG4gICAgICAyNDgsXG4gICAgICA1MSxcbiAgICAgIDE4MCxcbiAgICAgIDgzLFxuICAgICAgMTczLFxuICAgICAgMTM1LFxuICAgICAgNDQsXG4gICAgICAyMDgsXG4gICAgICAyNDUsXG4gICAgICAxNzYsXG4gICAgICA3OSxcbiAgICAgIDE1NSxcbiAgICAgIDI0OCxcbiAgICAgIDEzNixcbiAgICAgIDcsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA4LFxuICAgICAgOTAsXG4gICAgICA0MCxcbiAgICAgIDI1NCxcbiAgICAgIDY5LFxuICAgICAgMjEzLFxuICAgICAgMTMzLFxuICAgICAgNTAsXG4gICAgICAxNDUsXG4gICAgICA4MSxcbiAgICAgIDE3MixcbiAgICAgIDE1MSxcbiAgICAgIDE4MyxcbiAgICAgIDk4LFxuICAgICAgMjA5LFxuICAgICAgNjgsXG4gICAgICAzMSxcbiAgICAgIDU4LFxuICAgICAgMTQ5LFxuICAgICAgNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01IVmhPd0VFUGpyZzhNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaDU2c25XUlVYWXQrclZaNXRKN2xpL2tvbm5HTVMzMkh4SGgwenRCc3ppMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxNkFsT1hOdkFuOGFIWHVYWHRiM2ROdEhPdERlcGdicCtaL1BidnpFWjQyVnFGd2YvUjJkcmg5REJqQ1hTT3p1TjY1MHduMVlWazFma2pyZTdGaVVBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLRjc4ZGtOYVpGVEtxVmpRVCt0T2N5ZDVMQVptZFBNRHBnRlN2eGh0OEZHTXJkdVpBVFpsaXFUeFdQUHBUMkdkc21YT0RUK1l5ODhDd01jOFhQc0pDQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg5NjM0MjAxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0MjA3NzgyODkyNzU3MDozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlZpZHVseWEgQWthc2jwn5KbXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4OTYzNDIwMTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzUxMTg0ODkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnRTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKdFIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyczlPb2M0SzBzczlyTU1LbEZXUGltQVUzRWh3eWVtRmR4Q1Nud3FXcGFnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzMDAzMTA3MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTc1MDQzMTgzNDU1M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUp0Uy5qc29uIjogIntcImtleURhdGFcIjpcIjBZTUowUDVBQWNwdEF3aFN0Tm5RZjV2Zzc1VmFvUER4ZWZmdFpCaDlwek09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMwMDMxMDcyMSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzUxMTg0ODczNDMyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
