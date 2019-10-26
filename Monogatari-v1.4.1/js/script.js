"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"townsquare": "townsquare.jpg",
	"aquarium": "aquarium.png",
	"field": "f2.jpg",
	"flowershop": "flowershop.jpg",
	"grocery": "grocery.jpg",
    "library": "l2.jpg",

};

// Define the Characters
const characters = {
	"you": {
		"Name": "",
		"Color": "#5bcaff"
	},
    "yein": {
        "Name": "Yein",
        "Color": "#ffffff",
		"Images":{
			"neutral": "neutral.png",
			"sad": "sad.png",
			"shy": "shy.png",
			"smiling": "smiling.png",
			"surprised": "surprised.png",
    }
},
};

let script = {
	// The game starts here.
	"Start": [

        "scene #000000",

		"you August 24th.",
        "you It had begun on that special day, in asking the beloved Jung Yein to become yours.",
        "you Endearing flowers, a citrine stone necklace, and a letter had been set at her table amidst the early hours of the day.",
        "you Within that letter lay your heartfelt confession.",
        "you ...Which thus led to this.",
        
		"play music firstdate.mp3 loop",
        "scene townsquare",
        
        "show yein smiling left",
        "yein Seo Youngho! Doofus! Thought I couldn't find you?",
        "yein You know Snapchat shows your location, right?",
        "hide yein smiling",
        "you “Oh shit - ”", "you Having practically accepted what you thought out to be Yein's defeat in this chase, you hadn't fathomed seeing her so soon.",
        "you Jumping off your feet are you leaping over that bench you had been resting upon.",
        "you It's not long before Yein is chasing after you.",
        "show yein sad left",
        "yein W-What - Hey, Seo Youngho!",
        
		{"Choice":{
			"RightAway": {
			  "Text": "“Catch me if you can!”",
			  "Do": "jump one"
			},
			"Later":{
			  "Text": "“Keep it up, slowpoke!”",
			  "Do": "jump one"
			}
		}}

	],

	"one":[
        "yein Ugh, you meanie!",
        "hide yein sad",
        
		{"Choice":{
			"Text": "you Where would you like to run to next?",
			"Grocery": {
			  "Text": "Grocery store.",
			  "Do": "jump grocery"
			},
			"Flower":{
			  "Text": "Flower shop.",
			  "Do": "jump flower"
			}
		}}
    ],
    "grocery":[
        "scene grocery",
        "you You're gone with the wind, swiftly changing directions toward the East.",
        "you Where townsfolk often flock daily to appease their insatiable hungers, replenish their emptied cupboards, or indulge in simple transactions for basic human needs.",
        "you The buzz of the grocery store is typical, customers all about. You find this may be the perfect opportunity to hide or further tease your beloved...",
        
		{"Choice":{
			"Grocery": {
			  "Text": "Dart into an aisle and hide as best you can.",
			  "Do": "jump aisle"
			},
			"Flower":{
			  "Text": "Slow down for Yein, and then bolt off once she's near.",
			  "Do": "jump bolt"
			}
		}}
    ],
    "aisle":[
        "you Though Yein is right on your tail, you manage to snake your way through the crowds of customers, ducking into an aisle. You find this plan may be impossible and yet...",
        "you Yein runs right past the aisle just as you had expected.",
        "You can't help but contain the chuckle leaving your lips as you head in the opposite direction to exit the store, leaving the poor girl to search for her lover.",
        "you Where would you like to run to next?",
    		{"Choice":{
			"Grocery": {
			  "Text": "Aquarium.",
			  "Do": "jump aquarium"
			},
			"Flower":{
			  "Text": "Library.",
			  "Do": "jump library"
			}
		}}
    ],
    "bolt":[
        "you Though Yein is right on your tail, a flood of customers still separates you both.",
        "you Slowing your pace does Yein slowly encroach upon you, rather excitedly, just like her typical, snarky self.",
        "show yein smiling left",
        "yein What, are you tired already?",
        "hide yein smiling",
        "you The close proximity is cut short as you bolt off the moment she's near.",
        "you The look of devastation and disbelief on the woman's face elicits a chuckle from you as you run for the exit.",
        "you Where would you like to run to next?",
        {"Choice":{
			"Grocery": {
			  "Text": "Aquarium.",
			  "Do": "jump aquarium"
			},
			"Flower":{
			  "Text": "Library.",
			  "Do": "jump library"
			}
		}}
        
    ],
    "flower":[
        "scene flowershop",
        "you The delectable aroma of wild blooms are quick to inundate your senses.",
        "you Of course, such lovely flowers can only remind you of how close your beloved is on your tail.",
        {"Choice":{
			"Grocery": {
			  "Text": "Distract Yein with the flowers.",
			  "Do": "jump distract"
			},
			"Flower":{
			  "Text": "Have an employee get Yein's attention.",
			  "Do": "jump employee"
			}
        }}
        ],
    "distract":[
        "you Slowing your pace to a halt do you feign an expression of sympathy.",
        "you “Awh, come on now, honey. You know I just love teasing you.”",
        "show yein sad left",
        "yein You're terrible! I thought you said your physical capabilities were bad?",
        "hide yein sad",
        "you She's out of breath from the running, and yet you can't help but ensue further games and teasing.",
        "you “Look, they even have marigolds here - your favorite. Why don't I buy you some lovely flowers to make up for it?”",
        "you Her attention is quick to divert to the grandeur of the flower shop in search for those bright, citrine flowers she holds ever so dearly. That's your flower lover girl for you.",
        "you The moment her attention span has been removed from you, you're fleeing the scene yet again.",
        "show yein surprised left",
        "yein I - Seo Youngho! I cannot believe - ",
        "hide yein surprised",
        "you Where would you like to run to next?",
            {"Choice":{
			"Grocery": {
			  "Text": "Aquarium.",
			  "Do": "jump aquarium"
			},
			"Flower":{
			  "Text": "Library.",
			  "Do": "jump library"
			}
		}}
        
    ],
    "employee":[
        "you There's just enough time for you to stop by an employee in the store and ask for a small favor.",
        "you “Hey, I think the lady coming in after me needed some help.”",
        "you You can only dart into an aisle, bearing witness to how the employee stops Yein and offers assistance.",
        "you There's no way she can escape the flood of questions, though the look of perplexity upon her face entertains you as always.",
        "you You take this moment to flee the scene yet again.",
        "you Where would you like to run to next?",
            {"Choice":{
			"Grocery": {
			  "Text": "Aquarium.",
			  "Do": "jump aquarium"
			},
			"Flower":{
			  "Text": "Library.",
			  "Do": "jump library"
			}
		}}
    ],
    "aquarium":[
        "scene aquarium",
        "you Azure, cerulean, lazuline - All tinges of blue fill your eyes like a reflection of the heavens.",
        "you ...",
        "you ......",
        "you It's a winded path through the aquarium and you've become certain you managed to wiggle Yein off your back.",
        "you Though there's one last place you'd like to drag your lover to.",
        "scene field",
        "you Of course. Where the unfinished date had occured.",
        "show yein sad left",
        "yein Seo Youngho, you coward!",
        "hide yein sad",
        "you “Wha - ”",
        "you Having let down your guard for a moment, you find yourself within Yein's grasp.",
        "you Her nimble arms are around you and you're losing balance, having already lost energy due to the long chase.",
        "play sound slump.wav",
        "wait 0800",
        "you She's managed to tackle you, though a bed of grass cushions your fall, albeit not quite as much you'd have liked it to...",
        "show yein sad left",
        "yein Geez! Don't you know how tiring that was?",
        "hide yein sad",
        "show yein smiling left",
        "yein ...Though I guess it's only fair because of that time I made you run around town for my scavenger hunt...",
        "hide yein smiling",
        "show yein shy left",
        "yein B-But still! How could I ever say no to you, Seo Youngho?",
        "yein Of course I'd like to give <i>us</i> a chance. You're the only one I've ever wanted, doofus.",
        "yein Even in our shared childhood, I...",
        "hide yein shy",
        "you She begins to fidget, most likely out of embarrassment.",
            {"Choice":{
			"Grocery": {
			  "Text": "Caress her cheek.",
			  "Do": "jump two"
			},
			"Flower":{
			  "Text": "Pat her head.",
			  "Do": "jump two"
			}
		}}
        
    ],
    "two":[
        "show yein shy left",
        "yein ...F-Fine, I - ",
        "hide yein shy",
        "play sound fireworks.mp3",
        "wait 2800",
        "you Fireworks have gone off in the distance.",
        "you Words become forgotten in the lovely moment in which Yein pries herself away to properly sit beside you, gazing upon the distant artistry in the darkening sky.",
            {"Choice":{
			"Grocery": {
			  "Text": "Pull her close.",
			  "Do": "jump three"
			},
			"Flower":{
			  "Text": "Kiss her.",
			  "Do": "jump three"
			}
		}}
    ],
    "three":[
        "you She beats you to it - in making the other's heart flutter.",
        "show yein smiling left",
        "yein ...",
        "hide yein smiling",
        "you Mouthing something do the fireworks perfectly cover up her words.",
        "you They purse and pull to form three syllables you can only guess of.",
                {"Choice":{
			"Grocery": {
			  "Text": "“I love you, too.”",
			  "Do": "jump four"
			},
		}}
    ],
    "four":[
        "you And she repeats it again, uninterrupted.",
        "show yein smiling left",
        "yein I love you, Seo Youngho.",
        "hide yein smiling",
        "you Those roseate tiers meld against yours perfectly as always, your fingers in those tresses you've always adored.",
    "end",
    ],
    
    "library":[
        "scene library",
        "you The rustic glare of the library fills your eyes and the scent of earthy books reminds you of   your first stop at the bookstore with Yein.",
        "you The way you had once said “Ew. Remind me not to fall in love with you,” rings in the back of your mind; you can only smile at the thought.",
        "you ...",
        "you ......",
        "you It's a winded path through the library and you've become certain you managed to wiggle Yein off your back.",
        "you Though there's one last place you'd like to drag your lover to.",
        "scene field",
        "you Of course. Where the unfinished date had occured.",
        "show yein sad left",
        "yein Seo Youngho, you coward!",
        "hide yein sad",
        "you “Wha - ”",
        "you Having let down your guard for a moment, you find yourself within Yein's grasp.",
        "you Her nimble arms are around you and you're losing balance, having already lost energy due to the long chase.",
        "play sound slump.wav",
        "wait 0800",
        "you She's managed to tackle you, though a bed of grass cushions your fall, albeit not quite as much you'd have liked it to...",
        "show yein sad left",
        "yein Geez! Don't you know how tiring that was?",
        "hide yein sad",
        "show yein smiling left",
        "yein ...Though I guess it's only fair because of that time I made you run around town for my scavenger hunt...",
        "hide yein smiling",
        "show yein shy left",
        "yein B-But still! How could I ever say no to you, Seo Youngho?",
        "yein Of course I'd like to give <i>us</i> a chance. You're the only one I've ever wanted, doofus.",
        "yein Even in our shared childhood, I...",
        "hide yein shy",
        "you She begins to fidget, most likely out of embarrassment.",
            {"Choice":{
			"Grocery": {
			  "Text": "Caress her cheek.",
			  "Do": "jump two"
			},
			"Flower":{
			  "Text": "Pat her head.",
			  "Do": "jump two"
			}
		}}
        
    ],
    "two":[
        "show yein shy left",
        "yein ...F-Fine, I - ",
        "hide yein shy",
        "play sound fireworks.mp3",
        "wait 2800",
        "you Fireworks have gone off in the distance.",
        "you Words become forgotten in the lovely moment in which Yein pries herself away to properly sit beside you, gazing upon the distant artistry in the darkening sky.",
            {"Choice":{
			"Grocery": {
			  "Text": "Pull her close.",
			  "Do": "jump three"
			},
			"Flower":{
			  "Text": "Kiss her.",
			  "Do": "jump three"
			}
		}}
    ],
    "three":[
        "you She beats you to it - in making the other's heart flutter.",
        "show yein smiling left",
        "yein ...",
        "hide yein smiling",
        "you Mouthing something do the fireworks perfectly cover up her words.",
        "you They purse and pull to form three syllables you can only guess of.",
                {"Choice":{
			"Grocery": {
			  "Text": "“I love you, too.”",
			  "Do": "jump four"
			},
		}}
    ],
    "four":[
        "you And she repeats it again, uninterrupted.",
        "show yein smiling left",
        "yein I love you, Seo Youngho.",
        "hide yein smiling",
        "you Those roseate tiers meld against yours perfectly as always, your fingers in those tresses you've always adored.",
    "end",
    ],
    

        };