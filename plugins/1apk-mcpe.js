import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `${htki} *DOWNLOAD* ${htka}

     Minecraft PE Official ( via Mediafire )
    
    --------APK INFO--------
    
*${htjava} Version:* 1.19
*${htjava} Link:* https://mkomsel.com/download/mjXTv38TLDKzjnYN
*${htjava} Filesize:* 155mb\n`,wm + '\n\n' + botdate, thumb, [['⎙ Download ⎙','.mediafire https://mkomsel.com/download/mjXTv38TLDKzjnYN']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Minecraft PE',          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}


handler.help = ['mcpe']
handler.command = ['mcpe']
export default handler