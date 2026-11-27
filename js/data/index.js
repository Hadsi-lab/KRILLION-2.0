/* Builds lookups once all artist data files have loaded. */
window.SS = window.SS || {};
SS.ARTISTS_BY_ID = Object.fromEntries(SS.ARTISTS.map((a) => [a.id, a]));
