// 所有可替换内容集中在这里。照片放入 public/photos，再填写 /photos/文件名。
export const content = {
  // 页面标题与专辑信息
  // 界面标签与封套装饰文字，也可在这里替换。
  ui: { navLetter: '一封给你的信 ↗', special: 'A BIRTHDAY SPECIAL', since: '开始收藏的心动', coverTop: 'THE LITTLE THINGS', coverNumber: '001', coverTitle: ['那些与你', '有关的日子'], coverSubtitle: 'MEMORIES ON REPEAT', side: 'SIDE A', recordTitle: ['FOR', 'YOU'], rpm: '33⅓ RPM · WITH LOVE', recordCaption: 'a little record of us.', marquee: 'HAPPY BIRTHDAY ✦ EVERY LITTLE MOMENT WITH YOU ✦ HAPPY BIRTHDAY ✦ TO BE CONTINUED ✦', photoHint: '每一张，都是喜欢你的证据。 ⤴', storyEnd: '故事还在继续 ···', dear: 'DEAR YOU,', back: 'BACK TO TOP ↑', photoAction: '查看大图：', pause: '暂停音乐', playMusic: '播放音乐', musicError: '音乐暂时无法播放，请检查文件路径', playing: '正在播放 · 点击暂停', idle: '点击唱片播放' },
  title: '给你的生日专辑', brand: 'OUR LITTLE RECORDS', edition: 'PRIVATE PRESSING · VOL. 01',
  recipient: '亲爱的你', headline: ['把这半年，', '唱给你听。'],
  intro: '有些日子平凡得像一首歌，因为有你，才想一遍一遍地重播。',
  birthday: '2026-11-03', startDate: '2026-05-03', // 日期格式 YYYY-MM-DD，按自己的故事修改
  album: '那些与你有关的日子', artist: '你和我 / 半年的独家记忆', play: '播放我们的故事', scroll: '往下翻，听见回忆',
  // 音乐需使用有权播放的文件；留空时不播放，也不会自动播放。
  music: { src: '', title: '我们的背景音乐', volume: 0.35, empty: '待你放入我们的那首歌' },
  sections: { photos: ['SIDE A / MOMENTS', '把日子，洗成照片。', '有些瞬间不用完美，只要我们都在。点击相纸，重看那一天。'], timeline: ['SIDE B / OUR STORY', '半年不长，回忆很满。', '从一个普通的相遇，到每一个想与你分享的明天。'], letter: ['A LETTER FOR YOU', '有些话，想亲手交给你。', '这里藏着一封只属于你的信。'], surprise: ['BONUS TRACK', '还有一首，送给未来。', '专辑结束了，我们的故事才刚刚开始。'] },
  // src 留空即显示相纸占位卡；alt 为照片的无障碍描述。
  photos: [
    { src: '', alt: '第一次一起出门的照片', caption: '第一次一起出门', note: '那天的风，刚刚好。', date: 'MAY · 01' },
    { src: '', alt: '一起吃饭的照片', caption: '把普通晚餐过成节日', note: '好吃的，第一口留给你。', date: 'JUN · 02' },
    { src: '', alt: '散步时的合影', caption: '走很远，也不觉得远', note: '原来快乐可以没有目的地。', date: 'JUL · 03' },
    { src: '', alt: '一起看日落的照片', caption: '收藏一场日落', note: '天空和你，都很温柔。', date: 'AUG · 04' },
  ],
  // 六个时间节点，可自由增删。
  timeline: [
    { date: '2026.05', title: '故事的第一面', text: '从一句你好开始，生活里多了一个想念的人。', tag: '初遇' },
    { date: '2026.06', title: '开始分享小事', text: '今天的云、路边的小猫，还有不太重要却想告诉你的事。', tag: '靠近' },
    { date: '2026.07', title: '一起走过夏天', text: '冰饮会融化，夏天会过去，但那份心动留了下来。', tag: '心动' },
    { date: '2026.08', title: '平凡也闪闪发光', text: '吃饭、散步、发呆。原来陪伴就是最好的安排。', tag: '陪伴' },
    { date: '2026.09', title: '把你写进计划里', text: '开始期待下一次见面，也开始说起以后的我们。', tag: '期待' },
    { date: '2026.10', title: '下一站，是你的生日', text: '偷偷准备这份礼物，把说不尽的喜欢，一点点装进去。', tag: '珍藏' },
  ],
  letter: { envelope: 'TO YOU, WITH LOVE', open: '拆开这封信', close: '把信收好', greeting: '亲爱的你：', paragraphs: ['生日快乐。写下这四个字的时候，脑海里已经放起了许多与你有关的画面。', '这半年里，我们一起积攒了好多不起眼、却舍不得忘记的小事。谢谢你出现在我的生活里，让普通的一天也有了值得期待的理由。', '新的一岁，希望你有勇气做喜欢的事，也有底气慢慢来。希望你的快乐不必懂事，你的愿望都有回音。', '而我想做的，是继续陪你收集日落、吃热腾腾的饭，把未来的每一天，过成我们喜欢的样子。'], wish: '愿你被爱包围，也永远自由。', signature: '一直在你身边的我', date: '写于你的生日' },
  surprise: { button: '打开隐藏曲目', revealed: '下一张专辑，我们一起写。', text: '兑换一次由你决定的约会：时间、地点、想做的事，都听你的。有效期：一直有效。', ticket: '两个人的未来通行证', code: 'ADMIT TWO · FOREVER', again: '再撒一次快乐' },
  footer: 'MADE WITH LOVE · 只为你发行，永不下架', closePhoto: '关闭照片', placeholder: '等待放入我们的照片',
};
