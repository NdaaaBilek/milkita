var { ytmp3 } = require("api-dylux")
var handler = async (m, {conn, text}) => {
  if (!text) throw `Masukkan Link Yt!`
  let res = await ytmp3(text)
  conn.sendFile(m.chat, res.dl_url, null, null, m)
  //conn.sendMessage(m.chat, { document: { url: res.dl_url}, mimetype: 'audio/mpeg', fileName: `sukses.mp3`}, {quoted: m})
}
handler.help = handler.command = ['ytmp3', 'ytv']
handler.tags = ['downloader']

module.exports = handler;
