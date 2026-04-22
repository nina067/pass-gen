const words = [
    "Abyss", "Acorn", "Amber", "Anvil", "Argon", "Axiom", "Bacon", "Badge", "Basil", "Beast",
    "Birch", "Blaze", "Blimp", "Blitz", "Bloom", "Bluff", "Braid", "Brick", "Broom", "Cabal",
    "Cabin", "Camel", "Canoe", "Cargo", "Chaos", "Charm", "Chase", "Chief", "Chill", "Choir",
    "Cider", "Cigar", "Civic", "Clamp", "Clash", "Clasp", "Cleat", "Cliff", "Climb", "Cloak",
    "Clock", "Cloud", "Clove", "Clown", "Cobra", "Comet", "Comic", "Conch", "Coral", "Crack",
    "Craft", "Crane", "Crawl", "Cream", "Crest", "Crown", "Crumb", "Crush", "Crypt", "Dance",
    "Demon", "Denim", "Derby", "Dingo", "Disco", "Diver", "Dogma", "Draft", "Drain", "Drama",
    "Drill", "Drone", "Eagle", "Ebony", "Echo", "Elves", "Ember", "Epoch", "Erupt", "Evade",
    "Exile", "Fable", "Fairy", "Feast", "Fetch", "Fever", "Fiber", "Flame", "Flask", "Fleet",
    "Flick", "Flint", "Flock", "Flora", "Flute", "Focus", "Force", "Forge", "Forum", "Fraud",
    "Frost", "Frown", "Fudge", "Fuzzy", "Galaxy", "Gamma", "Gavel", "Gecko", "Genre", "Ghost",
    "Giant", "Gland", "Glide", "Globe", "Glory", "Glove", "Golem", "Goose", "Grace", "Grail",
    "Grasp", "Grave", "Gravy", "Greed", "Grill", "Grime", "Grove", "Guard", "Guest", "Guide",
    "Guild", "Gumbo", "Guru", "Habit", "Hatch", "Haven", "Havoc", "Heart", "Heavy", "Hedge",
    "Helix", "Honor", "Hound", "Hover", "Human", "Humor", "Husky", "Hydra", "Hyena", "Icicle",
    "Idiom", "Igloo", "Image", "Index", "Insect", "Ivory", "Jackal", "Jello", "Jelly", "Jewel",
    "Joint", "Joust", "Judge", "Juice", "Jumbo", "Jump", "Karma", "Kayak", "Kebab", "Khaki",
    "Kiosk", "Knack", "Knife", "Knock", "Koala", "Label", "Labor", "Latch", "Laugh", "Layer",
    "Leach", "Lemon", "Level", "Lever", "Limit", "Linen", "Lingo", "Lipid", "Logic", "Lotus",
    "Loyal", "Lunar", "Lyric", "Macaw", "Macro", "Magic", "Magma", "Major", "Maker", "Mango",
    "Manor", "Maple", "March", "Marsh", "Mason", "Match", "Mayor", "Medal", "Melon", "Merit",
    "Metal", "Meter", "Micro", "Miner", "Minor", "Mint", "Mirage", "Mixer", "Model", "Modem",
    "Moist", "Molar", "Money", "Month", "Moose", "Moral", "Motel", "Motor", "Motto", "Mount",
    "Mourn", "Mouse", "Mouth", "Movie", "Mummy", "Mural", "Music", "Myth", "Nacho", "Nadir",
    "Naive", "Nanny", "Nasal", "Nasty", "Naval", "Ninja", "Noise", "Nomad", "North", "Novel",
    "Nurse", "Nylon", "Oasis", "Ocean", "Omega", "Onion", "Onset", "Opera", "Optic", "Orbit",
    "Organ", "Otter", "Ounce", "Outer", "Owl", "Oxide", "Ozone", "Paint", "Panda", "Panel",
    "Panic", "Paper", "Patch", "Pause", "Peace", "Peach", "Pearl", "Pedal", "Penny", "Perch",
    "Phase", "Piano", "Piece", "Pilot", "Pitch", "Pivot", "Pixel", "Place", "Plaid", "Plane",
    "Plant", "Plate", "Plaza", "Point", "Poker", "Polar", "Porch", "Pound", "Power", "Price",
    "Pride", "Prize", "Proof", "Prose", "Proxy", "Punch", "Pupil", "Puppy", "Purge", "Quack",
    "Quail", "Quake", "Quark", "Queen", "Query", "Quest", "Queue", "Quick", "Quill", "Quilt",
    "Quirk", "Quota", "Quote", "Rabid", "Radar", "Radio", "Rally", "Ranch", "Range", "Rapid",
    "Ratio", "Raven", "Razor", "Realm", "Rebel", "Regal", "Relax", "Relic", "Remix", "Renew",
    "Resin", "Retro", "Rhino", "Rider", "Ridge", "Rifle", "Rigid", "Rigor", "River", "Roast",
    "Robin", "Robot", "Rodeo", "Rogue", "Roman", "Round", "Route", "Royal", "Ruby", "Ruin",
    "Ruler", "Rumba", "Rupee", "Rural", "Saber", "Sable", "Salad", "Salon", "Salsa", "Salty",
    "Samba", "Sandy", "Santa", "Sauce", "Sauna", "Scale", "Scalp", "Scare", "Scarf", "Scene",
    "Scent", "Scoop", "Score", "Scout", "Scrap", "Scrub", "Scuba", "Sedan", "Sense", "Serum",
    "Seven", "Shack", "Shade", "Shaft", "Shake", "Shale", "Shame", "Shank", "Shape", "Share",
    "Shark", "Sharp", "Shave", "Sheep", "Shell", "Shift", "Shine", "Shirt", "Shock", "Shoot",
    "Short", "Shove", "Shrub", "Shrug", "Sight", "Silly", "Siren", "Skate", "Skill", "Skirt",
    "Skull", "Skunk", "Slate", "Slave", "Sleep", "Slice", "Slide", "Slime", "Slope", "Smash",
    "Smile", "Smoke", "Snack", "Snake", "Sneak", "Snipe", "Snout", "Solar", "Solid", "Solve",
    "Sonar", "Sonic", "Sound", "South", "Space", "Spade", "Spare", "Spark", "Speak", "Spear",
    "Spell", "Spice", "Spike", "Spine", "Spire", "Split", "Spoke", "Spoon", "Sport", "Spray",
    "Squad", "Squat", "Squid", "Stack", "Staff", "Stage", "Stain", "Stair", "Stake", "Stalk",
    "Stamp", "Stand", "Stark", "Start", "State", "Steak", "Steal", "Steam", "Steel", "Steep",
    "Steer", "Stiff", "Still", "Sting", "Stink", "Stock", "Stone", "Stool", "Store", "Storm",
    "Story", "Stout", "Stove", "Strap", "Straw", "Stray", "Strip", "Strut", "Study", "Stuff",
    "Stump", "Style", "Sugar", "Suite", "Super", "Surge", "Sushi", "Swamp", "Swarm", "Sweat",
    "Sweep", "Sweet", "Swell", "Swift", "Swim", "Swine", "Swing", "Swirl", "Swiss", "Sword",
    "Syrup", "Table", "Taboo", "Tacit", "Tacky", "Taffy", "Taint", "Tango", "Taste", "Teach",
    "Theme", "Thing", "Think", "Third", "Thumb", "Tiger", "Toast", "Topic", "Torch", "Total",
    "Touch", "Tough", "Towel", "Tower", "Toxic", "Track", "Tract", "Train", "Trait", "Tramp",
    "Trash", "Treat", "Trend", "Triad", "Trial", "Tribe", "Trick", "Troll", "Troop", "Truck",
    "Trunk", "Trust", "Truth", "Tulip", "Tumor", "Tunic", "Turbo", "Twang", "Tweed", "Twig",
    "Twine", "Twins", "Twirl", "Twist", "Tycoon", "Ulcer", "Ultra", "Umbra", "Uncle", "Under",
    "Unify", "Union", "Unite", "Unity", "Unzip", "Urban", "Usher", "Usual", "Usurp", "Vacant",
    "Vague", "Valet", "Valid", "Valor", "Value", "Valve", "Vapor", "Vault", "Vegan", "Venom",
    "Venue", "Venus", "Verge", "Verse", "Virus", "Visit", "Vital", "Vocal", "Voice", "Vodka",
    "Voter", "Vouch", "Voyage", "Wafer", "Wager", "Wagon", "Waist", "Waltz", "Waste", "Watch",
    "Water", "Weave", "Wedge", "Weigh", "Weird", "Whale", "Wheat", "Wheel", "Whirl", "Whisk",
    "White", "Whole", "Width", "Wield", "Witch", "Woman", "Women", "World", "Worry", "Worse",
    "Worst", "Worth", "Wound", "Wrath", "Wreck", "Wrist", "Write", "Wrong", "Yacht", "Yards",
    "Yarn", "Yearn", "Yeast", "Yield", "Yodel", "Young", "Youth", "Zebra", "Zesty", "Zinc",
    "Zonal", "Zones"
];

