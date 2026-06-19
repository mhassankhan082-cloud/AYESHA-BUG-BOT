global.namaown = "Ayesha-Md" // your owner name here
global.namabot = "© Ayesha-Md" // your bot name here
global.versisc = "9.5.0" //
global.owner = ["923170829819"] // your owner number here
global.tele = "https://t.me/ayeshabibi1111" // your telegram here
global.url = "https://youtube.com/@ayeshabibi.01?si=sWeh2CTlsP4GKi6P" // Your YouTube Here
global.namastore = "Ayesha-Md" // UBAH NAMA STORE LU
global.simbol = "." // You Can Change Simbol
global.wlcm ="Group me welcome! 🎉"
global.wlcmm ="Bye bye! Allah hafiz" 
global.limitawal = {
    premium: "Infinity",
    free: 20
}

// Ganti Logo Disini
global.painlogo = "https://files.catbox.moe/0vgv8g.jpg" 

global.my = {
      saluran: "https://whatsapp.com/channel/0029Vb7qmxVG8l5LP0E9w61H",
      idCH: , 
      youtube: "https://youtube.com/@ayeshabibi.01?si=sWeh2CTlsP4GKi6P",
      telegram: "t.me/ayeshabibi1111",
      Instagram: "https://www.instagram.com/ayeshabibi011?igsh=Z3J5Z2J6MWtxOHU0"
   }


global.mess = {
  success: 'Ho gaya!',
  admin: '_* ! Aap admin nahi hain !*_',
  botAdmin: '_* ! Bot ko pehle group admin banao !*_',
  OnlyOwner: '_* ! Ye sirf owner ke liye hai !*_',
  OnlyGrup: '_* ! Ye sirf group me kaam karega !*_',
  private: '_( ! Ye sirf private chat me kaam karega )_',
  wait: '_*Zara ruko, process ho raha hai*_',
  notregist: '_*Aap register nahi hain*_',
  premium: '_*Aap premium user nahi hain*_',
  endLimit: '_*Aap ki roz ki limit khatam ho gayi*_',
  bugrespon: '`\[ ! \]`Thodi der ruko, bheja ja raha hai',
  donebug: '`\[ ! \]`Kaam ho gaya!'
}


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
