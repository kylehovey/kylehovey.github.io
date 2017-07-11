// Define project info for main site navigation
//
// Author: Kyle Hovey

projects = [
	{
		title : "CALSim (2016)",
		nav : "CALSim",
		description : "This is a WireWorld Cellular Automata simulator written in JavaScript. WireWorld is a CA capable of logic simulation. In fact, it is Turing Complete! This in-browser interpreter allows you to create structures, copy, paste, delete, and pause/play/step simulations.",
		link : "CALSim/index.html"
	},
	{
		title : "Villein Number Translator (2016)",
		nav : "Villein\nTranslator",
		description : "In Cyan's new game Obduction there is an alien race called the Villeins. Part of the game is figuring out their numbering system, which uses a three-by-three grid on which five \"digits\" can lie. The whole system is base-4, and I had a bunch of fun figuring it out. I wanted to create a translator to quickly verify numbers, so I made one husing the html5 canvas.",
		link : "Villein/index.html"
	},
	{
		title : "Euler Golf (2015)",
		nav : "Euler\nGolf",
		description : "When I was attending Cuesta College in San Luis Obispo, I had an idea for a game over the Gaussian Integers (complex numbers of the form a+bi where a and b are both integers). I quickly found that the game was evil in difficulty, and as I shared it with friends I also learned that it was not just me. In light of this newfound challenge, I created an in-browser version as a Hackathon project. More info can be found on the site.",
		link : "EulerGolf/index.html"
	},
	{
		title : "Ulam Spinner (2016)",
		nav : "Ulam\nSpinner",
		description : "Some projects start with vague ideas and oversized ambition. Most of the time, those types of ideas crash and burn in a humble fire. Sometimes, though, they can result in something worthwhile. In this case I wanted to somehow use the fact that complex numbers encode modular arithmetic to express primality in a visual way. The Ulam Spiral is a famous mathematical object that writes integers spiraling out from the origin and colors primes differently than non-primes. What you get is countless surprising linear patterns. I wanted to do the same thing, but with \"complex\" spinners that represent spinning complex numbers that would align when the criteria for \"division\" was met. I still think it is possible, but in the mean time I have a configuration that uses colors and spinners in a pattern that is perhaps a bit too colorful.",
		link : "UlamSpinner/index.html"
	},
  {
		title : "8-Bit Computer (2012)",
		nav : "8 Bit",
		description : "One fateful night of playing Minecraft with my best friend and I was convinced that I had to learn more about the inner workings of a CPU. We had just installed a mod that added basic digital components to the game, and my friend was constructing a processor. I knew nothing about architecture at that point, but I wanted to learn more. I began my journey reading \"Digitial Computer Electronics\" by Malvino and started constructing the basic modular components of a computer. Eventually I had constructed a processor of my own design. The final product had EM interference which induced signalling issues, but the knowledge I gained benefits me to this day. I made a website and tutorial to aid anyone who wishes to acheive the same goal. I know of a few individuals so far that have used my instructions to build their own CPU.",
		link : "http://8-bitspaghetti.com"
  },
	{
		title : "Fireplace (2016)",
		nav : "Fireplace",
		description : "One of my favorite things to do in my free time is to program new patterns for the Adafruit Neopixel shield (a 5x8 RGB LED matrix for the Arduino). Since I camp a lot, I wanted to simulate fire on it with the hopes of creating a calming lantern for my tent. I decided to go with a slightly neural-network inspired approach. I created an ember class that has an internal fire value and a customized sigmoid curve function that will map the embers' fire values to something between 0 and 1. A stoke method adds a random integer in a specified range, and a diminish method multiplies the fire variable by a predetermined constant (0<k<1). I was so happy with the results that I wanted to create an in-browser version. This time, I used HTML5 and JS to create a grid of embers. I shaped the fire on the page by making the range for the random constant that each ember is stoked with depend on the ember's position on the page. Vertically there is a linear gradient, and horizontally there is a gaussian distribution determined by page width.",
		link : "FirePlace/index.html"
	},
	{
		title : "Acoustic Forest (2016)",
		nav : "Forest",
		description : "A natural continuation of my FirePlace project and an ode to John Muir and the mountains, I created Acoustic Forest: a music visualizer that uses procedurally generated terrain with unique elements augmented by distinct frequency bands in a song. I decided to go with Muse's \"Exogenesis Symphony Part 3\" which I claim absolutely no rights to and will take down at first request of any proprietor's request. I chose the song because it just so happened that Muse's masterful composition consists of a crescendo of increasing layers of elements, then a decrescendo back out. The structure of the song itself is a mountain in shape, which made it perfect to bring in elements slowly, then bring them out in reverse order. Currently this only runs in Chrome/Safari for desktop, so apologies to mobile users. Granted, this was created in Canvas without WebGL, so expect heavy processor usage.",
		link : "AcousticForest/index.html"
	}/*,
	{
		title : "New Years Resolutions (2017)",
		nav : "Resolutions",
		description : "This year I decided to make my resolutions more transparent than ever! I created a small static page to keep track of progress on my 2017 New Years resolutions.",
		link : "Resolutions/index.html"
	}*/
]
