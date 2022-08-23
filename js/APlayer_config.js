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
            url: 'https://dl.stream.qqmusic.qq.com/C400001cS6VI1XeMHN.m4a?guid=3241433448&vkey=44FBB4CEC44580CD34B40340C451ECEB156C24CF9662A526A774FB2E239F898266F7EA79B6A57DED102DE95E3E040C4A14080A9094229773&uin=496286034&fromtag=120032'
                  },
{
            name: '梦不落雨林',
            artist: '张艺兴',
            lrc: 'lrc/NAMANANA (Remix)-张艺兴.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001T7G8z0o9FlF.jpg?max_age=2592000',
            url: 'http://music.163.com/song/media/outer/url?id=1417496128.mp3'
                  },
	{
            name: '就是爱你',
            artist: '陶喆',
            lrc: 'lrc/就是爱你-陶喆.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003ofGzS3C23Ow.jpg?max_age=2592000',
            url: 'http://ws.stream.qqmusic.qq.com/C400000nkz1h4IOHbw.m4a?guid=168329864&vkey=61FF61AB1C724182A7331216F6CE947DB5293BAC94EB83E6828E07ED7B77FCE25C6551B73A1985515B0E7EA56DCA98370A731A29288A77A6&uin=&fromtag=120032'
                  },
{
            name: '葡萄成熟时',
            artist: '陈奕迅',
            lrc: 'lrc/葡萄成熟时-陈奕迅.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003rytri2FHG3V.jpg?max_age=2592000',
            url: 'http://ws.stream.qqmusic.qq.com/C400004V8Yph2t2V7s.m4a?guid=656274441&vkey=9D14F7C5CDDD55610D498A024A792C109DC819CB20BD1B5D0597496BBBD960526746D679DF0677DCACAAF523A6A26E8EC76BDDAF899948CA&uin=&fromtag=120032'
                  },
{
            name: '冻结+不流泪的机场+豆浆油条 ',
            artist: '林俊杰',
            lrc: 'lrc/不流泪的机场-林俊杰.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002byTjo3vFz40.jpg?max_age=2592000',
            url: 'http://ws.stream.qqmusic.qq.com/C400002bUCin4KvACb.m4a?guid=978222436&vkey=8CD1D5BE41444D07C27BB0BE0E5F21D3C4AE2E8B425C5DA5FC7E7F356E845E1FCEEB7D10010858E31EC619C438FAF7FC61DF35084EE9DA70&uin=&fromtag=120032'
                  },
        {
            name: '必杀技',
            artist: '古巨基',
            lrc: 'lrc/必杀技-古巨基.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004MOwZC3HaQFc.jpg?max_age=2592000?param=300x300',
            url: 'http://music.163.com/song/media/outer/url?id=5267003.mp3'
                  },
            {
            name: '野孩子',
            artist: '杨千嬅',
            lrc: 'lrc/野孩子-杨千嬅.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001mImhQ4doM89.jpg?max_age=2592000',
            url: 'http://music.163.com/song/media/outer/url?id=316486.mp3'
                  },
	{
            name: '单车',
            artist: '陈奕迅',
            lrc: 'lrc/单车-陈奕迅.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004S8YQr3UmEbG.jpg?max_age=2592000',
            url: 'http://music.163.com/song/media/outer/url?id=1897927507.mp3'
                  },

{
            name: '阴天快乐',
            artist: '陈奕迅',
            lrc: 'lrc/阴天快乐-陈奕迅.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003rytri2FHG3V.jpg?max_age=2592000',
            url: 'http://music.163.com/song/media/outer/url?id=28563317.mp3'
                  },
{
            name: 'Butter-Fly',
            artist: '和田光司',
            lrc: 'lrc/Butter-Fly-和田光司.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003hS7PE1Sk8yu_1.jpg?max_age=2592000',
            url: 'http://music.163.com/song/media/outer/url?id=28850500.mp3'
                  }
        ]
});