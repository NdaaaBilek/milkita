var handler = async (m, {conn, text }) => {
  if (!text) throw `Linknya mana?`
  var res = await fetch(`https://api.tiklydown.eu.org/api/download?url=${text}`)
  var json = await res.json()
  for (let i of json.images) {
    conn.sendFile(m.chat, i.url, null, null, m)
  }
}
handler.help = handler.command = ["tiktokfoto", "ttslide"]
handler.tags = ['downloader']

module.exports = handler
