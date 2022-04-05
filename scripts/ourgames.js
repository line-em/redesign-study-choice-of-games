///////////////////////////////////////
// Games Info (DOM)
const ourGamesContainer = document.getElementById("latest-releases");
const hostedGamesContainer = document.getElementById("hosted-latest-releases");
const ourGamesInfo = [
	{
		title: "The Luminous Underground",
		image: "./images/our/luminous.png",
		description:
			"Blast spirits out of a haunted subway system! Can your team defeat rival exterminators, shoddy gear, and City Hall?",
		/* The links are not updated */
		onlineLink: "https://www.choiceofgames.com/luminous-underground/",
		steamLink: "https://store.steampowered.com/app/1362520",
		appleLink: "https://choiceofgames.app.link/jBm199qZXL/?game=luminousunderground",
		googleLink:
			"https://play.google.com/store/apps/details?id=com.choiceofgames.luminousunderground&referrer=utm_medium%3Dweb%26utm_source%3DluminousundergroundGame",
		amazonLink:
			"https://www.amazon.com/gp/mas/dl/android?p=com.choiceofgames.omnibus&t=choofgam-20&ref=luminousundergroundGame"
	},
	{
		title: "Vampire: The Masquerade - Sins of the Sires",
		image: "./images/our/vampiresins.png",
		description:
			"In this elegy of blood, everyone in Athens owes your boss a favor, making you untouchable! Who will you use, who will you help, and who will you prey on?",
		/* The links are not updated */
		onlineLink: "https://www.choiceofgames.com/vampire-the-masquerade/sins-of-the-sires/",
		steamLink: "https://store.steampowered.com/app/1523990",
		appleLink:
			"https://itunes.apple.com/us/app/vampire-the-masquerade-sins-of-the-sires/id1608964639?mt=8&pt=239125&at=1l3v9PG&ct=sotsGame",
		googleLink:
			"https://play.google.com/store/apps/details?id=com.choiceofgames.sinsofthesires&referrer=utm_medium%3Dweb%26utm_source%3DsotsGame",
		amazonLink:
			"https://www.amazon.com/gp/mas/dl/android?p=com.choiceofgames.omnibus&t=choofgam-20&ref=sotsGames"
	},
	{
		title: "Pon Para and the Unconquerable Scorpion",
		image: "./images/our/ponpara.png",
		description:
			"Chosen by the gods, betrayed by your king, you must stop the Scorpion. Will you bring peace to the nations—or drive them to destruction for your own ends?",
		onlineLink: "https://www.choiceofgames.com/pon-para-2",
		steamLink: "https://store.steampowered.com/app/1288650",
		appleLink: "https://choiceofgames.app.link/jBm199qZXL/?game=ponpara2",
		googleLink:
			"https://play.google.com/store/apps/details?id=com.choiceofgames.ponpara2&referrer=utm_medium%3Dweb%26utm_source%3Dponpara2Game",
		amazonLink:
			"https://www.amazon.com/gp/mas/dl/android?p=com.choiceofgames.omnibus&t=choofgam-20&ref=ponpara2Games"
	},
	{
		title: "Vampire: The Masquerade — Parliament of Knives",
		image: "./images/our/vampire.png",
		description:
			"Dominate undead politics through cunning and violence! Will a missing Prince give you the opening to betray your sire and seize power?",
		onlineLink: "https://www.choiceofgames.com/vampire-the-masquerade/parliament-of-knives/",
		steamLink: "https://store.steampowered.com/app/1266100",
		appleLink:
			"https://itunes.apple.com/us/app/parliament-of-knives/id1586873130?mt=8&pt=239125&at=1l3v9PG&ct=parliamentofknivesGame",
		googleLink:
			"https://play.google.com/store/apps/details?id=com.choiceofgames.parliamentofknives&referrer=utm_medium%3Dweb%26utm_source%3DparliamentofknivesGame",
		amazonLink:
			"https://www.amazon.com/gp/mas/dl/android?p=com.choiceofgames.omnibus&t=choofgam-20&ref=parliamentofknivesGames,%20https://www.amazon.com/gp/mas/dl/android?p=com.choiceofgames.omnibus&t=choofgam-20&ref=parliamentofknivesGame"
	}
];
const hostedGamesInfo = [
	{
		title: "Dawn of the Sol Empire",
		image: "./images/hosted/dawn.png",
		description:
			"You are the leader of a space colony threatened by imminent invasion. Can you find a path to survival for your people – as well as yourself?",
		onlineLink: "https://www.choiceofgames.com/user-contributed/dawn-of-the-sol-empire/",
		steamLink: "#",
		appleLink:
			"https://play.google.com/store/apps/details?id=org.hostedgames.dawnofsolempire&referrer=utm_medium%3Dweb%26utm_source%3DdawnofsolempireGame",
		googleLink:
			"https://play.google.com/store/apps/details?id=com.choiceofgames.ponpara2&referrer=utm_medium%3Dweb%26utm_source%3Dponpara2Game",
		amazonLink:
			"https://www.amazon.com/gp/mas/dl/android?p=org.hostedgames.omnibus&t=choofgam-20&ref=dawnofsolempireGames,%20https://www.amazon.com/gp/mas/dl/android?p=org.hostedgames.omnibus&t=choofgam-20&ref=dawnofsolempireGames"
	},
	{
		title: "Community College Hero 2.5: Fun and Games",
		image: "./images/hosted/community.png",
		description:
			"It’s the calm before the storm! Embark on three light-hearted adventures with your superpowered classmates before all hell breaks loose in Part 3!",
		onlineLink:
			"https://www.choiceofgames.com/user-contributed/community-college-hero-fun-and-games/",
		steamLink: "https://store.steampowered.com/app/1782860",
		appleLink: "https://hostedgames.app.link/YkCwM6nRaM/?game=communitycollegehero25",
		googleLink:
			"https://play.google.com/store/apps/details?id=org.hostedgames.communitycollegehero25&referrer=utm_medium%3Dweb%26utm_source%3Dcommunitycollegehero25Game",
		amazonLink:
			"https://www.amazon.com/gp/mas/dl/android?p=org.hostedgames.omnibus&t=choofgam-20&ref=communitycollegehero25Games,%20https://www.amazon.com/gp/mas/dl/android?p=org.hostedgames.omnibus&t=choofgam-20&ref=communitycollegehero25Games"
	},
	{
		title: "The Soul Stone War 2",
		image: "./images/hosted/soulstone.png",
		description:
			"Overcome all obstacles by trusting in your own strength, the power of your Soul Stone, and your loyal companions. Become the legend you were born to be.!",
		onlineLink:
			"https://www.choiceofgames.com/user-contributed/soul-stone-war-2/#utm_medium=web&utm_source=ourgames",
		steamLink: "https://store.steampowered.com/app/1775520",
		appleLink: "https://hostedgames.app.link/YkCwM6nRaM/?game=soulstonewar2",
		googleLink:
			"https://play.google.com/store/apps/details?id=org.hostedgames.soulstonewar2&referrer=utm_medium%3Dweb%26utm_source%3Dsoulstonewar2Games",
		amazonLink:
			"https://www.amazon.com/gp/mas/dl/android?p=org.hostedgames.omnibus&t=choofgam-20&ref=soulstonewar2Games"
	},
	{
		title: "A Kiss from Death",
		image: "./images/hosted/kissdeath.png",
		description:
			"Romance immortal beings in a world of epic fantasy! Burn castles with a dragon! Raise the dead with a lich! Write poetry with a cursed prince!",
		onlineLink:
			"https://www.choiceofgames.com/user-contributed/kiss-from-death/#utm_medium=web&utm_source=ourgames",
		steamLink: "https://store.steampowered.com/app/1515400",
		appleLink: "https://hostedgames.app.link/YkCwM6nRaM/?game=kissfromdeath",
		googleLink:
			"https://play.google.com/store/apps/details?id=org.hostedgames.kissfromdeath&referrer=utm_medium%3Dweb%26utm_source%3DkissfromdeathGames",
		amazonLink:
			"http://www.amazon.com/gp/mas/dl/android?p=org.hostedgames.kissfromdeath&t=choofgam-20&ref=kissfromdeathGames,%20http://www.amazon.com/gp/mas/dl/android?p=org.hostedgames.kissfromdeath&t=choofgam-20&ref=kissfromdeathGames"
	}
];

