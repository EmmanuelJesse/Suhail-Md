const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349121530876";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_47_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MixcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODksXG4gICAgICAgIDYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDY3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMzLFxuICAgICAgICA3NCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MSxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU3LFxuICAgICAgICAxODMsXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEsXG4gICAgICAgIDIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0NixcbiAgICAgICAgODgsXG4gICAgICAgIDU0LFxuICAgICAgICAxODAsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMTXVmTVp1S2E0eS9JcTNQZWV0dTlxMXEwcCtQOTNIZHNuRkpiam1taERrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCdFFxTDdBMFJpR2FGUWhJT3dJZlFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5YzkwNTA1LTY1NTItNDU3MC04YTkwLWZmYTkzZTUxZTFmMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICA3LFxuICAgICAgMTAxLFxuICAgICAgMTI4LFxuICAgICAgMjA0LFxuICAgICAgMjQ3LFxuICAgICAgMTk3LFxuICAgICAgMjUyLFxuICAgICAgMzksXG4gICAgICA2NixcbiAgICAgIDEyMCxcbiAgICAgIDY4LFxuICAgICAgNDgsXG4gICAgICA5OCxcbiAgICAgIDIwMSxcbiAgICAgIDIwLFxuICAgICAgMTk5LFxuICAgICAgMTA5LFxuICAgICAgMTg5LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDEyMixcbiAgICAgIDc5LFxuICAgICAgMzcsXG4gICAgICA2OSxcbiAgICAgIDEyNCxcbiAgICAgIDIxMyxcbiAgICAgIDE4NyxcbiAgICAgIDE4NSxcbiAgICAgIDExMyxcbiAgICAgIDEyMCxcbiAgICAgIDE2OSxcbiAgICAgIDIxMyxcbiAgICAgIDgwLFxuICAgICAgMTIxLFxuICAgICAgMjQ4LFxuICAgICAgNDYsXG4gICAgICAxLFxuICAgICAgNjUsXG4gICAgICAxOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFlCUlRMR0RcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjE1MzA4NzY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTE4OTYyNDkwNzQ4OTgwOjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVRPMUFrUWdhM2tzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2VG5nb0h2b0lGNEdBUnozeWJXRldKcWNMSHhpclphT2dWb2hoTTFtREVVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZGdTZNejYwaWV1eHdoRzd4RHgyMmMzUmlqRUwvNVRESFRmc0JmZW5ac3BKMGRyNDVod2JxTkxHVGR2TXZxV2pndFdsUU1vanY5UWgxeVRiVlBMeEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjlNQms1T3djNVQ1UFN2UTVOTVhydExVSWJUcTdVcm1keG45aWlEeERiazV2VFQxd25sc0VibWM2R2xCOVRkVHBtWWJHbzZ6Qmw2U3N2M25lbE44UGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjE1MzA4NzY6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTIxMTY1M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
