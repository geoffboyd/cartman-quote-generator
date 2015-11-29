var quotes = [
["It's a man's obligation to stick his boneration in a women's separation; this sort of penetration will increase the population of the younger generation.", "Eric Cartman"],
["Respect My Authority!","Eric Cartman"],
["Jewish Kid: Is anyone else having problems concentrating on this? I just can't seem to concentrate. / Cartman: Maybe we should send you to a concentration camp.","Eric Cartman, unknown child of Jewish ancestry"],
["Maury, I am out of control. Yeah, I use drugs. I can do what I waunt, biatch! Yeah, I have sex, and I don't use protection! It's my hot body; I'll do what I waunt! I don't go to school and I kill people! What-evah! I'll do what I waunt!","Eric Cartman"],
["You so much as TOUCH kitty's ass, and I'll put a firecracker in your nutsack and blow your balls all over your pants.","Eric Cartman"],
["Eric Cartman: You seem a little irritable, Kyle. You got some sand in your vagina? / Kyle: There's no sand in my vagina!","Eric Cartman, Kyle Broflovski"],
["How 'bout we sing, 'Kyle's Mom is a stupid bitch' in D Minor.","Eric Cartman"],
["I would never let a woman kick my ass. If she tried something, I'd be like, HEY! You get your bitch ass back in the kitchen and make me some pie!","Eric Cartman"],
["Hippies. They're everywhere. They wanna save the earth, but all they do is smoke pot and smell bad.","Eric Cartman"],
["Stan: Dude, dolphins are intelligent and friendly. / Cartman: Intelligent and friendly on rye bread with some mayonnaise.","Eric Cartman, Stan Marsh"],
["Stan, don't you know the first law of physics? Anything that's fun costs at least eight dollars.","Eric Cartman"],
["I hate hippies! I mean, the way they always talk about 'protectin' the earth' and then drive around in cars that get poor gas mileage and wear those stupid bracelets - I hate 'em! I wanna kick 'em in the nuts!","Eric Cartman"],
["Well, I looked in my mom's closet and saw what I was getting for Christmas, an UltraVibe Pleasure 2000.","Eric Cartman"],
["Cartman: Mom--Kitty is being a dildo. / Mrs. Cartman: Well, I know a little kitty who is sleeping with Mommy tonight.","Eric Cartman, Mrs. Cartman"],
["It's an Afghanistan goat, so it can't stay here, or else it'll choke on the sweet air of freedom.","Eric Cartman"],
["Stan: I don't want to shoot the bunny. / Uncle Jimbo: No nephew of mine is going to be a tree hugger. / Cartman: Yeah, hippie. Go back to Woodstock if you don't want to shoot anything.","Eric Cartman, Stan Marsh, Uncle Jimbo"],
["Attention shoppers! Outside today, we have a cripple fight. Cripple fight, outside!","Eric Cartman"],
["Cartman: I'm not fat. I'm big-boned. / Stan: No, Jay Leno's chin is big-boned. You are a big, fat ass.","Eric Cartman, Stan Marsh"],
["Mr. Garrison: Who was in charge of the feminist movement of the early '60s? / Cartman: A bunch of fat old skanks on their periods. / Mr. Garrison: Right. But who was the fattest, oldest skank on her period?","Eric Cartman, Mr. Garrison"]
];

function generateQuote () {
	var quotearray = quotes[Math.floor(Math.random()*19)];
	quote = quotearray[0];
	quotee = quotearray[1];
	return 0;
}

function displayQuote() {
	generateQuote();
	document.getElementById("theQuote").innerHTML = quote;
	document.getElementById("theQuotee").innerHTML = quotee;
	var twitterButton = document.getElementById("twitter");
	twitterButton.href='http://twitter.com/home/?status="' + quote + '" - ' + quotee;
	return 0
}