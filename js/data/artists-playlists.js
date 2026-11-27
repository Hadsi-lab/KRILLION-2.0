/*
 * Artists added from shared playlists (see js/data/playlists.js).
 *
 * Same format as artists.js: tiers[0] = most popular ... tiers[5] = rarest.
 * Every song from the source playlist is included. Other songs were added so
 * each artist spans all six tiers.
 *
 * Benson Boone and Alex Warren are tiered directly from the playlist's Spotify
 * popularity scores (the playlist holds 25+ of their songs). Other artists are
 * hand-tiered, using the playlist's popularity scores where available.
 */
window.SS = window.SS || {};

SS.ARTISTS.push(
  {
    id: "benson-boone",
    name: "Benson Boone",
    tiers: [
      ["Beautiful Things", "In the Stars", "Mystical Magical", "Slow It Down", "Sorry I'm Here for Someone Else", "Nights Like These", "Ghost Town"],
      ["The Time of My Life", "Mr Electric Blue", "Pretty Slowly", "Cry", "Before You", "To Love Someone", "Death Wish Love"],
      ["Momma Song", "Let Me Go", "I Wanna Be the One You Call", "Be Someone", "Work of Art", "Lovely Darling", "Man in Me", "Coffee Cake"],
      ["Little Runaway", "Wanted Man", "My Greatest Fear", "Young American Heart", "Hello Love", "Drunk in My Mind"],
      ["Empty Heart Shaped Box", "Take Me Home", "Forever and a Day", "Reminds Me of You", "What Do You Want"],
      ["What Was", "Better Alone", "Room for 2", "Sugar Sweet"]
    ],
    aliases: { "Mr Electric Blue": ["Mr. Electric Blue"] }
  },
  {
    id: "alex-warren",
    name: "Alex Warren",
    tiers: [
      ["Ordinary", "Eternity", "Carry You Home", "Fever Dream", "Bloodline"],
      ["Before You Leave Me", "Burning Down", "Save You a Seat", "Passenger", "Troubled Waters"],
      ["Chasing Shadows", "You Can't Stop This", "On My Mind", "Everything", "First Time on Earth", "Change Your Mind"],
      ["The Outside", "Headlights", "Never Be Far", "You'll Be Alright, Kid"],
      ["Catch My Breath", "Heaven Without You", "Getaway Car", "How Could You (Be OK)"],
      ["Screaming Underwater", "Yard Sale", "Who I Am"]
    ],
    aliases: {}
  },
  {
    id: "sia",
    name: "Sia",
    tiers: [
      ["Chandelier", "Cheap Thrills", "Unstoppable", "Snowman", "Titanium", "Elastic Heart"],
      ["The Greatest", "Never Give Up", "Bird Set Free", "Alive", "Move Your Body", "Breathe Me"],
      ["Together", "Big Girls Cry", "Courage to Change", "Ho Ho Ho", "Candy Cane Lane", "Fire Meet Gasoline", "Soon We'll Be Found", "Clap Your Hands"],
      ["Buttons", "Dressed in Black", "Eye of the Needle", "Free Me", "Rainbow", "Helium", "Saved My Life", "Santa's Coming for Us"],
      ["Footprints", "Angel by the Wings", "You've Changed", "Cellophane", "Death by Chocolate"],
      ["Taken for Granted", "Drink to Get Drunk", "Sweet Potato"]
    ],
    aliases: {}
  },
  {
    id: "sabrina-carpenter",
    name: "Sabrina Carpenter",
    tiers: [
      ["Espresso", "Please Please Please", "Taste", "Manchild", "Nonsense", "Feather"],
      ["Bed Chem", "Juno", "Good Graces", "When Did You Get Hot?", "Tears", "Because I Liked a Boy", "Coincidence"],
      ["Dumb & Poetic", "Slim Pickins", "Sharpest Tool", "Lie to Girls", "Don't Smile", "Skinny Dipping", "Thumbs", "House Tour", "Read Your Mind", "Fast Times"],
      ["Sue Me", "Vicious", "Already Over", "Tornado Warnings", "Nobody's Son", "Sugar Talking", "My Man on Willpower", "Go Go Juice", "Opposite", "We Almost Broke Up Again Last Night"],
      ["Decode", "Eyes Wide Open", "Can't Blame a Girl for Trying", "Paris", "Pushing 20", "Exhale", "Never Getting Laid", "Don't Worry I'll Make You Worry"],
      ["Smoke and Fire", "We'll Be the Stars", "The Middle of Starting Over"]
    ],
    aliases: {}
  },
  {
    id: "shawn-mendes",
    name: "Shawn Mendes",
    tiers: [
      ["Treat You Better", "There's Nothing Holdin' Me Back", "Stitches", "Señorita", "Mercy"],
      ["In My Blood", "If I Can't Have You", "I Know What You Did Last Summer", "Lost in Japan", "Wonder", "Monster"],
      ["Youth", "Mutual", "Life of the Party", "Never Be Alone", "Something Big", "Why Why Why", "It'll Be Okay", "When You're Gone", "Summer of Love", "Imagination"],
      ["Ruin", "Nervous", "Fallin' All in You", "Patience", "Call My Friends", "Teach Me How to Love", "Bad Reputation", "Kid in Love", "A Little Too Much"],
      ["Aftertaste", "Strings", "Like This", "Show You", "Particular Taste", "Where Were You in the Morning?", "Perfectly Wrong"],
      ["Nobody Knows", "Heart of Gold", "The Mountain"]
    ],
    aliases: { "There's Nothing Holdin' Me Back": ["There's Nothing Holding Me Back"] }
  },
  {
    id: "tate-mcrae",
    name: "Tate McRae",
    tiers: [
      ["Greedy", "You Broke Me First", "Exes", "Just Keep Watching", "Sports Car"],
      ["She's All I Wanna Be", "Revolving Door", "It's OK I'm OK", "Run for the Hills", "2 Hands", "Uh Oh"],
      ["Feel Like Shit", "Chaotic", "Miss Possessive", "Dear God", "Rubberband", "That Way", "Purple Lace Bra", "What Would You Do?", "Siren Sounds"],
      ["Hate Myself", "Nostalgia", "Means I Care", "Guilty Conscience", "I'm So Gone"],
      ["Stupid", "Tear Myself Apart", "All My Friends Are Fake"],
      ["One Day"]
    ],
    aliases: { "2 Hands": ["Two Hands"] }
  },
  {
    id: "gracie-abrams",
    name: "Gracie Abrams",
    tiers: [
      ["That's So True", "I Love You, I'm Sorry", "Close to You"],
      ["Risk", "I Miss You, I'm Sorry", "Us.", "I Know It Won't Work", "Free Now"],
      ["Hit the Wall", "Blowing Smoke", "Where Do We Go Now?", "Feels Like", "Difficult", "21", "Mess It Up"],
      ["Tough Love", "Packing It Up", "I Told You Things", "Cool", "Let It Happen", "Block Me Out", "Normal Thing", "Amelie"],
      ["Unlearn You", "Rockland", "Camden", "This Is What the Drugs Are For", "Full Machine"],
      ["Minor", "Stay"]
    ],
    aliases: {}
  },
  {
    id: "olivia-rodrigo",
    name: "Olivia Rodrigo",
    tiers: [
      ["Drivers License", "Good 4 U", "Vampire", "Deja Vu", "Traitor", "Favorite Crime", "Stupid Song"],
      ["Happier", "Enough for You", "Get Him Back!", "Bad Idea Right?", "Brutal", "Jealousy, Jealousy"],
      ["Obsessed", "Lacy", "Making the Bed", "The Grudge", "Logical", "Ballad of a Homeschooled Girl", "All-American Bitch", "1 Step Forward, 3 Steps Back", "Hope Ur OK", "Can't Catch Me Now"],
      ["Pretty Isn't Pretty", "Love Is Embarrassing", "Teenage Dream", "So American", "All I Want"],
      ["Scared of My Guitar", "Girl I've Always Been", "Stranger", "Just for a Moment"],
      ["The Rose Song", "Wondering"]
    ],
    aliases: { "Good 4 U": ["Good for You"], "Hope Ur OK": ["Hope You're OK"] }
  },
  {
    id: "chappell-roan",
    name: "Chappell Roan",
    tiers: [
      ["Good Luck, Babe!", "Pink Pony Club", "Hot to Go!", "The Giver", "Red Wine Supernova", "Femininomenon"],
      ["Casual", "Naked in Manhattan", "The Subway", "After Midnight"],
      ["Super Graphic Ultra Modern Girl", "Coffee", "Kaleidoscope", "My Kink Is Karma", "Picture You"],
      ["California", "Guilty Pleasure"],
      ["School Nights", "Good Hurt", "Bitter"],
      ["Die Young"]
    ],
    aliases: {}
  },
  {
    id: "onerepublic",
    name: "OneRepublic",
    tiers: [
      ["Counting Stars", "Apologize", "I Ain't Worried", "Secrets", "I Lived"],
      ["Good Life", "Love Runs Out", "If I Lose Myself", "Stop and Stare", "I Don't Wanna Wait", "Rescue Me", "Run"],
      ["Wherever I Go", "Kids", "Someday", "Better Days", "West Coast", "All the Right Moves", "Feel Again", "Say (All I Need)", "Sunshine"],
      ["Lullaby", "Preacher", "Mercy", "Life in Color", "Marchin On", "Come Home", "Didn't I", "Burning Bridges"],
      ["Mirage", "Connection", "Lose Somebody", "Wild Life", "Christmas Without You"],
      ["Waking Up", "Au Revoir"]
    ],
    aliases: {}
  },
  {
    id: "miley-cyrus",
    name: "Miley Cyrus",
    tiers: [
      ["Flowers", "Wrecking Ball", "Party in the U.S.A.", "Angels Like You", "The Climb"],
      ["We Can't Stop", "Midnight Sky", "Malibu", "Used to Be Young", "Prisoner", "Adore You"],
      ["See You Again", "7 Things", "Can't Be Tamed", "Slide Away", "River", "Jaded", "Plastic Hearts", "Mother's Daughter", "Who Owns My Heart"],
      ["Younger Now", "Fly on the Wall", "Start All Over", "Liberty Walk", "End of the World", "Easy Lover", "Doctor (Work It Out)", "4x4", "Bad Karma"],
      ["Dooo It!", "Inspired", "Golden G String", "Handstand", "Week Without You", "Island"],
      ["Karen Don't Be Sad", "The Floyd Song (Sunrise)", "Twinkle Song"]
    ],
    aliases: { "7 Things": ["Seven Things"] }
  },
  {
    id: "imagine-dragons",
    name: "Imagine Dragons",
    tiers: [
      ["Believer", "Demons", "Thunder", "Radioactive", "Enemy", "Bones"],
      ["Natural", "Whatever It Takes", "It's Time", "On Top of the World", "Bad Liar", "Birds"],
      ["Follow You", "Sharks", "Wrecked", "I Bet My Life", "Shots", "Zero", "Next to Me", "Walking the Wire"],
      ["Monday", "Gold", "Amsterdam", "Tiptoe", "Nothing Left to Say", "Hear Me", "Lonely", "Wake Up", "Eyes Closed"],
      ["Friction", "Polaroid", "Dream", "Rise Up", "Mouth of the River", "Cutthroat", "Easy Come Easy Go"],
      ["Tokyo", "Selene"]
    ],
    aliases: {}
  },
  {
    id: "katy-perry",
    name: "Katy Perry",
    tiers: [
      ["Roar", "Dark Horse", "Firework", "Last Friday Night (T.G.I.F.)", "Teenage Dream", "California Gurls"],
      ["Hot n Cold", "I Kissed a Girl", "E.T.", "The One That Got Away", "Wide Awake", "Part of Me", "Unconditionally"],
      ["Birthday", "Chained to the Rhythm", "Never Really Over", "Bon Appétit", "Swish Swish", "Harleys in Hawaii", "Daisies", "Thinking of You", "This Is How We Do"],
      ["Waking Up in Vegas", "Ur So Gay", "Hey Hey Hey", "Legendary Lovers", "Smile", "Woman's World", "Walking on Air", "Peacock", "Circle the Drain"],
      ["Mannequin", "Lost", "Self Inflicted", "Pearl", "Not Like the Movies", "Ghost", "Choose Your Battles"],
      ["Trust in Me", "Growing Pains", "Faith Won't Fail"]
    ],
    aliases: { "California Gurls": ["California Girls"], "Hot n Cold": ["Hot and Cold"], "E.T.": ["ET"] }
  },
  {
    id: "harry-styles",
    name: "Harry Styles",
    tiers: [
      ["As It Was", "Watermelon Sugar", "Sign of the Times", "Adore You", "Late Night Talking"],
      ["Falling", "Golden", "Lights Up", "Satellite", "Matilda", "Music for a Sushi Restaurant", "Kiwi"],
      ["Sweet Creature", "Two Ghosts", "Daylight", "Fine Line", "Cherry", "She", "Grapejuice", "Keep Driving", "Little Freak"],
      ["Canyon Moon", "Treat People with Kindness", "Carolina", "Only Angel", "Boyfriends", "Cinema", "Daydreaming", "Love of My Life"],
      ["Meet Me in the Hallway", "Woman", "To Be So Lonely", "From the Dining Table"],
      ["Sunflower, Vol. 6", "Ever Since New York"]
    ],
    aliases: { "Sign of the Times": ["Sign of the Time"], "Sunflower, Vol. 6": ["Sunflower"] }
  },
  {
    id: "rihanna",
    name: "Rihanna",
    tiers: [
      ["Umbrella", "Diamonds", "We Found Love", "Only Girl (In the World)", "Work", "Stay", "Love on the Brain"],
      ["Rude Boy", "Don't Stop the Music", "S&M", "Needed Me", "Disturbia", "What's My Name?", "Take a Bow", "Lift Me Up"],
      ["Pon de Replay", "SOS", "Kiss It Better", "Desperado", "Bitch Better Have My Money", "Man Down", "Cheers (Drink to That)", "Hate That I Love You", "Unfaithful", "Where Have You Been", "California King Bed"],
      ["Russian Roulette", "Te Amo", "Same Ol' Mistakes", "Woo", "Consideration", "Skin", "Rehab", "Shut Up and Drive", "Pour It Up"],
      ["Cockiness (Love It)", "Never Ending", "James Joint", "Hard", "Rockstar 101", "Wait Your Turn", "Fire Bomb"],
      ["Rush", "Here I Go Again", "There's a Thug in My Life"]
    ],
    aliases: { "Bitch Better Have My Money": ["BBHMM"], "S&M": ["S and M"] }
  },
  {
    id: "maroon-5",
    name: "Maroon 5",
    tiers: [
      ["Memories", "Girls Like You", "Payphone", "Sugar", "Moves Like Jagger", "Animals", "She Will Be Loved", "This Love"],
      ["One More Night", "Maps", "Don't Wanna Know", "What Lovers Do", "Misery", "Harder to Breathe", "Sunday Morning"],
      ["Daylight", "Love Somebody", "Makes Me Wonder", "Won't Go Home Without You", "Wait", "Beautiful Mistakes", "Nobody's Love", "Lost"],
      ["Cold", "Never Gonna Leave This Bed", "Tangled", "Shiver", "Secret", "Wake Up Call", "Lucky Strike", "Give a Little More"],
      ["Through with You", "Must Get Out", "Not Falling Apart", "The Sun", "Nothing Lasts Forever", "Little of Your Time"],
      ["Sweetest Goodbye", "Not Coming Home", "Tickets"]
    ],
    aliases: {}
  },
  {
    id: "justin-bieber",
    name: "Justin Bieber",
    tiers: [
      ["Love Yourself", "Sorry", "Peaches", "Baby", "Ghost", "Stay", "What Do You Mean?"],
      ["Intentions", "Yummy", "Holy", "Anyone", "Boyfriend", "As Long as You Love Me", "Beauty and a Beat", "Never Say Never", "Monster", "Daisies"],
      ["One Time", "Mistletoe", "Lonely", "Company", "Purpose", "Hold On", "Somebody", "Off My Face", "Die for You", "Hailey", "Confident"],
      ["Somebody to Love", "U Smile", "Eenie Meenie", "Pray", "Changes", "Habitual", "Heartbreaker", "All That Matters", "Life Is Worth Living"],
      ["Down to Earth", "Favorite Girl", "First Dance", "Bigger", "Catching Feelings", "Thought of You"],
      ["Love Me", "Up", "Common Denominator"]
    ],
    aliases: {}
  },
  {
    id: "ariana-grande",
    name: "Ariana Grande",
    tiers: [
      ["7 Rings", "Thank U, Next", "Positions", "We Can't Be Friends (Wait for Your Love)", "Yes, And?", "Into You", "Side to Side", "No Tears Left to Cry"],
      ["Dangerous Woman", "God Is a Woman", "Break Free", "Problem", "Bang Bang", "One Last Time", "The Way", "Love Me Harder", "Breathin", "34+35", "Santa Tell Me"],
      ["Stuck with U", "Rain on Me", "Imagine", "Needy", "Bloodline", "The Boy Is Mine", "Supernatural", "Twilight Zone", "POV", "Moonlight", "Greedy", "Be Alright", "Ghostin"],
      ["Honeymoon Avenue", "Tattooed Heart", "Baby I", "Motive", "Fake Smile", "Bad Idea", "Everyday", "Thinking Bout You", "Safety Net", "Nasty"],
      ["Piano", "Daydreamin'", "Lovin' It", "Hands on Me", "Knew Better", "Better Off", "Eternal Sunshine", "Intro (End of the World)"],
      ["Put Your Hearts Up", "Right There", "Only 1"]
    ],
    aliases: { "7 Rings": ["Seven Rings"], "Thank U, Next": ["Thank You Next"], "34+35": ["34 35", "Thirty Four Thirty Five"] }
  },
  {
    id: "lady-gaga",
    name: "Lady Gaga",
    tiers: [
      ["Bad Romance", "Poker Face", "Shallow", "Just Dance", "Die with a Smile", "Abracadabra", "Always Remember Us This Way"],
      ["Paparazzi", "Telephone", "Alejandro", "Born This Way", "Million Reasons", "Applause", "Rain on Me", "Hold My Hand", "Bloody Mary"],
      ["Judas", "The Edge of Glory", "Marry the Night", "Yoü and I", "LoveGame", "Stupid Love", "Disease", "Do What U Want", "Perfect Illusion", "Joanne", "Monster", "Speechless"],
      ["911", "Sour Candy", "Venus", "Dancin' in Circles", "Teeth", "G.U.Y.", "Dance in the Dark", "Government Hooker", "Scheiße", "Hair", "Eh, Eh (Nothing Else I Can Say)", "Vanish into You"],
      ["Manicure", "Swine", "Sexxx Dreams", "Fashion of His Love", "Electric Chapel", "Heavy Metal Lover", "Boys Boys Boys", "Summerboy"],
      ["Brown Eyes", "Disco Heaven", "I Like It Rough"]
    ],
    aliases: { "Scheiße": ["Scheisse"], "Yoü and I": ["You and I"] }
  },
  {
    id: "shakira",
    name: "Shakira",
    tiers: [
      ["Hips Don't Lie", "Whenever, Wherever", "Waka Waka (This Time for Africa)", "Dai Dai", "She Wolf", "Bzrp Music Sessions, Vol. 53"],
      ["Chantaje", "La Tortura", "Can't Remember to Forget You", "Underneath Your Clothes", "TQG", "Beautiful Liar", "Loca", "Rabiosa", "Te Felicito"],
      ["Objection (Tango)", "Ojos Así", "Estoy Aquí", "Suerte", "Inevitable", "Me Enamoré", "Clandestino", "Puntería", "Soltera", "La Bicicleta", "Empire", "Try Everything"],
      ["Dónde Están los Ladrones?", "Tú", "Pies Descalzos, Sueños Blancos", "Did It Again", "Gypsy", "Addicted to You", "Las de la Intuición", "Antología", "Moscas en la Casa", "Dare (La La La)"],
      ["Ciega, Sordomuda", "Octavo Día", "Si Te Vas", "No", "Nada", "Je l'aime à mourir", "Illegal", "Animal City"],
      ["Magia", "Peligro"]
    ],
    aliases: {
      "Bzrp Music Sessions, Vol. 53": ["Music Sessions 53", "Session 53", "Shakira Bzrp", "Bzrp 53"],
      "Whenever, Wherever": ["Suerte (Whenever Wherever)"]
    }
  },
  {
    id: "twenty-one-pilots",
    name: "Twenty One Pilots",
    tiers: [
      ["Stressed Out", "Heathens", "Ride", "Car Radio"],
      ["Chlorine", "Heavydirtysoul", "Tear in My Heart", "Lane Boy", "Holding On to You", "Jumpsuit", "Level of Concern", "Shy Away", "My Blood"],
      ["Migraine", "Fairly Local", "Guns for Hands", "Trees", "Kitchen Sink", "The Judge", "House of Gold", "Doubt", "Polarize", "Nico and the Niners", "Levitate", "Morph", "Overcompensate", "Next Semester"],
      ["Neon Gravestones", "Saturday", "The Outside", "Truce", "Ode to Sleep", "Goner", "Cut My Lip", "Smithereens", "Bandito", "Pet Cheetah", "Choker", "Message Man"],
      ["Addict with a Pen", "Air Catcher", "Johnny Boy", "Implicit Demand for Proof", "Taxi Cab", "Semi-Automatic", "Clear", "March to the Sea"],
      ["Glowing Eyes", "Anathema", "Two"]
    ],
    aliases: {}
  },
  {
    id: "drake",
    name: "Drake",
    tiers: [
      ["God's Plan", "One Dance", "Hotline Bling", "Passionfruit", "In My Feelings", "Rich Flex", "Jimmy Cooks"],
      ["Started from the Bottom", "Hold On, We're Going Home", "Nice for What", "Toosie Slide", "Laugh Now Cry Later", "Headlines", "Take Care", "Marvins Room", "Too Good", "Fake Love", "Nonstop", "Controlla", "Best I Ever Had"],
      ["Find Your Love", "Worst Behavior", "0 to 100 / The Catch Up", "Energy", "Know Yourself", "Over", "Successful", "Massive", "Teenage Fever", "Chicago Freestyle", "Wants and Needs", "Search & Rescue", "Family Matters", "Push Ups", "Knife Talk"],
      ["Furthest Thing", "Tuscan Leather", "Doing It Wrong", "Look What You've Done", "Jungle", "Free Spirit", "Days in the East", "Emotionless", "Sticky", "Falling Back", "Texts Go Green", "Feel No Ways"],
      ["Fireworks", "Karaoke", "Thank Me Now", "Shut It Down", "Light Up", "The Resistance", "Cece's Interlude", "Paris Morton Music", "Shabang"],
      ["Lust for Life", "Houstatlantavegas", "Brand New"]
    ],
    aliases: { "0 to 100 / The Catch Up": ["0 to 100", "Zero to 100"], "Marvins Room": ["Marvin's Room"] }
  },
  {
    id: "zara-larsson",
    name: "Zara Larsson",
    tiers: [
      ["Lush Life", "Never Forget You", "Symphony", "Stateside", "Midnight Sun"],
      ["Ain't My Fault", "Ruin My Life", "I Would Like", "All the Time", "Uncover", "Can't Tame Her"],
      ["So Good", "Wow", "Talk About Love", "Words", "Look What You've Done", "Poster Girl", "She's Not Me", "Girls Like"],
      ["Only You", "Love Me Land", "Don't Worry About Me", "Funny"],
      ["Bad Boys", "Rooftop"],
      ["Make That Money Girl"]
    ],
    aliases: { "Stateside": ["Stateside + Zara Larsson"] }
  },
  {
    id: "noah-kahan",
    name: "Noah Kahan",
    tiers: [
      ["Stick Season", "Dial Drunk", "Northern Attitude"],
      ["She Calls Me Back", "Homesick", "Everywhere, Everything", "Orange Juice", "Call Your Mom", "Forever"],
      ["The View Between Villages", "Your Needs, My Needs", "Paul Revere", "False Confidence", "Hurt Somebody", "Growing Sideways", "All My Love", "Come Over", "Halloween"],
      ["Mess", "Godlight", "Maine", "Glue Myself Shut", "Part of Me", "Still"],
      ["Young Blood", "Carlo's Song", "Cynic", "Animal"],
      ["Busyhead"]
    ],
    aliases: {}
  },
  {
    id: "post-malone",
    name: "Post Malone",
    tiers: [
      ["Circles", "Sunflower", "Rockstar", "Congratulations", "Better Now", "I Had Some Help"],
      ["White Iverson", "Psycho", "Wow.", "Goodbyes", "I Fall Apart", "Too Young", "Go Flex", "Take What You Want", "Chemical", "Mourning", "I Like You (A Happier Song)", "Pour Me a Drink"],
      ["Hollywood's Bleeding", "Allergic", "Enemies", "Motley Crew", "Cooped Up", "Insane", "Staring at the Sun", "Die for Me", "Feeling Whitney", "Stay", "Candy Paint", "Over Now", "Saint-Tropez"],
      ["Paranoid", "Spoil My Night", "Same Bitches", "Takin' Shots", "Otherside", "Blame It on Me", "I'm Gonna Be", "Myself"],
      ["Leave", "Big Lie", "Deja Vu", "Up There", "Patient"],
      ["Never Understand", "Hollywood Dreams", "Git Wit U"]
    ],
    aliases: { "Sunflower": ["Sunflower (Spider-Man: Into the Spider-Verse)"] }
  },
  {
    id: "charlie-puth",
    name: "Charlie Puth",
    tiers: [
      ["Attention", "We Don't Talk Anymore", "See You Again", "One Call Away", "Light Switch"],
      ["How Long", "Marvin Gaye", "Left and Right", "Dangerously", "Done for Me", "Cheating on You", "Loser"],
      ["Mother", "Girlfriend", "That's Hilarious", "The Way I Am", "Suffer", "Changes", "Smells Like Me", "Charlie Be Quiet!"],
      ["Boy", "Somebody Told Me", "Slow It Down", "Some Type of Love", "Losing My Mind", "Empty Cups", "Lipstick"],
      ["Through It All", "Hard on Yourself", "I Warned Myself", "Patient"],
      ["Look at Me Now", "Up All Night"]
    ],
    aliases: {}
  },
  {
    id: "selena-gomez",
    name: "Selena Gomez",
    tiers: [
      ["Lose You to Love Me", "Come & Get It", "Same Old Love", "Good for You", "Wolves", "Calm Down"],
      ["Hands to Myself", "Bad Liar", "It Ain't Me", "Back to You", "Single Soon", "Rare", "Love You Like a Love Song", "Who Says", "We Don't Talk Anymore"],
      ["Naturally", "Kill Em with Kindness", "Fetish", "Look at Her Now", "Boyfriend", "Ice Cream", "De Una Vez", "Slow Down", "The Heart Wants What It Wants", "Taki Taki"],
      ["Me & the Rhythm", "Round & Round", "Hit the Lights", "Falling Down", "Tell Me Something I Don't Know", "Vulnerable", "Crowded Room", "Dance Again", "Souvenir", "Kinda Crazy"],
      ["Sober", "Camouflage", "Nobody", "Survivors", "Ring", "Feel Me", "Love On"],
      ["Stars Dance", "Birthday", "Write Your Name"]
    ],
    aliases: {}
  },
  {
    id: "tame-impala",
    name: "Tame Impala",
    tiers: [
      ["The Less I Know the Better", "Let It Happen", "Dracula", "New Person, Same Old Mistakes", "Borderline"],
      ["Feels Like We Only Go Backwards", "Eventually", "Elephant", "Lost in Yesterday", "Is It True", "Breathe Deeper"],
      ["Apocalypse Dreams", "Mind Mischief", "Yes I'm Changing", "'Cause I'm a Man", "Solitude Is Bliss", "Patience", "Instant Destiny", "Expectation", "The Moment"],
      ["Lucidity", "Alter Ego", "Why Won't They Talk to Me?", "Past Life", "Posthumous Forgiveness", "One More Year", "On Track", "It Might Be Time"],
      ["Gossip", "Disciples", "Love/Paranoia", "Nangs", "Reality in Motion", "Endors Toi", "Keep On Lying", "Half Full Glass of Wine"],
      ["Desire Be Desire Go", "Runway, Houses, City, Clouds", "41 Mosquitoes Flying in Formation"]
    ],
    aliases: {}
  },
  {
    id: "the-chainsmokers",
    name: "The Chainsmokers",
    tiers: [
      ["Closer", "Something Just Like This", "Don't Let Me Down", "Paris", "Roses"],
      ["Sick Boy", "This Feeling", "Takeaway", "Call You Mine", "High", "All We Know", "Setting Fires", "Everybody Hates Me"],
      ["Honest", "Young", "Inside Out", "iPad", "Who Do You Love", "Selfie", "Kanye", "Wake Up Alone", "Side Effects", "Hope"],
      ["Beach House", "Siren", "Push My Luck", "Riptide", "Kills You Slowly", "Do You Mean", "Somebody", "The One"],
      ["Last Day Alive", "Bloodstream", "Break Up Every Night", "You Owe Me", "Until You Were Gone"],
      ["Waterbed", "Good Intentions"]
    ],
    aliases: { "Selfie": ["#Selfie"] }
  },
  {
    id: "calvin-harris",
    name: "Calvin Harris",
    tiers: [
      ["One Kiss", "Summer", "This Is What You Came For", "Feel So Close", "How Deep Is Your Love", "Outside"],
      ["Blame", "Slide", "Feels", "Sweet Nothing", "I Need Your Love", "Under Control", "Promises", "Miracle", "Potion", "Giant"],
      ["Bounce", "Acceptable in the 80s", "Flashback", "The Girls", "I'm Not Alone", "Ready for the Weekend", "Let's Go", "Thinking About You", "Pray to God", "My Way"],
      ["Faking It", "We'll Be Coming Back", "Drinking from the Bottle", "Open Wide", "Heatstroke", "Rollin", "Nuh Ready Nuh Ready", "Colours"],
      ["Merrymaking at My Place", "Vegas", "Yeah Yeah Yeah La La La"],
      ["The Rain", "Neon Rocks", "Love Souvenir"]
    ],
    aliases: {}
  },
  {
    id: "david-guetta",
    name: "David Guetta",
    tiers: [
      ["Titanium", "I'm Good (Blue)", "Without You", "Memories", "When Love Takes Over"],
      ["Hey Mama", "Play Hard", "Turn Me On", "Where Them Girls At", "Sexy Bitch", "Lovers on the Sun", "Baby Don't Hurt Me", "I Don't Wanna Wait", "She Wolf (Falling to Pieces)", "2U"],
      ["Gettin' Over You", "Dangerous", "Bad", "Flames", "Don't Leave Me Alone", "Little Bad Girl", "Love Don't Let Me Go", "Crazy What Love Can Do", "Who's That Chick?"],
      ["Just a Little More Love", "The World Is Mine", "Delirious", "Shot Me Down", "Goodbye", "What I Did for Love"],
      ["Baby When the Light", "Tomorrow Can Wait", "Love Is Gone"],
      ["Money"]
    ],
    aliases: { "Sexy Bitch": ["Sexy Chick"] }
  },
  {
    id: "the-script",
    name: "The Script",
    tiers: [
      ["Hall of Fame", "Breakeven", "The Man Who Can't Be Moved", "Superheroes"],
      ["For the First Time", "Nothing", "If You Could See Me Now", "Rain", "Science & Faith"],
      ["Six Degrees of Separation", "We Cry", "Talk You Down", "Before the Worst", "No Good in Goodbye", "Arms Open", "Never Seen Anything \"Quite Like You\"", "Paint the Town Green", "Millionaires"],
      ["If You Ever Come Back", "Exit Wounds", "Walk Away", "Glowing", "Flares", "Hail Rain or Sunshine"],
      ["Anybody There", "Fall for Anything", "The End Where I Begin", "Live Like We're Dying", "I'm Yours"],
      ["Long Gone and Moved On", "This = Love"]
    ],
    aliases: { "Breakeven": ["Break Even"], "This = Love": ["This Equals Love"] }
  },
  {
    id: "nsync",
    name: "*NSYNC",
    tiers: [
      ["Bye Bye Bye", "It's Gonna Be Me", "Tearin' Up My Heart"],
      ["I Want You Back", "This I Promise You", "Girlfriend", "Pop", "Gone"],
      ["God Must Have Spent a Little More Time on You", "Sailing", "Merry Christmas, Happy Holidays", "Better Place", "Space Cowboy", "I'll Never Stop", "Thinking of You"],
      ["Digital Get Down", "For the Girl Who Has Everything", "Here We Go", "I Drive Myself Crazy", "Celebrity", "Just Got Paid"],
      ["Giddy Up", "Crazy for You", "Bringin' da Noise"],
      ["Riddle", "Something Like You"]
    ],
    aliases: {}
  },
  {
    id: "glass-animals",
    name: "Glass Animals",
    tiers: [
      ["Heat Waves", "Gooey"],
      ["Tangerine", "Your Love (Déjà Vu)", "Youth", "Pork Soda", "Black Mambo", "Hazey"],
      ["Life Itself", "Season 2 Episode 3", "Space Ghost Coast to Coast", "Tokyo Drifting", "Agnes", "The Other Side of Paradise", "Dreamland", "Toes"],
      ["Cocoa Hooves", "Psylla", "Wyrd", "Take a Slice", "Mama's Gun", "Pools", "Intruxx", "Creatures in Heaven"],
      ["Hot Sugar", "Cane Shuga", "Poplar St", "It's All So Incredibly Loud", "Helium", "Melon and the Coconut"],
      ["Exxus"]
    ],
    aliases: {}
  },
  {
    id: "doja-cat",
    name: "Doja Cat",
    tiers: [
      ["Say So", "Kiss Me More", "Woman", "Paint the Town Red", "Need to Know"],
      ["Streets", "Juicy", "Agora Hills", "Like That", "Boss Bitch", "Get Into It (Yuh)", "You Right"],
      ["Mooo!", "Candy", "Rules", "Tia Tamera", "Go to Town", "Demons", "Attention", "Vegas", "Freak", "Ain't Shit", "Jealous Type"],
      ["Born Again", "Cyber Sex", "Bottom Bitch", "Talk Dirty", "Shine", "Won't Bite", "Naked", "Payday", "Options"],
      ["Cookie Jar", "Wine Pon You", "Morning Light", "Fancy"],
      ["So High", "Beautiful", "Roll with Us"]
    ],
    aliases: {}
  }
);
