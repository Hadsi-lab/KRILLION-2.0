/*
 * Singer database for "Guess the Rarest Singer".
 *
 * One singer per line:  Name | gender | genres | country | popularity | aliases
 *   gender:     m, f, or x (non-binary; included in genre/country categories only)
 *   genres:     comma list of pop, rock, country, rnb, latin (may be empty)
 *   country:    ISO-style code (us, uk, au, ca, ie, nz, ...)
 *   popularity: 0-100 estimate of Spotify artist popularity / how readily people
 *               name them. Tiers are worked out per category from this ranking,
 *               so every category spans all six tiers.
 *   aliases:    ; separated alternative names
 *
 * Solo singers and band lead singers are included (as people, not band names).
 * Rappers who don't primarily sing are left out.
 */
window.SS = window.SS || {};

SS.SINGERS_RAW = `
Taylor Swift|f|pop,country|us|100|Taylor;T Swift
The Weeknd|m|pop,rnb|ca|95|Weeknd;Abel Tesfaye
Ariana Grande|f|pop,rnb|us|94|Ariana
Billie Eilish|f|pop|us|93|Billie
Lady Gaga|f|pop|us|93|Gaga
Beyoncé|f|rnb,pop|us|93|Beyonce;Queen B
Rihanna|f|pop,rnb|bb|93|RiRi
Bruno Mars|m|pop,rnb|us|93
Drake|m|rnb,pop|ca|92
Bad Bunny|m|latin|pr|92
Sabrina Carpenter|f|pop|us|91
Ed Sheeran|m|pop|uk|90
Justin Bieber|m|pop|ca|90|Bieber
Michael Jackson|m|pop,rnb|us|90|MJ
Dua Lipa|f|pop|uk|90
Adele|f|pop,rnb|uk|90
SZA|f|rnb,pop|us|90
Olivia Rodrigo|f|pop,rock|us|89
Katy Perry|f|pop|us|88
Miley Cyrus|f|pop|us|88
Morgan Wallen|m|country|us|88
Harry Styles|m|pop|uk|87
Mariah Carey|f|pop,rnb|us|87|Mariah
Whitney Houston|f|pop,rnb|us|87|Whitney
Selena Gomez|f|pop|us|86
Madonna|f|pop|us|86
Shakira|f|pop,latin|co|86
Lana Del Rey|f|pop|us|86
Benson Boone|m|pop|us|86
Post Malone|m|pop,country|us|86
Zach Bryan|m|country|us|86
Karol G|f|latin|co|86
Britney Spears|f|pop|us|85|Britney
Sia|f|pop|au|85
Chappell Roan|f|pop|us|85
Doja Cat|f|pop,rnb|us|85
Chris Brown|m|rnb,pop|us|85
Elton John|m|pop,rock|uk|85
Celine Dion|f|pop|ca|84|Céline Dion
Tate McRae|f|pop|ca|84
Luke Combs|m|country|us|84
Alex Warren|m|pop|us|83
Sam Smith|x|pop,rnb|uk|83
Gracie Abrams|f|pop|us|82
Charli XCX|f|pop|uk|82|Charli
Shawn Mendes|m|pop|ca|82
P!nk|f|pop,rock|us|82|Pink
Hozier|m|rock,pop|ie|82
Teddy Swims|m|pop,rnb|us|82
Olivia Dean|f|pop,rnb|uk|82
Feid|m|latin|co|82
Peso Pluma|m|latin|mx|82
sombr|m|pop,rock|us|82
Freddie Mercury|m|rock|uk|80|Freddie
Christina Aguilera|f|pop,rnb|us|80
David Bowie|m|rock,pop|uk|80|Bowie
Elvis Presley|m|rock,pop|us|80|Elvis
Lewis Capaldi|m|pop|uk|80
Frank Ocean|m|rnb|us|80
Usher|m|rnb,pop|us|80
Chris Stapleton|m|country|us|80
J Balvin|m|latin|co|80
Rauw Alejandro|m|latin|pr|80
Kali Uchis|f|rnb,latin|us|80
Rosé|f|pop|kr|80|Rose
Jennie|f|pop|kr|80|Jennie Kim
Jungkook|m|pop|kr|80|Jung Kook
Charlie Puth|m|pop|us|79
Khalid|m|rnb,pop|us|78
Daniel Caesar|m|rnb|ca|78
Brent Faiyaz|m|rnb|us|78
Kehlani|f|rnb|us|78
Zara Larsson|f|pop|se|78
Raye|f|rnb,pop|uk|78
Jelly Roll|m|country,rock|us|78
Daddy Yankee|m|latin|pr|78
Maluma|m|latin|co|78
Rosalía|f|latin,pop|es|78|Rosalia
Myke Towers|m|latin|pr|78
Lisa|f|pop|th|78|Lalisa
Justin Timberlake|m|pop,rnb|us|78
Dolly Parton|f|country|us|78|Dolly
Noah Kahan|m|pop|us|78
Camila Cabello|f|pop,latin|us|77
Avril Lavigne|f|pop,rock|ca|76
Kane Brown|m|country|us|76
Luke Bryan|m|country|us|76
Jason Aldean|m|country|us|76
Johnny Cash|m|country|us|76
Shaboozey|m|country|us|76
Cody Johnson|m|country|us|76
Bailey Zimmerman|m|country|us|76
Kelly Clarkson|f|pop|us|76
James Arthur|m|pop|uk|76
George Michael|m|pop|uk|76
Prince|m|pop,rnb,rock|us|76
Phil Collins|m|pop,rock|uk|76
Michael Bublé|m|pop|ca|76|Michael Buble
John Legend|m|rnb,pop|us|76
Jhené Aiko|f|rnb|us|76|Jhene Aiko
Summer Walker|f|rnb|us|76
Alicia Keys|f|rnb,pop|us|76
Stevie Wonder|m|rnb,pop|us|76
John Lennon|m|rock,pop|uk|76
Paul McCartney|m|rock,pop|uk|76|Macca
Ozuna|m|latin|pr|76
Becky G|f|latin,pop|us|76
The Kid LAROI|m|pop|au|76|Kid Laroi
Jimin|m|pop|kr|76
Mitski|f|rock,pop|us|76
Djo|m|pop,rock|us|76
Myles Smith|m|pop|uk|76
Laufey|f|pop|is|76
Clairo|f|pop|us|76
PinkPantheress|f|pop|uk|76
Jennifer Lopez|f|pop,latin|us|76|J.Lo;JLo
Enrique Iglesias|m|pop,latin|es|74
Lainey Wilson|f|country|us|74
Ella Langley|f|country|us|74
Shania Twain|f|country,pop|ca|74|Shania
Demi Lovato|x|pop|us|74
Halsey|f|pop|us|74
Lorde|f|pop|nz|74
Kylie Minogue|f|pop|au|74|Kylie
Conan Gray|m|pop|us|74
Zayn|m|pop,rnb|uk|74|Zayn Malik
Jason Derulo|m|pop,rnb|us|74
Amy Winehouse|f|rnb,pop|uk|74
Billy Joel|m|rock,pop|us|74
Bruce Springsteen|m|rock|us|74|Springsteen;The Boss
George Strait|m|country|us|74
Blake Shelton|m|country|us|74
Thomas Rhett|m|country|us|74
Riley Green|m|country|us|74
Giveon|m|rnb|us|74
Miguel|m|rnb|us|74
Tems|f|rnb|ng|74
Anitta|f|latin,pop|br|74
Romeo Santos|m|latin|us|74
Young Miko|f|latin|pr|74
Meghan Trainor|f|pop|us|73
Bebe Rexha|f|pop|us|72
Melanie Martinez|f|pop|us|72
Ne-Yo|m|rnb,pop|us|72
Kenny Chesney|m|country|us|72
Tim McGraw|m|country|us|72
Alan Jackson|m|country|us|72
Lionel Richie|m|pop,rnb|us|72
Tina Turner|f|rock,rnb,pop|us|72
Aaliyah|f|rnb|us|72
Marvin Gaye|m|rnb|us|72
Ozzy Osbourne|m|rock|uk|72|Ozzy
Kurt Cobain|m|rock|us|72
Jon Bon Jovi|m|rock|us|72|Bon Jovi
Tyler Childers|m|country|us|72
Lola Young|f|pop|uk|72
Megan Moroney|f|country|us|72
Carrie Underwood|f|country|us|72
Tinashe|f|rnb,pop|us|72
Bryson Tiller|m|rnb|us|72
PartyNextDoor|m|rnb|ca|72
Reneé Rapp|f|pop|us|72|Renee Rapp
Tyla|f|pop,rnb|za|72
Beabadoobee|f|pop,rock|uk|72
Tom Odell|m|pop|uk|72
Niall Horan|m|pop|ie|72
Nicky Jam|m|latin|us|72
Sebastián Yatra|m|latin|co|72|Sebastian Yatra
Manuel Turizo|m|latin|co|72
Ava Max|f|pop|us|70
Anne-Marie|f|pop|uk|70
Troye Sivan|m|pop|au|70
Ricky Martin|m|pop,latin|pr|70
Marc Anthony|m|latin|us|70
Cher|f|pop|us|70
Janet Jackson|f|pop,rnb|us|70
Robbie Williams|m|pop|uk|70
Willie Nelson|m|country|us|70
Kacey Musgraves|f|country|us|70
Keith Urban|m|country|au|70
Sam Hunt|m|country|us|70
Jordan Davis|m|country|us|70
Mick Jagger|m|rock|uk|70
Rod Stewart|m|rock,pop|uk|70
Bob Dylan|m|rock|us|70|Dylan
Chester Bennington|m|rock|us|70
Lauryn Hill|f|rnb|us|70
Aretha Franklin|f|rnb|us|70|Aretha
Frank Sinatra|m|pop|us|70|Sinatra
Steve Lacy|m|rnb|us|70
Ruth B.|f|pop|ca|70|Ruth B
Willow|f|pop,rock|us|70|Willow Smith
Lizzo|f|pop,rnb|us|70
Aurora|f|pop|no|70
Christian Nodal|m|latin|mx|70
Stephen Sanchez|m|pop|us|70
Kesha|f|pop|us|68|Ke$ha
Carly Rae Jepsen|f|pop|ca|68
Gwen Stefani|f|pop,rock|us|68
Kelsea Ballerini|f|country|us|68
Stevie Nicks|f|rock|us|68
Kate Bush|f|pop,rock|uk|68
Bryan Adams|m|rock,pop|ca|68
George Ezra|m|pop|uk|68
Eric Church|m|country|us|68
Hardy|m|country|us|68
Nate Smith|m|country|us|68
Cameron Whitcomb|m|country|ca|68
Vance Joy|m|pop|au|68
Dean Lewis|m|pop|au|68
Tones and I|f|pop|au|68
Bill Withers|m|rnb|us|68
Phoebe Bridgers|f|rock|us|68
Dasha|f|country|us|68
Ella Mai|f|rnb|uk|66
Jorja Smith|f|rnb|uk|66
Luis Fonsi|m|latin|pr|66
Prince Royce|m|latin|us|68
Luis Miguel|m|latin|mx|68
Tini|f|latin|ar|68
Mary J. Blige|f|rnb|us|68|Mary J Blige
Calum Scott|m|pop|uk|66
Kenny Rogers|m|country|us|66
John Denver|m|country,pop|us|66
Toby Keith|m|country|us|66
Dierks Bentley|m|country|us|66
Cole Swindell|m|country|us|66
Warren Zeiders|m|country|us|66
Miranda Lambert|f|country|us|66
Maren Morris|f|country,pop|us|66
Reba McEntire|f|country|us|66|Reba
Alanis Morissette|f|rock,pop|ca|66|Alanis
Sam Fender|m|rock|uk|66
Liam Gallagher|m|rock|uk|66
Alex Turner|m|rock|uk|66
Dave Grohl|m|rock|us|66
Bono|m|rock|ie|66
Sting|m|rock,pop|uk|66
Eric Clapton|m|rock|uk|66
Jimi Hendrix|m|rock|us|66
Tom Petty|m|rock|us|66
Nina Simone|f|rnb|us|66
Erykah Badu|f|rnb|us|65
Victoria Monét|f|rnb|us|66|Victoria Monet
Leon Bridges|m|rnb|us|66
6lack|m|rnb|us|65
Jeremih|m|rnb|us|66
Alec Benjamin|m|pop|us|66
Lauv|m|pop|us|66
Mark Ambor|m|pop|us|66
Matt Hansen|m|pop|us|66
Lil Nas X|m|pop|us|66
Stromae|m|pop|be|66
Tove Lo|f|pop|se|66
Girl in Red|f|pop|no|66
Jessie J|f|pop|uk|65
Rita Ora|f|pop|uk|66
Nick Jonas|m|pop|us|65
Louis Tomlinson|m|pop|uk|65
Cyndi Lauper|f|pop|us|65
Ciara|f|rnb,pop|us|65
Trey Songz|m|rnb|us|64
Rag'n'Bone Man|m|pop|uk|64
Yungblud|m|rock|uk|64
Adam Levine|m|pop,rock|us|64
Lenny Kravitz|m|rock|us|64
Neil Young|m|rock|ca|64
Chris Martin|m|rock,pop|uk|64
Steven Tyler|m|rock|us|64
Darius Rucker|m|country,rock|us|64
Brad Paisley|m|country|us|64
Russell Dickerson|m|country|us|64
Chris Young|m|country|us|64
Gabby Barrett|f|country|us|64
Al Green|m|rnb|us|64
Otis Redding|m|rnb|us|64
Ray Charles|m|rnb|us|64
Vicente Fernández|m|latin|mx|64|Vicente Fernandez
Natti Natasha|f|latin|do|64
Sheryl Crow|f|rock,pop|us|62
Joan Jett|f|rock|us|62
Janis Joplin|f|rock|us|62
Etta James|f|rnb|us|62
Toni Braxton|f|rnb|us|62
Brandy|f|rnb|us|62
Ashanti|f|rnb|us|62
Muni Long|f|rnb|us|62
Ari Lennox|f|rnb|us|62
Lucky Daye|m|rnb|us|62
Sam Cooke|m|rnb|us|62
Barry White|m|rnb|us|62
Fergie|f|pop|us|62
Hailee Steinfeld|f|pop|us|62
Olivia Newton-John|f|pop,country|au|62|ONJ
Faith Hill|f|country|us|62
Brandi Carlile|f|country,rock|us|62
Jess Glynne|f|pop|uk|62
Birdy|f|pop|uk|62
Ella Henderson|f|pop|uk|62
Dido|f|pop|uk|58
Enya|f|pop|ie|62
Nelly Furtado|f|pop|ca|62
Alessia Cara|f|pop|ca|62
Noah Cyrus|f|pop|us|62
Natasha Bedingfield|f|pop|uk|62
Norah Jones|f|pop|us|62
Ella Fitzgerald|f|pop|us|62
Rex Orange County|m|pop|uk|62
Rick Astley|m|pop|uk|62
Neil Diamond|m|pop,rock|us|62
Leonard Cohen|m|rock|ca|62
Jim Morrison|m|rock|us|62
Eddie Vedder|m|rock|us|62
Robert Plant|m|rock|uk|62
Juanes|m|latin|co|62
Carlos Vives|m|latin|co|62
Selena Quintanilla|f|latin|us|62
Thalía|f|latin,pop|mx|62|Thalia
Juan Gabriel|m|latin|mx|62
Alejandro Sanz|m|latin|es|62
Danna|f|latin|mx|62|Danna Paola
Jake Owen|m|country|us|62
Lee Brice|m|country|us|62
Walker Hayes|m|country|us|62
Colter Wall|m|country|ca|62
Cat Stevens|m|pop|uk|62|Yusuf
Billy Idol|m|rock|uk|60
Bonnie Tyler|f|rock,pop|uk|60
Pat Benatar|f|rock|us|60
Hayley Williams|f|rock|us|60
Florence Welch|f|rock,pop|uk|60|Florence
Becky Hill|f|pop|uk|60
Maisie Peters|f|pop|uk|60
Carly Pearce|f|country|us|60
LeAnn Rimes|f|country,pop|us|60
Patsy Cline|f|country|us|60
Chaka Khan|f|rnb|us|60
D'Angelo|m|rnb|us|60
Ginuwine|m|rnb|us|60
Josh Turner|m|country|us|60
Oliver Anthony|m|country|us|60
Joe Jonas|m|pop|us|60
Adam Lambert|m|pop,rock|us|60
Liam Payne|m|pop|uk|60
Tom Jones|m|pop|uk|60
Dean Martin|m|pop|us|60
Nat King Cole|m|pop,rnb|us|60
Waylon Jennings|m|country|us|60
Meat Loaf|m|rock|us|60
Morrissey|m|rock|uk|60
Robert Smith|m|rock|uk|60
Thom Yorke|m|rock|uk|60
Brendon Urie|m|rock,pop|us|60
Noel Gallagher|m|rock|uk|60
Jeremy Zucker|m|pop|us|60
Mon Laferte|f|latin|cl|56
Merle Haggard|m|country|us|58
Billy Ray Cyrus|m|country|us|58
Randy Travis|m|country|us|58
Trace Adkins|m|country|us|58
Chase Rice|m|country|us|58
Loretta Lynn|f|country|us|58
Linda Ronstadt|f|rock,country|us|58
Joni Mitchell|f|pop,rock|ca|58
Grimes|f|pop|ca|58
Jessie Reyez|f|rnb|ca|58
Leona Lewis|f|pop|uk|58
Lily Allen|f|pop|uk|58
Annie Lennox|f|pop|uk|58
Sophie Ellis-Bextor|f|pop|uk|58
Robyn|f|pop|se|58
Björk|f|pop|is|58|Bjork
Snoh Aalegra|f|rnb|se|58
Monica|f|rnb|us|58
Seal|m|pop,rnb|uk|58
Olly Murs|m|pop|uk|58
Josh Groban|m|pop|us|58
Van Morrison|m|rock|uk|58
Chris Cornell|m|rock|us|58
Brandon Flowers|m|rock|us|58
Billie Joe Armstrong|m|rock|us|58
Dan Reynolds|m|rock,pop|us|58
Bon Scott|m|rock|au|58
Natalia Lafourcade|f|latin|mx|58
Gloria Estefan|f|latin,pop|us|58
Nathy Peluso|f|latin|ar|58
Mario|m|rnb|us|56
Omarion|m|rnb|us|56
Maxwell|m|rnb|us|56
Ashley McBryde|f|country|us|56
Martina McBride|f|country|us|56
Sierra Ferrell|f|country|us|56
Hank Williams|m|country|us|56
Glen Campbell|m|country|us|56
Travis Tritt|m|country|us|56
Vince Gill|m|country|us|56
Celia Cruz|f|latin|cu|56
Julio Iglesias|m|latin,pop|es|56
Pablo Alborán|m|latin|es|56|Pablo Alboran
Bing Crosby|m|pop|us|56
Tony Bennett|m|pop|us|56
Carole King|f|pop|us|56
Diana Ross|f|rnb,pop|us|66
Emeli Sandé|f|pop,rnb|uk|56|Emeli Sande
Sinéad O'Connor|f|pop,rock|ie|56|Sinead O'Connor
Amy Lee|f|rock|us|56
Gotye|m|pop|au|56
Guy Sebastian|m|pop|au|56
Ruel|m|pop|au|56
Kevin Parker|m|rock|au|56
Benee|f|pop|nz|56
Sigrid|f|pop|no|56
Craig David|m|rnb,pop|uk|56
Chuck Berry|m|rock|us|56
Lou Reed|m|rock|us|56
Iggy Pop|m|rock|us|56
Mark Knopfler|m|rock|uk|56
Peter Gabriel|m|rock|uk|56
James Hetfield|m|rock|us|56
Jack White|m|rock|us|56
Damon Albarn|m|rock|uk|56
Anthony Kiedis|m|rock|us|56
Joe Cocker|m|rock|uk|56
Brian Johnson|m|rock|uk|56
Sturgill Simpson|m|country|us|60
Jason Isbell|m|country|us|60
Gladys Knight|f|rnb|us|55
Patti LaBelle|f|rnb|us|55
Anita Baker|f|rnb|us|55
Mahalia|f|rnb|uk|52
Paloma Faith|f|pop|uk|52
Joss Stone|f|rnb|uk|52
Freya Ridings|f|pop|uk|52
Holly Humberstone|f|pop|uk|52
Griff|f|pop|uk|52
Lykke Li|f|pop|se|52
Jessie Ware|f|pop|uk|52
Sarah McLachlan|f|pop|ca|52
Delta Goodrem|f|pop|au|52
Tammy Wynette|f|country|us|52
Trisha Yearwood|f|country|us|52
Lee Ann Womack|f|country|us|52
Sara Evans|f|country|us|52
Gretchen Wilson|f|country|us|52
Debbie Harry|f|rock|us|52
Dolores O'Riordan|f|rock|ie|52
Paula Abdul|f|pop|us|50
Brian McKnight|m|rnb|us|52
Babyface|m|rnb|us|52
Tank|m|rnb|us|52
Kenny Loggins|m|pop,rock|us|52
Roger Daltrey|m|rock|uk|52
Gerard Way|m|rock|us|52
Chad Kroeger|m|rock|ca|52
Rob Thomas|m|rock,pop|us|52
Darren Hayes|m|pop|au|50
John Farnham|m|pop,rock|au|52|Farnsie
Mika|m|pop|uk|50
Cliff Richard|m|pop|uk|50
Barry Manilow|m|pop|us|50
Buddy Holly|m|rock|us|50
Lemmy|m|rock|uk|50|Lemmy Kilmister
Matt Bellamy|m|rock|uk|50
Corey Taylor|m|rock|us|50
Caleb Followill|m|rock|us|50
Jimmy Barnes|m|rock|au|50|Barnesy
Michael Hutchence|m|rock|au|50
Morgan Evans|m|country|au|50
Duffy|f|pop|uk|50
Dodie|f|pop|uk|50
Astrid S|f|pop|no|50
Natalie Imbruglia|f|pop|au|50
Amy Shark|f|pop|au|50
Anne Murray|f|country,pop|ca|50
Charlotte Cardin|f|pop|ca|50
Lauren Alaina|f|country|us|50
Patti Smith|f|rock|us|50
Lucy Dacus|f|rock|us|50
Little Richard|m|rock|us|52
Shirley Bassey|f|pop|uk|48
Chrissie Hynde|f|rock|us|48
Karen O|f|rock|us|48
Margo Price|f|country|us|48
Hailey Whitters|f|country|us|48
Julian Casablancas|m|rock|us|48
Serj Tankian|m|rock|us|48
Bruce Dickinson|m|rock|uk|48
Rick Springfield|m|rock|au|48
Gordon Lightfoot|m|country,rock|ca|48
Charley Pride|m|country|us|48
G Flip|x|pop,rock|au|48
Melissa Etheridge|f|rock|us|46
Courtney Love|f|rock|us|46
Grace Slick|f|rock|us|46
Ann Wilson|f|rock|us|46
Julien Baker|f|rock|us|46
Feist|f|pop|ca|46
Kasey Chambers|f|country|au|46
Courtney Barnett|f|rock|au|46
Jessica Mauboy|f|pop,rnb|au|46
Jo Dee Messina|f|country|us|46
Danielle Bradbery|f|country|us|46
Tanya Tucker|f|country|us|46
PJ Harvey|f|rock|uk|46
Cody Simpson|m|pop|au|46
Paul Kelly|m|rock|au|46
Patrick Stump|m|rock|us|46
Layne Staley|m|rock|us|46
Ronnie James Dio|m|rock|us|46|Dio
Richard Ashcroft|m|rock|uk|46
Missy Higgins|f|pop|au|44
Tina Arena|f|pop|au|44
Wynonna Judd|f|country|us|44|Wynonna
Deana Carter|f|country|us|44
Mickey Guyton|f|country|us|44
Shirley Manson|f|rock|uk|44
Siouxsie Sioux|f|rock|uk|44
Daryl Braithwaite|m|rock|au|44
Joe Strummer|m|rock|uk|44
Johnny Rotten|m|rock|uk|44|John Lydon
Paul Weller|m|rock|uk|44
Scott Weiland|m|rock|us|44
Dannii Minogue|f|pop|au|42
Suzi Quatro|f|rock|us|42
Taylor Momsen|f|rock|us|42
Terri Clark|f|country|us|42
Crystal Gayle|f|country|us|42
Jennifer Nettles|f|country|us|42
June Carter Cash|f|country|us|42
k.d. lang|f|pop,country|ca|42|kd lang
Cheryl|f|pop|uk|42|Cheryl Cole
Conrad Sewell|m|pop|au|42
Scott Stapp|m|rock|us|42
Gavin Rossdale|m|rock|uk|42
Ian Curtis|m|rock|uk|42
Slim Dusty|m|country|au|40
Daniel Johns|m|rock|au|40
Jarvis Cocker|m|rock|uk|40
Chrissy Amphlett|f|rock|au|40
Mallrat|f|pop|au|40
Lenka|f|pop|au|40
Kimbra|f|pop|nz|40
Amy Taylor|f|rock|au|40
Lee Kernaghan|m|country|au|38
Lzzy Hale|f|rock|us|38
Liz Phair|f|rock|us|38
Lita Ford|f|rock|us|38
Thelma Plum|f|pop|au|38
Vanessa Amorosi|f|pop|au|36
Kate Miller-Heidke|f|pop|au|36
Gabriella Cilmi|f|pop|au|36
Shannon Noll|m|rock,pop|au|36
Dami Im|f|pop|au|34
Ricki-Lee|f|pop|au|34|Ricki-Lee Coulter
Ian Moss|m|rock|au|32
Marcia Hines|f|pop,rnb|au|32
Brody Dalle|f|rock|au|30
Anthony Callea|m|pop|au|30
Gurrumul|m|pop|au|30|Geoffrey Gurrumul Yunupingu
Christine Anu|f|pop|au|28
Kate Ceberano|f|pop|au|28
Archie Roach|m||au|28
Wendy Matthews|f|pop|au|26
`;
