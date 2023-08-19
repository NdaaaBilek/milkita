var { lyrics } = require("api-dylux")
var handler = async (m, {conn, text}) => {
  if (!text) throw `Contoh .lyrics style`
var res = await lyrics(text)
conn.sendFile(m.chat, res.thumb, "hhe.jpg", res.lyrics, m)
}
handler.help = handler.command = ['lyrics']
handler.tags = ['search']

module.exports = handler
