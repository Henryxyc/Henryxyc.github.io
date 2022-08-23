const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#b7daff',
    loop: 'all',
    order: 'list',
    preload: 'auto',
    volume: 0.5,
    lrcType: 3,
    mutex: true,
    listFolded: false,

    audio: [{
            name: '裂缝中的阳光',
            artist: '林俊杰',
            lrc: 'lrc/裂缝中的阳光-LBI利比.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001gqOnU3DTg2S_2.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400001cS6VI1XeMHN.m4a'
                  },
{
            name: '珊瑚海',
            artist: '周杰伦',
            lrc: 'lrc/珊瑚海 (Live)-陈思思、周杰伦.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400001pcURc0YZlCM.m4a'
                  },
	{
            name: '就是爱你',
            artist: '陶喆',
            lrc: 'lrc/就是爱你-陶喆.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003ofGzS3C23Ow.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400000c72vs0aRony.m4a'
                  },
{
            name: '不流泪的机场',
            artist: '林俊杰',
            lrc: 'lrc/不流泪的机场-林俊杰.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002byTjo3vFz40.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400000nVR614KJmJv.m4a'
                  },
        {
            name: '必杀技',
            artist: '古巨基',
            lrc: 'lrc/必杀技-古巨基.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004MOwZC3HaQFc.jpg?max_age=2592000?param=300x300',
            url: 'https://dl.stream.qqmusic.qq.com/C400002ixWbp3N9FqG.m4a'
                  },
            {
            name: '轨迹',
            artist: '周杰伦',
            lrc: 'lrc/轨迹 (电台版)-周杰伦.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001BGzMs369FzU.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C4000021XVFE34Wsbw.m4a'
                  },
            {
            name: '野孩子',
            artist: '杨千嬅',
            lrc: 'lrc/野孩子-杨千嬅.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001mImhQ4doM89.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400002ctpWm3389rs.m4a'
                  },
	{
            name: '单车',
            artist: '陈奕迅',
            lrc: 'lrc/单车-陈奕迅.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004S8YQr3UmEbG.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400000wa9ED359rBP.m4a'
                  },
{
            name: '枫',
            artist: '周杰伦',
            lrc: 'lrc/枫 (Live)-杨搏.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C4000044M6Un0RXph2.m4a'
                  },

{
            name: '阴天快乐',
            artist: '陈奕迅',
            lrc: 'lrc/阴天快乐-陈奕迅.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003rytri2FHG3V.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400002lRDaP1XC1vD.m4a'
                  },
{
            name: 'Butter-Fly',
            artist: '和田光司',
            lrc: 'lrc/Butter-Fly-和田光司.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003hS7PE1Sk8yu_1.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400000ROsEZ1uLivT.m4a'
                  }
        ]
});