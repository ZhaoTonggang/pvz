﻿oS.Init({
	PName: [oNutBowling, oHugeNutBowling, oBoomNutBowling],
	ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oDancingZombie, oBackupDancer, oScreenDoorZombie,
		oFootballZombie, oNewspaperZombie, oBucketheadZombie, oPoleVaultingZombie
	],
	PicArr: ["images/interface/background1.jpg", "images/interface/Stripe.png"],
	backgroundImage: "images/interface/background1.jpg",
	LF: [0, 1, 1, 1, 1, 1],
	CanSelectCard: 0,
	DKind: 0,
	LevelName: "小游戏:坚果保龄球",
	LvlEName: "NutBowling",
	LargeWaveFlag: {
		10: $("imgFlag3"),
		20: $("imgFlag2"),
		30: $("imgFlag1")
	},
	StaticCard: 0,
	StartGameMusic: "Watery Graves",
	StartGame: function() {
		NewImg("imgSFS", "images/interface/csd.gif", "left:0;top:0px", EDAll);
		NewEle(0, "div",
			"width:22px;height:502px;margin:75px 0 0 485px;position:absolute;z-index:1;background:url(images/interface/Stripe.png)",
			0, $("tGround"));
		StopMusic();
		PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		SetHidden($("dSunNum"));
		oS.InitLawnMower();
		PrepareGrowPlants(function() {
			oP.Monitor({
				f: function() {
					(function() {
						var a = ArCard.length;
						if (a < 10) {
							var c = [oNutBowling, oNutBowling, oNutBowling,
									oNutBowling, oNutBowling, oBoomNutBowling,
									oHugeNutBowling
								],
								b = Math.floor(Math.random() * c.length),
								e = c[b],
								d = e.prototype,
								f = "dCard" + Math.random();
							ArCard[a] = {
								DID: f,
								PName: e,
								PixelTop: 600
							};
							NewImg(f, d.PicArr[d.CardGif],
								"top:600px;width:100px;height:120px;cursor:pointer;clip:rect(auto,auto,60px,auto)",
								$("dCardList"), {
									onmouseover: function(g) {
										ViewPlantTitle(GetChoseCard(f), g)
									},
									onmouseout: function() {
										SetHidden($("dTitle"))
									},
									onclick: function(g) {
										ChosePlant(g, oS.ChoseCard, f)
									}
								})
						}
						oSym.addTask(500, arguments.callee, [])
					})();
					(function() {
						var b = ArCard.length,
							a, c;
						while (b--) {
							(c = (a = ArCard[b]).PixelTop) > 60 * b && ($(a.DID)
								.style.top = (a.PixelTop = c - 1) + "px")
						}
						oSym.addTask(5, arguments.callee, [])
					})()
				},
				ar: []
			});
			oP.AddZombiesFlag();
			SetVisible($("dFlagMeter"))
		})
	}
}, {
	AZ: [
		[oZombie, 2, 1],
		[oZombie2, 2, 1],
		[oZombie3, 2, 1],
		[oConeheadZombie, 3, 1],
		[oBucketheadZombie, 3, 1],
		[oNewspaperZombie, 2, 1],
		[oPoleVaultingZombie, 2, 10],
		[oScreenDoorZombie, 2, 10],
		[oFootballZombie, 1, 10]
	],
	FlagNum: 30,
	FlagToSumNum: {
		a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
		a2: [4, 7, 12, 20, 13, 16, 21, 40, 22, 25, 30, 50]
	},
	FlagToMonitor: {
		9: [ShowLargeWave, 0],
		19: [ShowLargeWave, 0],
		29: [ShowFinalWave, 0]
	},
	FlagToEnd: function() {
		NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
			onclick: function() {
				SelectModal(0)
			}
		});
		NewImg("PointerUD", "images/interface/PointerDown.gif", "top:190px;left:330px", EDAll)
	}
}, {
	GetChoseCard: function(b) {
		if (oS.Chose) {
			return
		}
		var a = ArCard.length;
		while (a--) {
			ArCard[a].DID == b && (oS.ChoseCard = a, a = 0)
		}
		return oS.ChoseCard
	},
	ChosePlant: function(a, b) {
		PlayAudio("seedlift");
		a = window.event || a;
		var f = ArCard[oS.ChoseCard],
			e = a.clientX + EBody.scrollLeft || EElement.scrollLeft,
			d = a.clientY + EBody.scrollTop || EElement.scrollTop,
			c = f.PName.prototype;
		oS.Chose = 1;
		EditImg(NewImg("MovePlant", c.PicArr[c.StaticGif], "left:" + e - 0.5 * (c.beAttackedPointL + c
				.beAttackedPointR) + "px;top:" + d + 20 - c.height + "px;z-index:254", EDAll).cloneNode(
				false), "MovePlantAlpha", "", {
				visibility: "hidden",
				filter: "alpha(opacity=40)",
				opacity: 0.4,
				zIndex: 30
			},
			EDAll);
		SetAlpha($(f.DID), 50, 0.5);
		SetHidden($("dTitle"));
		GroundOnmousemove = GroundOnmousemove1
	},
	CancelPlant: function() {
		ClearChild($("MovePlant"), $("MovePlantAlpha"));
		oS.Chose = 0;
		SetAlpha($(ArCard[oS.ChoseCard].DID), 100, 1);
		oS.ChoseCard = "";
		GroundOnmousemove = function() {}
	},
	GrowPlant: function(l, c, b, f, a) {
		var j = $("DivTeach");
		j && j.parentNode.removeChild(j);
		if (c > 347) {
			innerText(NewEle("DivTeach", "div", "line-height:40px;font-size: 14px", 0, EDAll), "");
			return false
		}
		var i = oS.ChoseCard,
			g = ArCard[i],
			h = g.PName,
			k = h.prototype,
			d = g.DID,
			e;
		(new h()).Birth(c, b, f, a, l);
		ClearChild($("MovePlant"), $("MovePlantAlpha"));
		$("dCardList").removeChild(e = $(d));
		e = null;
		ArCard.splice(i, 1);
		oS.ChoseCard = "";
		oS.Chose = 0;
		GroundOnmousemove = function() {}
	},
	ViewPlantTitle: function(a) {}
});