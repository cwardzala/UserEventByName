var UserEventByName = function (evt, name) {
	var e = evt;
	var n = name.split(',') || [];
	var nl = n.length;
	var em = {
			"backspace":	8,
			"tab":			9,
			"enter": 		13,
			"shift":		16,
			"ctrl":			17,
			"alt":			18,
			"pause/break": 	19,
			"caps lock": 	20,
			"escape": 		27,
			"page up": 		33,
			"page down": 	34,
			"end": 			35,
			"home": 		36,
			/* Arrows */
			"left": 		37,
			"up": 			38,
			"right":		39,
			"down":			40,
			"insert":		45,
			"delete":		46,
			/* Numbers */
			"0":			48,
			"1":			49,
			"2":			50,
			"3":			51,
			"4":			52,
			"5":			53,
			"6":			54,
			"7":			55,
			"8":			56,
			"9":			57,
			/* number pad numbers */
			"n0":			96,
			"n1":			97,
			"n2":			98,
			"n3":			99,
			"n4":			100,
			"n5":			101,
			"n6":			102,
			"n7":			103,
			"n8":			104,
			"n9":			105,
			/* Alpha */
			"a":			65,
			"b":			66,
			"c":			67,
			"d":				68,
			"e":			69,
			"f":			70,
			"g":			71,
			"h":			72,
			"i":			73,
			"j":			74,
			"k":			75,
			"l":			76,
			"m":			77,
			"n":			78,
			"o":			79,
			"p":			80,
			"q":			81,
			"r":			82,
			"s":			83,
			"t":			84,
			"u":			85,
			"v":			86,
			"w":			87,
			"x":			88,
			"y":			89,
			"z":			90,
			/* Math */
			"left window key":	91,
			"right window key":	92,
			"select key":		93,
			"multiply":			106,
			"add":				107,
			"subtract":			109,
			"decimal point":	110,
			"divide":			111,
			/* Function Keys */
			"f1":				112,
			"f2":				113,
			"f3":				114,
			"f4":				115,
			"f5":				116,
			"f6":				117,
			"f7":				118,
			"f8":				119,
			"f9":				120,
			"f10":				121,
			"f11":				122,
			"f12":				123,
			/* *Lock keys */
			"num lock":			144,
			"scroll lock":		145,
			/* Punctuation */
			"comma":			188,
			"dash":				189,
			"period":			190,
			"forward slash":	191,
			"grave accent":		192,
			"open bracket":		219,
			"back slash":		220,
			"close braket":		221,
			"single quote":		222
		};
	var eml = em.length;
	var m = false;
	var evname;	
	for (var x = 0; x < nl; ++x) {
		evname = em[n[x]];
		m = (e.keyCode === evname) || m;
	}
	return m;
}