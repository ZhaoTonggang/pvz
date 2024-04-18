﻿oS.Init({
	PName: [oLilyPad, oSnowRepeater, oLing, oStarfruit, oLilyPad1],
	ZName: [oDuckyTubeZombie1, oDuckyTubeZombie2, oDuckyTubeZombie3, oDuckyTubeZombie4, oDolphinRiderZombie,
		oSubZombie, oSnorkelZombie, oWJY1
	],
	PicArr: ["images/interface/background5.jpg"],
	backgroundImage: "images/interface/background5.jpg",
	LF: [0, 2, 2, 2, 2, 2],
	CanSelectCard: 0,
	DKind: 0,
	LevelName: "5-10关",
	LvlEName: "50",
	InitLawnMower: function() {},
	LargeWaveFlag: {},
	StartGameMusic: "Zombieboss",
	StaticCard: 0,
	LoadAccess: function(a) {
		NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
		NewEle("DivTeach", "div", 0, 0, EDAll);
		(function(d) {
			var b = arguments.callee,
				c = $("DivTeach");
			switch (d) {
				case 0:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(2,
						function() {
							$("dDave").src = "images/interface/Dave.gif";
							c.onclick = function() {
								oSym.addTask(10, b, [1])
							}
						},
						[]);
					innerText(c, "从日子的战斗看来，这个小镇上危机四伏呀。。。(点击继续)");
					break;
				case 1:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(2,
						function() {
							$("dDave").src = "images/interface/Dave.gif";
							c.onclick = function() {
								oSym.addTask(10, b, [2])
							}
						},
						[]);
					innerText(c, "终于。现在真正的挑战出现了(点击继续)");
					break;
				case 2:
					PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
					c.onclick = null;
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(2,
						function() {
							$("dDave").src = "images/interface/Dave.gif";
							c.onclick = function() {
								oSym.addTask(10, b, [3])
							}
						},
						[]);
					innerText(c, "作者僵尸，来了！注意了，他会分裂出很多复制体！(点击继续)");
					break;
				case 3:
					PlayAudio("crazydaveshort2");
					c.onclick = null;
					$("dDave").src = "images/interface/Dave3.gif";
					oSym.addTask(1,
						function() {
							$("dDave").src = "images/interface/Dave.gif";
							c.onclick = function() {
								oSym.addTask(10, b, [4])
							}
						},
						[]);
					innerText(c, "打到他之后赶紧逃吧，我不想待在这个鬼地方了！(点击继续)");
					break;
				case 4:
					$("dDave").src = "images/interface/Dave2.gif";
					ClearChild($("DivTeach"));
					oSym.addTask(5,
						function() {
							ClearChild($("dDave"));
							a(0)
						},
						[])
			}
		})(0)
	},
	UserDefinedFlagFunc: function(a) {
		oP.FlagNum == oP.FlagZombies && oP.SetTimeoutWaterZombie(4, 9, 6, [oWarshipsZombie])
	},
	StartGame: function() {
		NewImg("imgSFS", "images/interface/csd.gif", "left:0;top:0px", EDAll);
		StopMusic();
		PlayMusic(oS.LoadMusic = oS.StartGameMusic);
		SetVisible($("tdShovel"), $("dFlagMeter"), $("dTop"));
		SetHidden($("dSunNum"));
		oS.InitLawnMower();
		PrepareGrowPlants(function() {
			oP.Monitor({
				f: function() {
					(function() {
						var a = ArCard.length;
						if (a < 10) {
							var c = oS.PName,
								b = oP.FlagZombies < 6 ? Math.floor(1 + Math
									.random() * 10) < 4 ? 1 : Math.floor(Math
									.random() *
									c.length) : Math.floor(1 + Math.random() * 10) <
								3 ? 0 : Math.floor(Math.random() * c.length),
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
						oSym.addTask(600, arguments.callee, [])
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
			SetVisible($("dFlagMeterContent"))
		})
	}
}, {
	AZ: [
		[oDuckyTubeZombie1, 1, 1],
		[oDuckyTubeZombie2, 1, 10],
		[oDuckyTubeZombie3, 1, 10],
		[oDuckyTubeZombie4, 1, 10],
		[oDolphinRiderZombie, 2, 10],
		[oSubZombie, 3, 20],
		[oSnorkelZombie, 3, 9],
		[oWJY1, 3, 25, [25]]
	],
	FlagNum: 25,
	FlagToSumNum: {
		a1: [3, 5, 9, 10, 13, 15, 19, 30],
		a2: [1, 2, 12, 20, 13, 16, 21, 30]
	},
	FlagToMonitor: {},
	FlagToEnd: function() {
		NewImg("imgSF", "images/Card/Plants/FlowerPot.png",
			"left:80%;top:52%;clip:rect(auto,auto,60px,auto)", EDAll, {
				onclick: function() {
					GetNewCard(this, oFlowerPot, 321)
				}
			});
	}
}, {
	GetChoseCard: function(b) {
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
			e = a.clientX - EDAlloffsetLeft + EBody.scrollLeft || EElement.scrollLeft,
			d = a.clientY - EDAlloffsetTop + EBody.scrollTop || EElement.scrollTop,
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
		var j = oS.ChoseCard,
			g = ArCard[j],
			i = g.PName,
			k = i.prototype,
			d = g.DID,
			e,
			h = oGd.$LF[f];
		k.CanGrow(l, f, a) &&
			function() {
				PlayAudio(h != 2 ? "plant" + Math.floor(1 + Math.random() * 2) : "plant_water");
				(new i).Birth(c, b, f, a, l);
				oSym.addTask(20, SetNone, [SetStyle($("imgGrowSoil"), {
					left: c - 30 + "px",
					top: b - 40 + "px",
					zIndex: 3 * f,
					visibility: "visible"
				})]);
				ClearChild($("MovePlant"), $("MovePlantAlpha"));
				$("dCardList").removeChild(e = $(d));
				e = null;
				ArCard.splice(j, 1);
				oS.ChoseCard = "";
				oS.Chose = 0;
				GroundOnmousemove = function() {}
			}()
	},
	ViewPlantTitle: function(a) {}
});