function randomPassword() {
    const spchars = ['!', '@', '#', '$', '%', '^', '&', '*', '-', '+', '?', '=', '~'];
    
    // Pick 3 random words
    const word1 = words[Math.floor(Math.random() * words.length)];
    const word2 = words[Math.floor(Math.random() * words.length)];
    const word3 = words[Math.floor(Math.random() * words.length)];
    
    // Pick 1 special character
    const spchar = spchars[Math.floor(Math.random() * spchars.length)];
    
    // Pick 3 digits (e.g. 000 to 999)
    const digits = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    
    return `${word1}-${word2}-${word3}${spchar}${digits}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const passwordDisplay = document.getElementById('passwordDisplay');
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');

    function updatePassword() {
        const newPassword = randomPassword();
        passwordDisplay.textContent = newPassword;
        
        // Reset copy button icon if it was previously copied
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>`;
    }

    // Generate on load
    updatePassword();

    // Event listeners
    generateBtn.addEventListener('click', updatePassword);
    
    copyBtn.addEventListener('click', () => {
        const text = passwordDisplay.textContent;
        if (!text || text === "Generating...") return;
        
        navigator.clipboard.writeText(text).then(() => {
            copyBtn.classList.add('copied');
            copyBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>`;
                
            setTimeout(() => {
                copyBtn.classList.remove('copied');
                copyBtn.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>`;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy password: ', err);
        });
    });
});