///////////////////////////////////////
// Layout
const gamesLayout = (container, gameInfo, i) => {
	container.innerHTML = `<img src="${gameInfo[i].image}" alt="${gameInfo[i].title}">
      <div class="bookmark shadow">Choice of Games</div>
      <article><h2>${gameInfo[i].title}</h2>
         <p>Chosen by the gods, betrayed by your king, you must stop the Scorpion. Will you bring peace to the nations—or drive them to destruction for your own ends?</p>
         <!--play-online-->
         <div class="column">
            <a href="${gameInfo[i].onlineLink}" class="btn center">
               <ion-icon name="game-controller-outline"></ion-icon>Play Online
            </a>
         </div>
         <!--play-elsewhere-->
         <div class="column">
            <div>
               <a href="${gameInfo[i].steamLink}" class="btn">
                  <ion-icon name="logo-steam"></ion-icon>Steam
               </a>
               <a href="${gameInfo[i].googleLink}" class="btn">
                  <ion-icon name="logo-google-playstore"></ion-icon>Android
               </a>
            </div>
            <div>
               <a href="${gameInfo[i].appleLink}" class="btn">
                  <ion-icon name="logo-apple"></ion-icon>iPhone
               </a>
               <a href="${gameInfo[i].amazonLink}" class="btn">
                  <ion-icon name="logo-amazon"></ion-icon>Amazon
               </a>
            </div>
         </div></article>`;
};

///////////////////////////////////////
// Main cycle function
const randomGameReleases = (container, gameInfo) => {
	let i = Math.floor(Math.random() * gameInfo.length);
	gamesLayout(container, gameInfo, i);
};

///////////////////////////////////////
// cycle through games
window.setInterval(randomGameReleases, 4000, ourGamesContainer, ourGamesInfo);
window.setInterval(randomGameReleases, 4000, hostedGamesContainer, hostedGamesInfo);

///////////////////////////////////////
// on page load
randomGameReleases(ourGamesContainer, ourGamesInfo);
randomGameReleases(hostedGamesContainer, hostedGamesInfo);
