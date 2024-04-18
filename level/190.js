﻿oS.Init({
	PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater,
		oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom,
		oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood,
		oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic,
		oSeaShroom, oOxygen, ostar, oTTS, oGun, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower,
		oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean
	],
	ZName: [oZomboni, oZombie, oBucketheadZombie, oConeheadZombie, oCZombie, oCBucketheadZombie,
		oCConeheadZombie, oFootballZombie, oHeiFootballZombie, othugZombie, oCJackinTheBoxZombie, oZZ,
		oDancingZombie, oBackupDancer, oMustacheZombie, oXBZombie, oPoleVaultingZombie,
		oCPoleVaultingZombie, oEmperor
	],
	PicArr: function() {
		return ["images/interface/backgroundwall2.jpg"]
	}(),
	backgroundImage: "images/interface/backgroundwall2.jpg",
	CanSelectCard: 1,
	LevelName: "常青之塔 40层",
	LvlEName: 190,
	SunNum: 9000,
	LF: [0, 3, 3, 3, 3, 3, 3],
	DKind: 0,
	StartGameMusic: "The Great Wall1",
	LargeWaveFlag: {
		5: $("imgFlag3"),
		10: $("imgFlag2"),
		15: $("imgFlag1")
	},
	InitLawnMower: function() {
		CustomSpecial(oCleaner, 1, -1)
		CustomSpecial(oCleaner, 2, -1)
		CustomSpecial(oCleaner, 3, -1)
		CustomSpecial(oCleaner, 4, -1)
		CustomSpecial(oCleaner, 5, -1)
	}
}, {
	AZ: [
		[oZomboni, 1, 1],
		[oZombie, 1, 1],
		[oBucketheadZombie, 1, 1],
		[oConeheadZombie, 1, 1],
		[oCZombie, 1, 1],
		[oCBucketheadZombie, 1, 1],
		[oCConeheadZombie, 1, 1],
		[oFootballZombie, 1, 1],
		[oHeiFootballZombie, 1, 1],
		[othugZombie, 1, 1],
		[oCJackinTheBoxZombie, 1, 1],
		[oZZ, 1, 1],
		[oDancingZombie, 1, 1],
		[oMustacheZombie, 1, 1][oXBZombie, 1, 1],
		[oPoleVaultingZombie, 1, 1],
		[oCPoleVaultingZombie, 1, 1],
		[oEmperor, 1, 15, [15]]
	],
	FlagNum: 15,
	FlagToSumNum: {
		a1: [48, 71, 95, 124, 139, 167, 164, 167],
		a2: [48, 71, 95, 124, 139, 167, 164, 185]
	},
	FlagToMonitor: {
		4: [ShowLargeWave, 0],
		9: [ShowLargeWave, 0],
		14: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/BigChomper.png",
			"left:667px;top:330px;clip:rect(auto,auto,60px,auto)", EDAll, {
				onclick: function() {
					GetNewCard(this, oBigChomper, 191)
				}
			});
		EditImg($("PointerUD"), 0, "images/interface/PointerDown.gif", {
			left: "700px",
			top: "290px",
			visibility: "visible"
		})
	}
});