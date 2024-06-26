// 页面路由
const url = window.location.href;
if (window.top != window) {
	alert('当您看到这条提示意味着：您所访问的网站正在恶意调用本站资源，本站对偷盗资源的行为0容忍，点击确认跳转正版体验。');
	window.open(url, '_self');
} else if (url.indexOf('index') > -1) {
	window.open('./', '_self');
}
// 填充冒险列表
const ArLvl = {
	1: '一',
	2: '二',
	3: '三',
	4: '四',
	5: '五',
	6: '六',
	7: '七',
	8: '八',
	9: '九',
	10: '十'
};

const ArLvls = {
	1: 'Unity',
	2: 'The 7 Seas',
	3: 'Vivid',
	4: 'Hope',
	5: 'Thoery Of Everything',
	6: '六',
	7: '七',
	8: '八',
	9: '九',
	10: '十'
};
LvlList3 = (dAdvID, BLvl, SLvl1, SLvl2) => {
	var s = '',
		startlvl = BLvl * 10;
	do {
		s += '<span class="lvl" onclick="StartAdventure(' + (startlvl + SLvl1) + ')">第' + ArLvl[SLvl1] +
			'夜</span>';
	} while (SLvl1++ < SLvl2)
	document.getElementById(dAdvID).innerHTML = s;
}

LvlList2 = (dAdvID, BLvl, SLvl1, SLvl2) => {
	var s = '',
		startlvl = BLvl * 10;
	do {
		s += '<span class="lvl" onclick="StartAdventure(' + (startlvl + SLvl1) + ')">' + ArLvls[SLvl1] +
			'</span>';
	} while (SLvl1++ < SLvl2)
	document.getElementById(dAdvID).innerHTML = s;
};
LvlList = (dAdvID, BLvl, SLvl1, SLvl2) => {
	var s = '',
		startlvl = BLvl * 10;
	do {
		s += '<span class="lvl" onclick="StartAdventure(' + (startlvl + SLvl1) + ')">第' + ArLvl[SLvl1] +
			'关</span>';
	} while (SLvl1++ < SLvl2)
	document.getElementById(dAdvID).innerHTML = s;
};
// 初始化冒险
LvlList('btcd', 0, 1, 10);
LvlList('ywcd', 1, 1, 10);
LvlList('btyc', 2, 1, 10);
LvlList('dhlg', 3, 1, 10);
LvlList('sxjx', 4, 1, 10);
LvlList('rydx', 32, 1, 4);
LvlList('myzl', 5, 1, 10);
LvlList3('ygjt', 30, 1, 10);
LvlList2('dysd', 31, 1, 5);

// 填充列表
const setList = (a, b) => {
	let i = 0,
		s = '';
	for (let n = 0; n < a.length; n += 3) {
		i % 5 == 0 && (s += '<tr>');
		s += '<td height="139" valign="top" onclick="SelectModal(\'' + a[n] +
			'\')"><div><img src="images/interface/' + a[n + 2] + '"></div><div class="list">' + a[n + 1] +
			'</div></td>';
		(i + 1) % 5 == 0 ? (
			s += '</tr>',
			i = 0
		) : ++i;
	}
	if (i != 0) {
		while (--i) s += '<td><div style="margin-top:45px;">敬请期待!</div></td>';
		s += '</tr>';
	}
	document.getElementById(b).innerHTML = s;
}
// 中国馆
let Clist = ['100', '初入中国', 'wall0.png',
	'101', '暗杀行动', 'wall1.png',
	'102', '夜幕降临', 'wall2.png',
	'103', '突出重围', 'wall3.png',
	'104', '古老水寨', 'zhi.png',
	'105', '水上运动', 'zhi1.png',
	'106', '坟墓村庄', 'bai.png',
	'107', '幽灵喧夜', 'bai1.png',
	'108', '火山之脚', 'huo.png',
	'109', '火上浇油', 'huo1.png',
	'110', '魔王宫殿', 'wang.png',
	'111', '尸群围剿', 'wang0.png',
	'112', '决战秦皇', 'wang1.png',
	'FB', '副本-关口恶战', 'FB.png',
	'WJY', '副本-江轶同学会晤', 'WJY.png'
];
setList(Clist, 'tChina');
// 迷你游戏
let date = new Date();
let myDate = parseInt(date.getDate());
let myMonth = parseInt(date.getMonth());
let sa = 177 + myMonth + myDate + 1;
let Mlist = ['NutBowling', '坚果保龄球 ', 'baolingqiu.png',
	'GuanXin', '观星', 'GuanXin.png',
	'yy', '以牙还牙', 'yy.png',
	'ZombieGames', '僵尸运动会', 'woxinfeixiang.png',
	'yicixingxiaofei', '一次性消费', 'yicixingxiaofei.gif',
	'kaotianchifan', '靠天吃饭', 'kaotianchifan.png',
	'pinjizhidi', '三路防守', 'pinjizhidi.png',
	'bpsyc', '玩偶匣市场', 'bpsyc.png',
	'fmdzz', '三列防部', 'fmdzz.png',
	'ydbs', '一朵不少', 'ten.png',
	'KongXi', '空袭', 'KongXi.png',
	'YXZZ', '隐形战役', 'YXZZ.png',
	'xjsdmf', '小僵尸大麻烦', 'sm.png',
	'QRWX', '全日无休', 'QRWX.png',
	'Bowling2', '坚果保龄球 2', 'baolingqiu.png',
	'GuanXin2', '观星2', 'GuanXin.png',
	'yy2', '以牙还牙 2', 'yy.png',
	'324', '排山倒海', 'pai.png',
	'psdh', '排山倒海•谋略', 'pai.png',
	'150', '常青之塔', 'mota.png',
	'Helloween', '万圣节', 'fmdzz.png',
	[sa], "每日挑战", "pai.png"
];
setList(Mlist, 'tMini');
// 页面加载
let run = $("preloader", "status");
let speed = 1;
let timer = null;
let alpha = 100;
const startrun = (target) => {
	clearInterval(timer);
	timer = setInterval(function() {
		if (target > alpha) {
			speed = 2;
		} else {
			speed = -2;
		}
		if (alpha == target) {
			clearInterval(timer);
		} else {
			alpha = alpha + speed;
			run.style.filter = 'alpha(opacity=' + alpha + ')';
			run.style.opacity = alpha / 100;
		}
	}, 30)
}
startrun(0);
setTimeout(() => {
	SetNone($("preloader"), $("status"));
}, 1000);
// 初始化
$User.Client.PC && $User.HTTP ? (
	(oS.AutoSun = Math.floor(getCookie('JSPVZAutoSun'))) && ($('cAutoSun').checked = true),
	(oS.Silence = Math.floor(getCookie('JSPVZSilence'))) && ($('cSilence').checked = true)
) : (oS.AutoSun = 1, $('cAutoSun').checked = true,
	oS.Silence = 0, $('cSilence').checked = false);
InitGame();