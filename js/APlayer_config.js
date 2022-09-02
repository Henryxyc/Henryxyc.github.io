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
            name: '你瞒我瞒',
            artist: '陈柏宇',
            lrc: 'lrc/你瞒我瞒 (Fight For Live)-陈柏宇.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001gqOnU3DTg2S_2.jpg?max_age=2592000',
            url: 'http://ws.stream.qqmusic.qq.com/C400003DRcvt0XolWC.m4a?guid=759484337&vkey=B9B9488651F687387095FE3B6B695BF0E73E5DCC011B7045E23A839EEE864AA6019F6DF2C367CA63FB1C63716BB19EE361EF962397DE74D3&uin=&fromtag=120032'
                  },
{
            name: '梦不落雨林',
            artist: '张艺兴',
            lrc: 'lrc/NAMANANA (Remix)-张艺兴.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001T7G8z0o9FlF.jpg?max_age=2592000',
            url: 'http://music.163.com/song/media/outer/url?id=1417496128.mp3'
                  },
	{
            name: '簇拥烈日的花',
            artist: 'Morerare,迟里乌布',
            lrc: '簇拥烈日的花-Morerare,迟里乌布.lrc',
            cover: 'https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4874132307/4499/f228/d867/da64b9725e125943ad4e14e4c72d0884.png',
            url: 'http://music.163.com/song/media/outer/url?id=1896178370.mp3'
                  },
{
            name: '错位时空',
            artist: '艾辰',
            lrc: 'lrc/错位时空-艾辰.lrc',
            cover: 'https://p2.music.126.net/8C0lwLE88j9ZwLyPQ9a4FA==/109951165595770076.jpg?param=130y130',
            url: 'http://music.163.com/song/media/outer/url?id=1808492017.mp3'
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