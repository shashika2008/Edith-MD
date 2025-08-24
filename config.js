const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUp5SnMveGQ0b1ltS0xPb3JQOE5NZHlIaGtNZzBYOThiUnc3MGpSaHBsUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNU01YTFtY3RyNzhjb0RudUdSbmxEMzZCQmx2WjZ5czV1RmhCdlNlSFAwWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQjd0WWQ2K0tXZjlCeUZCSnJ0MitoNDU1TmJnRDY3T2tuYXJRTUFNTUhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKVTJrYVBkRVd6TFV3U1piNUR3bFYzWWxtaXRUQ0M2Rm5tbXZMQTEyVERVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFHcS9DRTBxV2h6VWJwRGZ6aDlVakdxWTJGWWhMVVMwUE1CcEpoSjhzVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllXTkpXaCs5MHh5MGFjK3I5QkhreG1tK2l3d3BOY2xPZVpLMGlRc2NkQzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU9QMkJsL2NGR0xIaFV3S2xHMEZZbVVHQytleEVqdHlxU1dKTzZMMndHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHhxWCtvUGM4VFFBZnY2dnVSa2VvajNPbGxOYXdjSU1STnFFNGlvc2lsUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik82dUl5TVoreXhHclplNm9ZTVFSa2l5SnhPME5HVW94ZFhyQU9uMjJ5eURybW82aUdpVXRsQnVDTUswNStKWG50VkVYdVNOZXF2bURqbGlEWlgreWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiIrb1hZRjBGZmMxaUVQNnQ1YUZScEdZajlrY29RRTV6N293MWFEOG54NWE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA1MTA0ODMwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY4MjM1NUNBOTYzN0U2MENDQzcyREFCNTU5OEIwQUYzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwNTc3MzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzA1MTA0ODMwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZDQTFBQkRBOUFCNzE4NjY3REY1QkI3MUFBNTk4NTE0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwNTc3MzZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVESVRIMTIzIiwibWUiOnsiaWQiOiI5NDcwNTEwNDgzMDoxOUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJzaGFzaGlrYSIsImxpZCI6IjI4NDQ2MjIyNzQxNzM3OjE5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3Ftbk5FQkVJR2hyY1VHR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMlpaT1BwK2RlUzg2aGQrbEM1QUlRRVlrZjkxTW9YejhFNlV5bjBMY1hDST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiT0xVVlJibmNpT0c2cFZWbTFtQWZOTHk5MXM0c1lQWWk5NXVnM1NReWRDUlJJS04zaFJieWtySmF0VnpjdTg5ZkV1aDNucGlpTGczRzFDd0JOc2RlQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9yeWUwZWNXQjl2S3F1YnZUTGxvcVpFL2Q1NlcrTWVvaDN4WTIvWFUzSU5HQ0xCR1ZKbFdrVzFFcXBrVTNjUTE1R0VUY2I0MG9RQ0kxZ0NPV0FEbWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDUxMDQ4MzA6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZG1XVGo2Zm5Ya3ZPb1hmcFF1UUNFQkdKSC9kVEtGOC9CT2xNcDlDM0Z3aSJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2MDU3NzMzLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUd2RCJ9",
  START_IMG: process.env.START_IMG || "https://h.uguu.se/QDnlxEgv.jpg",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS black wolf-MD*",
  WELCOME: process.env.WELCOME || "true",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "true",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "BLACKwolf",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94705104830",
  OWNER_NAME: process.env.OWNER_NAME || "shashika",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ black wolf*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://h.uguu.se/QDnlxEgv.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "true",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  AUTO_STICKER: process.env.AUTO_STICKER || "true",
  AUTO_REPLY: process.env.AUTO_REPLY || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "true",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "94705104830",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
