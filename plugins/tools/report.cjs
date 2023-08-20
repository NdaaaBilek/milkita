var handler = async (m, {conn, text}) => {
  if (!text) throw `Contoh :\n/report ada bug di bagian fitur ...`
  conn.reply(owner[0] + '@s.whatsapp.net', "tes", m)
}
handler.command = handler.help = ['report', 'laport']
handler.tags = ['tools']

module.exports = handler
