# Snuffleupagus Songs

Name a song by the given artist. Popular songs score little; deep cuts score big.

Open `index.html` in any browser (mobile or desktop). No build step or backend.

## How a round works
- 7 questions per round, each "Name a song by <artist>" (artist picked at random).
- 25 seconds per question. Enter submits.
- Unrecognised answers don't count. The player can keep trying until time runs out.
- After a scored answer the background sinks and darkens in proportion to the points, then resets to light blue for the next question.
- The results screen lists every answer, its tier and points, plus the total out of 700.
- Unlimited rounds per day. Progress, an in-progress round and stats are saved in the browser (`localStorage`).

## Rarity tiers (worst → best)
| Tier | Points |
|---|---|
| Elmo: Awful | 10 |
| Monster: Meh | 15 |
| Noodle: Normal | 30 |
| Grouchy: Great | 60 |
| Abby: Awesome | 85 |
| Snuffy: Spectacular | 100 |

Tiers in `js/data/artists.js` are hand-estimated from relative Spotify popularity, and every artist spans all six tiers. They can be replaced with real Spotify data without touching other code.

## Playlists
Artists and songs from shared Spotify playlists are added to the question pool.

| Playlist | Added |
|---|---|
| Elmoooo | 35 new artists, songs merged into 10 existing ones |

To add a playlist: export it as CSV with exportify.net, add it to the data files, then run:

```
node tools/check-playlist.js data/playlists/<name>.csv
```

This confirms every playlist song is accepted and lists artists that are not question artists. Only `Track Name`, `Artist Name(s)` and `Popularity` are kept from the export.

## Structure
| File | Responsibility |
|---|---|
| `js/data/artists.js` | Built-in artists: songs by tier, aliases |
| `js/data/artists-playlists.js` | Artists added from playlists |
| `js/data/playlists.js` | Playlist registry |
| `js/validation.js` | Is this a song by the artist? (case, punctuation, aliases, typos) |
| `js/scoring.js` | Tier → points, sink depth |
| `js/engine.js` | Round state machine (no DOM) |
| `js/storage.js` | Player stats and saved round |
| `js/ui.js` | Screens, timer, animations |

## Known limits
- Only songs in the database are accepted. A real song that isn't listed is rejected.
