/*
 * Shared playlists whose artists and songs have been added to the question pool.
 * Source exports (title, artists, popularity) live in data/playlists/.
 * Run `node tools/check-playlist.js data/playlists/<file>.csv` after adding one
 * to confirm every playlist song is accepted for every included artist.
 */
window.SS = window.SS || {};

SS.PLAYLISTS = [
  {
    id: "elmoooo",
    name: "Elmoooo",
    file: "data/playlists/elmoooo.csv",
    // Artists from this playlist that are question artists (new or merged).
    artistIds: [
      "benson-boone", "alex-warren", "sia", "sabrina-carpenter", "dua-lipa", "shawn-mendes",
      "billie-eilish", "ed-sheeran", "tate-mcrae", "gracie-abrams", "olivia-rodrigo", "bruno-mars",
      "chappell-roan", "onerepublic", "taylor-swift", "miley-cyrus", "zara-larsson", "imagine-dragons",
      "michael-jackson", "doja-cat", "david-guetta", "calvin-harris", "coldplay", "justin-bieber",
      "katy-perry", "nsync", "noah-kahan", "charlie-puth", "selena-gomez", "post-malone",
      "the-chainsmokers", "drake", "tame-impala", "twenty-one-pilots", "harry-styles", "rihanna",
      "the-script", "adele", "abba", "shakira", "lady-gaga", "maroon-5", "glass-animals",
      "ariana-grande", "eminem"
    ]
  }
];
