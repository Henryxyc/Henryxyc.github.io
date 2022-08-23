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
            url: 'https://dl.stream.qqmusic.qq.com/C400001cS6VI1XeMHN.m4a?guid=180896750&vkey=4B51FF092AB4EEB0754A1539399F801EDADA3CC1028D3840EBAFAA5E82D04149DBCB45887C30C8FE32E68AF759C434ABA044F006F8C22E79&uin=496286034&fromtag=120032'
                  },
{
            name: '珊瑚海',
            artist: '周杰伦',
            lrc: 'lrc/珊瑚海 (Live)-陈思思、周杰伦.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400001pcURc0YZlCM.m4a?guid=7073585700&vkey=374491702BD053FCF5A04206BB41AA731E46A8CE46D8DE70811F251AE225AF564EDAECF374933F6F65DAA9D3A3C024FB29CCAFC260D42636&uin=496286034&fromtag=120032'
                  },
	{
            name: '就是爱你',
            artist: '陶喆',
            lrc: 'lrc/就是爱你-陶喆.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003ofGzS3C23Ow.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400000c72vs0aRony.m4a?guid=8151800783&vkey=6D599785E164E66F9F825B2B9BF3D4FD9FB9FBC035486EBB123F05502E2D3339C666040657F1844A9944FAD018209AA849BAE5FFD66C260D&uin=496286034&fromtag=120032'
                  },
{
            name: '不流泪的机场',
            artist: '林俊杰',
            lrc: 'lrc/不流泪的机场-林俊杰.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000002byTjo3vFz40.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400000nVR614KJmJv.m4a?guid=2219193548&vkey=74C814CB2C6DE9EDB9DC310F2773FB26F80745920EEE4D5934832E2A53BE60ABDFDC6F7BF9DD2CF0DF4845FB7F736C533796CE89C8C0996E&uin=496286034&fromtag=120032'
                  },
        {
            name: '必杀技',
            artist: '古巨基',
            lrc: 'lrc/必杀技-古巨基.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004MOwZC3HaQFc.jpg?max_age=2592000?param=300x300',
            url: 'https://dl.stream.qqmusic.qq.com/C400002ixWbp3N9FqG.m4a?guid=2763488988&vkey=0E862A403A9FA2D645C1BE5C071E87C6F81B7D031D546FB498575E95D74FA249018CA8CFBFA572906758569FCEBF3A366C2F667C9A66285B&uin=496286034&fromtag=120032'
                  },
            {
            name: '轨迹',
            artist: '周杰伦',
            lrc: 'lrc/轨迹 (电台版)-周杰伦.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001BGzMs369FzU.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C4000021XVFE34Wsbw.m4a?guid=2710359602&vkey=4ACDC94F1B996F366558F7FE4880124FAD225CF71461908E1F4DF876636BDC51BBE72F1B9DAA5C0DFBFAD8D4DB3C9B2FCEE84047D7D014C1&uin=496286034&fromtag=120032'
                  },
            {
            name: '野孩子',
            artist: '杨千嬅',
            lrc: 'lrc/野孩子-杨千嬅.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000001mImhQ4doM89.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400002ctpWm3389rs.m4a?guid=8577755719&vkey=F9EB727A962A27B75AC637F7F3C39870C0B9799162FE208E0E47B87273BB796EA48D55EECE165962F95C5A82FF2D347E0DF05F07B378F2BE&uin=496286034&fromtag=120032'
                  },
	{
            name: '单车',
            artist: '陈奕迅',
            lrc: 'lrc/单车-陈奕迅.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000004S8YQr3UmEbG.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400000wa9ED359rBP.m4a?guid=2940626500&vkey=CF3F96BE00357516C2F2A943F67DB2C92454AF4F74FA0F6ECDB54B9BDD30D4710055D79CE7B13540783240F72A7DDD1A59EE6A977361952A&uin=496286034&fromtag=120032'
                  },
{
            name: '枫',
            artist: '周杰伦',
            lrc: 'lrc/枫 (Live)-杨搏.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M0000024bjiL2aocxT.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C4000044M6Un0RXph2.m4a?guid=5755143211&vkey=D799340E0A109DF3AA6D4FE7A77A7292474DBF154E2E54962172B58B8F1A5B949755EDA38FD173E9065B6017A495A4D3426FC3363DAADC54&uin=496286034&fromtag=120032'
                  },

{
            name: '阴天快乐',
            artist: '陈奕迅',
            lrc: 'lrc/阴天快乐-陈奕迅.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003rytri2FHG3V.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400002lRDaP1XC1vD.m4a?guid=4230386196&vkey=D6ABC61F96CFDB4F2FED01FD415CD497D3C3AE0FE7A0DE4C0D0D97587E1E48AE17305DF0092DBCB8864D9BD565071568B7B7DDF337ADCCDB&uin=496286034&fromtag=120032'
                  },
{
            name: 'Butter-Fly',
            artist: '和田光司',
            lrc: 'lrc/Butter-Fly-和田光司.lrc',
            cover: 'https://y.qq.com/music/photo_new/T002R300x300M000003hS7PE1Sk8yu_1.jpg?max_age=2592000',
            url: 'https://dl.stream.qqmusic.qq.com/C400000ROsEZ1uLivT.m4a?guid=8720133235&vkey=770C74EFC77B81F8C81488C9589EA62C5ED6BEB7F89D4C8B33EB7325F84054D5A8D0A26742FDC6AD773AFC300424796254280E9F364BE18D&uin=496286034&fromtag=120032'
                  }
        ]
});