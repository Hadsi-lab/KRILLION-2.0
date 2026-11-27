/*
 * Question database: "Name a song by <artist>".
 *
 * Each artist lists accepted songs grouped by rarity tier:
 *   tiers[0] = most popular (Elmo)  ...  tiers[5] = rarest (Snuffy)
 *
 * Tiers are estimates of relative Spotify popularity (stream counts / popularity
 * score). Every artist covers the full spectrum: many popular songs at the top,
 * only a handful at the rarest tier. Replace with real Spotify data later
 * without touching the validation or scoring code.
 *
 * `aliases` maps a canonical title to extra accepted spellings. Case,
 * punctuation, accents, "&"/"and" and a leading "The/A/An" are already handled
 * by the validator, so only list genuinely different names here.
 */
window.SS = window.SS || {};

SS.ARTISTS = [
  {
    id: "taylor-swift",
    name: "Taylor Swift",
    tiers: [
      ["Shake It Off", "Blank Space", "Love Story", "Anti-Hero", "Cruel Summer", "You Belong with Me", "Bad Blood"],
      ["Style", "Delicate", "Lover", "Cardigan", "Look What You Made Me Do", "We Are Never Ever Getting Back Together", "All Too Well", "Wildest Dreams", "I Knew You Were Trouble"],
      ["Enchanted", "22", "Willow", "Karma", "Mastermind", "Getaway Car", "August", "Fortnight", "Our Song", "Me!", "Teardrops on My Guitar", "The 1", "Red"],
      ["Mine", "Fearless", "...Ready for It?", "Champagne Problems", "Exile", "Betty", "State of Grace", "Gorgeous", "Fifteen", "White Horse", "Back to December"],
      ["Clean", "Dear John", "The Last Great American Dynasty", "Tolerate It", "Long Live", "Holy Ground", "Dress", "Invisible String"],
      ["Mary's Song (Oh My My My)", "Tied Together with a Smile", "Superstar"]
    ],
    aliases: { "...Ready for It?": ["Are You Ready for It"] }
  },
  {
    id: "the-beatles",
    name: "The Beatles",
    tiers: [
      ["Hey Jude", "Let It Be", "Yesterday", "Here Comes the Sun", "Come Together"],
      ["Twist and Shout", "Help!", "Yellow Submarine", "All You Need Is Love", "I Want to Hold Your Hand", "Blackbird", "In My Life", "Something", "Hello, Goodbye"],
      ["Eleanor Rigby", "Strawberry Fields Forever", "Penny Lane", "Love Me Do", "A Hard Day's Night", "Can't Buy Me Love", "Get Back", "Ob-La-Di, Ob-La-Da", "While My Guitar Gently Weeps", "Here, There and Everywhere", "Norwegian Wood", "Lucy in the Sky with Diamonds", "Drive My Car"],
      ["Across the Universe", "I Saw Her Standing There", "Ticket to Ride", "Paperback Writer", "Revolution", "Day Tripper", "She Loves You", "Michelle", "Back in the U.S.S.R.", "Helter Skelter", "Got to Get You into My Life", "With a Little Help from My Friends"],
      ["Dear Prudence", "I Am the Walrus", "Taxman", "Rain", "Martha My Dear", "Golden Slumbers", "Because", "I've Just Seen a Face", "Tomorrow Never Knows"],
      ["Wild Honey Pie", "Dig It", "Flying", "Her Majesty"]
    ],
    aliases: { "Norwegian Wood": ["Norwegian Wood (This Bird Has Flown)"] }
  },
  {
    id: "queen",
    name: "Queen",
    tiers: [
      ["Bohemian Rhapsody", "Don't Stop Me Now", "Another One Bites the Dust", "We Will Rock You"],
      ["Under Pressure", "We Are the Champions", "Somebody to Love", "I Want to Break Free", "Radio Ga Ga", "Killer Queen"],
      ["Crazy Little Thing Called Love", "Bicycle Race", "Fat Bottomed Girls", "The Show Must Go On", "Who Wants to Live Forever", "A Kind of Magic", "I Want It All", "Love of My Life"],
      ["Innuendo", "Hammer to Fall", "Too Much Love Will Kill You", "You're My Best Friend", "Friends Will Be Friends", "Flash", "Seven Seas of Rhye", "Tie Your Mother Down"],
      ["'39", "Spread Your Wings", "Now I'm Here", "Save Me", "Play the Game", "Stone Cold Crazy", "Mustapha", "Good Old-Fashioned Lover Boy"],
      ["Bijou", "Lazing on a Sunday Afternoon", "Sail Away Sweet Sister"]
    ],
    aliases: { "Radio Ga Ga": ["Radio Gaga"], "Flash": ["Flash's Theme"] }
  },
  {
    id: "michael-jackson",
    name: "Michael Jackson",
    tiers: [
      ["Billie Jean", "Beat It", "Thriller", "Smooth Criminal"],
      ["Don't Stop 'Til You Get Enough", "Man in the Mirror", "Rock with You", "Black or White", "Bad"],
      ["The Way You Make Me Feel", "Wanna Be Startin' Somethin'", "They Don't Care About Us", "Remember the Time", "Dirty Diana", "Human Nature", "P.Y.T. (Pretty Young Thing)", "Heal the World", "You Rock My World", "Earth Song"],
      ["Off the Wall", "Leave Me Alone", "Scream", "Jam", "Ben", "Liberian Girl", "Will You Be There", "You Are Not Alone", "Speed Demon", "Another Part of Me"],
      ["Stranger in Moscow", "Dangerous", "In the Closet", "Give In to Me", "Blood on the Dance Floor", "Who Is It", "Workin' Day and Night"],
      ["Little Susie", "Morphine", "Is It Scary"]
    ],
    aliases: {}
  },
  {
    id: "abba",
    name: "ABBA",
    tiers: [
      ["Dancing Queen", "Mamma Mia", "Gimme! Gimme! Gimme! (A Man After Midnight)"],
      ["The Winner Takes It All", "Waterloo", "Take a Chance on Me", "Lay All Your Love on Me", "Money, Money, Money", "Super Trouper", "Chiquitita"],
      ["Fernando", "Voulez-Vous", "Knowing Me, Knowing You", "Does Your Mother Know", "SOS", "I Have a Dream", "Honey, Honey", "Thank You for the Music", "One of Us"],
      ["The Name of the Game", "Summer Night City", "Slipping Through My Fingers", "Ring Ring", "I Do, I Do, I Do, I Do, I Do", "Angeleyes", "Head over Heels"],
      ["Eagle", "When All Is Said and Done", "Our Last Summer", "Hole in Your Soul", "The Day Before You Came", "Under Attack", "I Still Have Faith in You", "Don't Shut Me Down"],
      ["King Kong Song", "Dum Dum Diddle", "Two for the Price of One"]
    ],
    aliases: { "Money, Money, Money": ["Money Money"], "I Do, I Do, I Do, I Do, I Do": ["I Do I Do"] }
  },
  {
    id: "ed-sheeran",
    name: "Ed Sheeran",
    tiers: [
      ["Shape of You", "Perfect", "Thinking Out Loud", "Photograph", "Bad Habits"],
      ["Shivers", "Castle on the Hill", "Galway Girl", "The A Team", "Happier", "Lego House", "I Don't Care", "Eyes Closed"],
      ["Don't", "Sing", "Give Me Love", "Dive", "Supermarket Flowers", "Kiss Me", "Afterglow", "Overpass Graffiti", "Beautiful People"],
      ["Small Bump", "Drunk", "You Need Me, I Don't Need You", "Tenerife Sea", "Bloodstream", "Nancy Mulligan", "Visiting Hours", "Barcelona", "Save Myself"],
      ["One", "Runaway", "Wake Me Up", "Grade 8", "Autumn Leaves", "New Man", "Tides"],
      ["The City", "U.N.I."]
    ],
    aliases: { "The A Team": ["A Team"] }
  },
  {
    id: "coldplay",
    name: "Coldplay",
    tiers: [
      ["Yellow", "Viva la Vida", "The Scientist", "Fix You", "A Sky Full of Stars"],
      ["Clocks", "Paradise", "Hymn for the Weekend", "Adventure of a Lifetime", "My Universe", "Higher Power"],
      ["Speed of Sound", "Trouble", "In My Place", "Magic", "Violet Hill", "Every Teardrop Is a Waterfall", "Charlie Brown", "Shiver", "Up&Up", "Orphans"],
      ["Lovers in Japan", "Talk", "Warning Sign", "Princess of China", "Don't Panic", "Everglow", "Strawberry Swing", "Life in Technicolor", "Sparks", "Midnight"],
      ["Daylight", "Amsterdam", "Swallowed in the Sea", "Major Minus", "Spies", "42", "Oceans", "Army of One"],
      ["Brothers & Sisters", "Bigger Stronger", "Careful Where You Stand"]
    ],
    aliases: { "Life in Technicolor": ["Life in Technicolour"], "42": ["Forty Two", "Forty-Two"] }
  },
  {
    id: "adele",
    name: "Adele",
    tiers: [
      ["Someone Like You", "Rolling in the Deep", "Hello", "Set Fire to the Rain", "Skyfall"],
      ["Easy on Me", "When We Were Young", "Make You Feel My Love", "Chasing Pavements", "Send My Love (To Your New Lover)", "Rumour Has It"],
      ["Turning Tables", "Water Under the Bridge", "Hometown Glory", "Love in the Dark", "I Drink Wine", "Don't You Remember", "Oh My God", "All I Ask"],
      ["One and Only", "Lovesong", "He Won't Go", "Remedy", "Million Years Ago", "Daydreamer", "To Be Loved", "Cold Shoulder"],
      ["Take It All", "I'll Be Waiting", "Tired", "Best for Last", "My Little Love", "Sweetest Devotion", "Cry Your Heart Out", "Strangers by Nature"],
      ["Right as Rain", "First Love", "My Same"]
    ],
    aliases: { "Rumour Has It": ["Rumor Has It"] }
  },
  {
    id: "elton-john",
    name: "Elton John",
    tiers: [
      ["Tiny Dancer", "Rocket Man", "Your Song", "I'm Still Standing", "Cold Heart (PNAU Remix)"],
      ["Bennie and the Jets", "Can You Feel the Love Tonight", "Don't Go Breaking My Heart", "Candle in the Wind", "Crocodile Rock", "Goodbye Yellow Brick Road", "Sacrifice"],
      ["Saturday Night's Alright for Fighting", "Daniel", "I Guess That's Why They Call It the Blues", "Don't Let the Sun Go Down on Me", "Circle of Life", "Sorry Seems to Be the Hardest Word", "Nikita", "Levon", "Hold Me Closer"],
      ["Philadelphia Freedom", "Someone Saved My Life Tonight", "Funeral for a Friend", "Island Girl", "Mona Lisas and Mad Hatters", "Blue Eyes", "Honky Cat", "Pinball Wizard", "Border Song"],
      ["Madman Across the Water", "Indian Sunset", "Burn Down the Mission", "Grey Seal", "Harmony", "Take Me to the Pilot", "Amoreena", "Mellow"],
      ["Skyline Pigeon", "Lady Samantha", "Empty Sky"]
    ],
    aliases: { "Bennie and the Jets": ["Benny and the Jets"], "Rocket Man": ["Rocketman"] }
  },
  {
    id: "billie-eilish",
    name: "Billie Eilish",
    tiers: [
      ["Bad Guy", "Birds of a Feather", "Lovely", "Ocean Eyes", "What Was I Made For?"],
      ["When the Party's Over", "Happier Than Ever", "Everything I Wanted", "Wildflower", "Lunch", "No Time to Die", "Bury a Friend"],
      ["Therefore I Am", "Bellyache", "Idontwannabeyouanymore", "You Should See Me in a Crown", "Chihiro", "Your Power", "Copycat", "Six Feet Under", "The 30th", "Lost Cause"],
      ["Wish You Were Gay", "My Strange Addiction", "I Love You", "Xanny", "Bitches Broken Hearts", "Watch", "Halley's Comet", "NDA", "TV", "Billie Bossa Nova", "Skinny", "L'Amour de Ma Vie"],
      ["Ilomilo", "8", "Listen Before I Go", "Getting Older", "Oxytocin", "Goldwing", "Male Fantasy", "The Greatest", "Blue"],
      ["Hostage", "Party Favor", "Everybody Dies"]
    ],
    aliases: { "Idontwannabeyouanymore": ["I Don't Wanna Be You Anymore"], "8": ["Eight"] }
  },
  {
    id: "bruno-mars",
    name: "Bruno Mars",
    tiers: [
      ["Just the Way You Are", "Uptown Funk", "Locked Out of Heaven", "When I Was Your Man", "Die with a Smile", "That's What I Like"],
      ["24K Magic", "Grenade", "Treasure", "The Lazy Song", "Talking to the Moon", "Marry You", "Count on Me"],
      ["Finesse", "It Will Rain", "Versace on the Floor", "Chunky", "Gorilla", "Young Girls", "Runaway Baby"],
      ["Calling All My Lovelies", "Too Good to Say Goodbye", "Perm", "Straight Up & Down", "Liquor Store Blues"],
      ["Moonshine", "If I Knew", "Our First Time", "Show Me", "Natalie"],
      ["Somewhere in Brooklyn", "The Other Side", "Money Make Her Smile"]
    ],
    aliases: { "24K Magic": ["24 Karat Magic"] }
  },
  {
    id: "oasis",
    name: "Oasis",
    tiers: [
      ["Wonderwall", "Don't Look Back in Anger", "Champagne Supernova", "Live Forever", "Stop Crying Your Heart Out"],
      ["Stand by Me", "Supersonic", "Some Might Say", "Whatever", "Slide Away", "Half the World Away", "The Masterplan", "Cigarettes & Alcohol", "Rock 'n' Roll Star"],
      ["Little by Little", "Morning Glory", "She's Electric", "Roll with It", "Shakermaker", "All Around the World", "Acquiesce", "D'You Know What I Mean?", "Lyla", "The Importance of Being Idle"],
      ["Talk Tonight", "Cast No Shadow", "Go Let It Out", "The Hindu Times", "Songbird", "Married with Children", "Columbia", "Up in the Sky", "Hey Now!", "Hello"],
      ["Fade Away", "Rockin' Chair", "It's Gettin' Better (Man!!)", "Bag It Up", "Magic Pie", "Who Feels Love?", "Falling Down", "I Hope, I Think, I Know"],
      ["Digsy's Dinner", "Fade In-Out", "(It's Good) To Be Free"]
    ],
    aliases: { "(It's Good) To Be Free": ["It's Good to Be Free"], "D'You Know What I Mean?": ["Do You Know What I Mean"] }
  },
  {
    id: "fleetwood-mac",
    name: "Fleetwood Mac",
    tiers: [
      ["Dreams", "Go Your Own Way", "The Chain", "Landslide", "Everywhere"],
      ["Rhiannon", "Little Lies", "Don't Stop", "Gypsy", "Songbird", "Never Going Back Again", "Seven Wonders", "Sara"],
      ["Tusk", "Hold Me", "Big Love", "Say You Love Me", "You Make Loving Fun", "Silver Springs", "Second Hand News", "Gold Dust Woman", "Albatross"],
      ["Black Magic Woman", "Sisters of the Moon", "Storms", "Man of the World", "Oh Well", "Need Your Love So Bad", "Monday Morning", "I Don't Want to Know"],
      ["Sentimental Lady", "Hypnotized", "Family Man", "Isn't It Midnight", "Save Me", "That's All for Everyone", "Brown Eyes", "Warm Ways"],
      ["Station Man", "Bermuda Triangle", "Dragonfly"]
    ],
    aliases: {}
  },
  {
    id: "ac-dc",
    name: "AC/DC",
    tiers: [
      ["Highway to Hell", "Back in Black", "Thunderstruck", "You Shook Me All Night Long"],
      ["T.N.T.", "Hells Bells", "It's a Long Way to the Top (If You Wanna Rock 'n' Roll)", "Dirty Deeds Done Dirt Cheap", "Shoot to Thrill", "For Those About to Rock (We Salute You)", "Whole Lotta Rosie"],
      ["Rock 'n' Roll Train", "Moneytalks", "Let There Be Rock", "Have a Drink on Me", "Hard as a Rock", "Big Balls", "Problem Child", "Who Made Who", "Jailbreak", "Sin City"],
      ["Heatseeker", "Riff Raff", "The Jack", "High Voltage", "Shot Down in Flames", "Touch Too Much", "Ride On", "Rock or Bust", "Shot in the Dark", "Girls Got Rhythm"],
      ["Kicked in the Teeth", "Love Hungry Man", "Night Prowler", "What Do You Do for Money Honey", "Spoilin' for a Fight", "Bad Boy Boogie", "Overdose"],
      ["Crabsody in Blue", "Love Song", "Stick Around"]
    ],
    aliases: { "T.N.T.": ["Dynamite"], "Moneytalks": ["Money Talks"] }
  },
  {
    id: "kylie-minogue",
    name: "Kylie Minogue",
    tiers: [
      ["Can't Get You Out of My Head", "Padam Padam", "Spinning Around", "The Loco-Motion"],
      ["I Should Be So Lucky", "Love at First Sight", "Dancing", "Slow", "All the Lovers"],
      ["Better the Devil You Know", "Come into My World", "In Your Eyes", "On a Night Like This", "Kids", "Hand on Your Heart", "Especially for You", "Please Stay", "Step Back in Time", "Tension", "Shocked"],
      ["Confide in Me", "Wow", "2 Hearts", "Get Outta My Way", "Je ne sais pas pourquoi", "Got to Be Certain", "Red Blooded Woman", "Chocolate", "Timebomb", "Magic", "Celebration"],
      ["Did It Again", "Some Kind of Bliss", "Breathe", "Your Disco Needs You", "Give Me Just a Little More Time", "Never Too Late", "Wouldn't Change a Thing", "Tears on My Pillow"],
      ["Cowboy Style", "Too Far", "Limbo"]
    ],
    aliases: { "The Loco-Motion": ["Locomotion"], "2 Hearts": ["Two Hearts"] }
  },
  {
    id: "eminem",
    name: "Eminem",
    tiers: [
      ["Lose Yourself", "Without Me", "Mockingbird", "The Real Slim Shady", "Godzilla"],
      ["'Till I Collapse", "Rap God", "Superman", "Love the Way You Lie", "Stan", "Not Afraid", "Sing for the Moment", "Cleanin' Out My Closet"],
      ["When I'm Gone", "My Name Is", "Venom", "Beautiful", "Lucky You", "The Monster", "Just Lose It", "Like Toy Soldiers", "Berzerk", "Houdini"],
      ["Kamikaze", "Killshot", "Business", "The Way I Am", "Criminal", "White America", "Square Dance", "Kill You", "Mosh"],
      ["Brain Damage", "Rock Bottom", "If I Had", "Cinderella Man", "Bad Guy", "Evil Twin", "Kim", "Same Song & Dance"],
      ["Infinite", "It's OK", "Searchin'"]
    ],
    aliases: { "'Till I Collapse": ["Til I Collapse"] }
  },
  {
    id: "dua-lipa",
    name: "Dua Lipa",
    tiers: [
      ["Levitating", "Don't Start Now", "New Rules", "One Kiss", "Houdini"],
      ["Physical", "Break My Heart", "Be the One", "IDGAF", "Dance the Night", "Training Season", "Hallucinate"],
      ["Love Again", "Blow Your Mind (Mwah)", "Hotter Than Hell", "Electricity", "Illusion", "Kiss and Make Up", "Last Dance", "Scared to Be Lonely", "Fever", "Pretty Please"],
      ["Boys Will Be Boys", "Good in Bed", "Cool", "Future Nostalgia", "Thinking 'Bout You", "These Walls", "Whatcha Doing", "Falling Forever", "Anything for Love"],
      ["Lost in Your Light", "Genesis", "Begging", "No Goodbyes", "Want To", "Garden"],
      ["Homesick", "Room for 2", "Bad Together"]
    ],
    aliases: { "Room for 2": ["Room for Two"] }
  }
];

SS.ARTISTS_BY_ID = Object.fromEntries(SS.ARTISTS.map((a) => [a.id, a]));
