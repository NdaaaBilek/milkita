var { lyrics } = require("api-dylux")
var handler = async (m, {conn, text}) => {
var res = await lyrics("style")
conn.sendFile(m.chat, res.thumb, "hhe.jpg", res.lyrics, m)
}
handler.help = handler.command = ['lyric']
handler.tags = ['search']

module.exports = handler
