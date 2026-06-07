// ============================================================
//  SWEEPSTAKES DATA — edit this file to update the app
// ============================================================
//
//  HOW TO UPDATE AFTER A MATCH:
//  1. Find the fixture below (search by team names or id)
//  2. Change score1 and score2 from null to the goals scored
//  3. Change played: false  to  played: true
//  That's it — standings calculate automatically!
//
//  EXAMPLE:
//  Before: { id: 49, home: "France", away: "Senegal", score1: null, score2: null, played: false },
//  After:  { id: 49, home: "France", away: "Senegal", score1: 2,    score2: 0,    played: true  },
//
// ============================================================

export const ENTRY_FEE = 5;
export const PRIZES = { first: 0.60, second: 0.25, third: 0.15 };

// ----------------------------------------------------------------
// PARTICIPANTS — replace "TBD" with colleague names as they enter
// ----------------------------------------------------------------
export const entries = [
  { name: "TBD", team: "Mexico" },
  { name: "TBD", team: "South Africa" },
  { name: "TBD", team: "South Korea" },
  { name: "TBD", team: "Czechia" },
  { name: "TBD", team: "Canada" },
  { name: "TBD", team: "Bosnia & Herzegovina" },
  { name: "TBD", team: "Qatar" },
  { name: "TBD", team: "Switzerland" },
  { name: "TBD", team: "Brazil" },
  { name: "TBD", team: "Morocco" },
  { name: "TBD", team: "Haiti" },
  { name: "TBD", team: "Scotland" },
  { name: "TBD", team: "United States" },
  { name: "TBD", team: "Paraguay" },
  { name: "TBD", team: "Australia" },
  { name: "TBD", team: "Türkiye" },
  { name: "TBD", team: "Germany" },
  { name: "TBD", team: "Curaçao" },
  { name: "TBD", team: "Ivory Coast" },
  { name: "TBD", team: "Ecuador" },
  { name: "TBD", team: "Netherlands" },
  { name: "TBD", team: "Japan" },
  { name: "TBD", team: "Sweden" },
  { name: "TBD", team: "Tunisia" },
  { name: "TBD", team: "Belgium" },
  { name: "TBD", team: "Egypt" },
  { name: "TBD", team: "Iran" },
  { name: "TBD", team: "New Zealand" },
  { name: "TBD", team: "Spain" },
  { name: "TBD", team: "Cape Verde" },
  { name: "TBD", team: "Saudi Arabia" },
  { name: "TBD", team: "Uruguay" },
  { name: "TBD", team: "France" },
  { name: "TBD", team: "Senegal" },
  { name: "TBD", team: "Iraq" },
  { name: "TBD", team: "Norway" },
  { name: "TBD", team: "Argentina" },
  { name: "TBD", team: "Algeria" },
  { name: "TBD", team: "Austria" },
  { name: "TBD", team: "Jordan" },
  { name: "TBD", team: "Portugal" },
  { name: "TBD", team: "DR Congo" },
  { name: "TBD", team: "Uzbekistan" },
  { name: "TBD", team: "Colombia" },
  { name: "TBD", team: "England" },
  { name: "TBD", team: "Croatia" },
  { name: "TBD", team: "Ghana" },
  { name: "TBD", team: "Panama" },
];

// ----------------------------------------------------------------
// GROUPS — team names, flags and status only.
// W / D / L / GF / GA are calculated automatically from fixtures.
//
// STATUS values:
//   "active"     — still in the tournament
//   "eliminated" — knocked out
//   "champion"   — World Cup winner
//   "runner-up"  — finalist, lost
//   "third"      — third place play-off winner
// ----------------------------------------------------------------
export const groups = {
  A: { teams: [
    { name: "Mexico",       flag: "🇲🇽", status: "active" },
    { name: "South Africa", flag: "🇿🇦", status: "active" },
    { name: "South Korea",  flag: "🇰🇷", status: "active" },
    { name: "Czechia",      flag: "🇨🇿", status: "active" },
  ]},
  B: { teams: [
    { name: "Canada",               flag: "🇨🇦", status: "active" },
    { name: "Bosnia & Herzegovina", flag: "🇧🇦", status: "active" },
    { name: "Qatar",                flag: "🇶🇦", status: "active" },
    { name: "Switzerland",          flag: "🇨🇭", status: "active" },
  ]},
  C: { teams: [
    { name: "Brazil",   flag: "🇧🇷", status: "active" },
    { name: "Morocco",  flag: "🇲🇦", status: "active" },
    { name: "Haiti",    flag: "🇭🇹", status: "active" },
    { name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", status: "active" },
  ]},
  D: { teams: [
    { name: "United States", flag: "🇺🇸", status: "active" },
    { name: "Paraguay",      flag: "🇵🇾", status: "active" },
    { name: "Australia",     flag: "🇦🇺", status: "active" },
    { name: "Türkiye",       flag: "🇹🇷", status: "active" },
  ]},
  E: { teams: [
    { name: "Germany",     flag: "🇩🇪", status: "active" },
    { name: "Curaçao",     flag: "🇨🇼", status: "active" },
    { name: "Ivory Coast", flag: "🇨🇮", status: "active" },
    { name: "Ecuador",     flag: "🇪🇨", status: "active" },
  ]},
  F: { teams: [
    { name: "Netherlands", flag: "🇳🇱", status: "active" },
    { name: "Japan",       flag: "🇯🇵", status: "active" },
    { name: "Sweden",      flag: "🇸🇪", status: "active" },
    { name: "Tunisia",     flag: "🇹🇳", status: "active" },
  ]},
  G: { teams: [
    { name: "Belgium",     flag: "🇧🇪", status: "active" },
    { name: "Egypt",       flag: "🇪🇬", status: "active" },
    { name: "Iran",        flag: "🇮🇷", status: "active" },
    { name: "New Zealand", flag: "🇳🇿", status: "active" },
  ]},
  H: { teams: [
    { name: "Spain",        flag: "🇪🇸", status: "active" },
    { name: "Cape Verde",   flag: "🇨🇻", status: "active" },
    { name: "Saudi Arabia", flag: "🇸🇦", status: "active" },
    { name: "Uruguay",      flag: "🇺🇾", status: "active" },
  ]},
  I: { teams: [
    { name: "France",  flag: "🇫🇷", status: "active" },
    { name: "Senegal", flag: "🇸🇳", status: "active" },
    { name: "Iraq",    flag: "🇮🇶", status: "active" },
    { name: "Norway",  flag: "🇳🇴", status: "active" },
  ]},
  J: { teams: [
    { name: "Argentina", flag: "🇦🇷", status: "active" },
    { name: "Algeria",   flag: "🇩🇿", status: "active" },
    { name: "Austria",   flag: "🇦🇹", status: "active" },
    { name: "Jordan",    flag: "🇯🇴", status: "active" },
  ]},
  K: { teams: [
    { name: "Portugal",   flag: "🇵🇹", status: "active" },
    { name: "DR Congo",   flag: "🇨🇩", status: "active" },
    { name: "Uzbekistan", flag: "🇺🇿", status: "active" },
    { name: "Colombia",   flag: "🇨🇴", status: "active" },
  ]},
  L: { teams: [
    { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", status: "active" },
    { name: "Croatia", flag: "🇭🇷", status: "active" },
    { name: "Ghana",   flag: "🇬🇭", status: "active" },
    { name: "Panama",  flag: "🇵🇦", status: "active" },
  ]},
};

// ----------------------------------------------------------------
// FIXTURES — the only thing you update during the group stage.
// Change score1, score2, and played when a match is finished.
// ----------------------------------------------------------------
export const fixtures = [
  // ── GROUP A ──────────────────────────────────────────────
  { id: 1,  group: "A", date: "11 Jun", home: "Mexico",       away: "South Africa",        score1: null, score2: null, played: false },
  { id: 2,  group: "A", date: "12 Jun", home: "South Korea",  away: "Czechia",             score1: null, score2: null, played: false },
  { id: 3,  group: "A", date: "15 Jun", home: "Mexico",       away: "Czechia",             score1: null, score2: null, played: false },
  { id: 4,  group: "A", date: "15 Jun", home: "South Africa", away: "South Korea",         score1: null, score2: null, played: false },
  { id: 5,  group: "A", date: "19 Jun", home: "Mexico",       away: "South Korea",         score1: null, score2: null, played: false },
  { id: 6,  group: "A", date: "19 Jun", home: "Czechia",      away: "South Africa",        score1: null, score2: null, played: false },
  // ── GROUP B ──────────────────────────────────────────────
  { id: 7,  group: "B", date: "12 Jun", home: "Canada",               away: "Bosnia & Herzegovina", score1: null, score2: null, played: false },
  { id: 8,  group: "B", date: "12 Jun", home: "Qatar",                away: "Switzerland",          score1: null, score2: null, played: false },
  { id: 9,  group: "B", date: "16 Jun", home: "Canada",               away: "Switzerland",          score1: null, score2: null, played: false },
  { id: 10, group: "B", date: "16 Jun", home: "Bosnia & Herzegovina", away: "Qatar",                score1: null, score2: null, played: false },
  { id: 11, group: "B", date: "20 Jun", home: "Canada",               away: "Qatar",                score1: null, score2: null, played: false },
  { id: 12, group: "B", date: "20 Jun", home: "Switzerland",          away: "Bosnia & Herzegovina", score1: null, score2: null, played: false },
  // ── GROUP C ──────────────────────────────────────────────
  { id: 13, group: "C", date: "12 Jun", home: "Brazil",   away: "Morocco",  score1: null, score2: null, played: false },
  { id: 14, group: "C", date: "12 Jun", home: "Haiti",    away: "Scotland", score1: null, score2: null, played: false },
  { id: 15, group: "C", date: "16 Jun", home: "Brazil",   away: "Scotland", score1: null, score2: null, played: false },
  { id: 16, group: "C", date: "16 Jun", home: "Morocco",  away: "Haiti",    score1: null, score2: null, played: false },
  { id: 17, group: "C", date: "20 Jun", home: "Brazil",   away: "Haiti",    score1: null, score2: null, played: false },
  { id: 18, group: "C", date: "20 Jun", home: "Scotland", away: "Morocco",  score1: null, score2: null, played: false },
  // ── GROUP D ──────────────────────────────────────────────
  { id: 19, group: "D", date: "12 Jun", home: "United States", away: "Paraguay",  score1: null, score2: null, played: false },
  { id: 20, group: "D", date: "13 Jun", home: "Australia",     away: "Türkiye",   score1: null, score2: null, played: false },
  { id: 21, group: "D", date: "17 Jun", home: "United States", away: "Türkiye",   score1: null, score2: null, played: false },
  { id: 22, group: "D", date: "17 Jun", home: "Paraguay",      away: "Australia", score1: null, score2: null, played: false },
  { id: 23, group: "D", date: "21 Jun", home: "United States", away: "Australia", score1: null, score2: null, played: false },
  { id: 24, group: "D", date: "21 Jun", home: "Türkiye",       away: "Paraguay",  score1: null, score2: null, played: false },
  // ── GROUP E ──────────────────────────────────────────────
  { id: 25, group: "E", date: "13 Jun", home: "Germany",     away: "Curaçao",     score1: null, score2: null, played: false },
  { id: 26, group: "E", date: "13 Jun", home: "Ivory Coast", away: "Ecuador",     score1: null, score2: null, played: false },
  { id: 27, group: "E", date: "17 Jun", home: "Germany",     away: "Ecuador",     score1: null, score2: null, played: false },
  { id: 28, group: "E", date: "17 Jun", home: "Curaçao",     away: "Ivory Coast", score1: null, score2: null, played: false },
  { id: 29, group: "E", date: "21 Jun", home: "Germany",     away: "Ivory Coast", score1: null, score2: null, played: false },
  { id: 30, group: "E", date: "21 Jun", home: "Ecuador",     away: "Curaçao",     score1: null, score2: null, played: false },
  // ── GROUP F ──────────────────────────────────────────────
  { id: 31, group: "F", date: "13 Jun", home: "Netherlands", away: "Japan",       score1: null, score2: null, played: false },
  { id: 32, group: "F", date: "13 Jun", home: "Sweden",      away: "Tunisia",     score1: null, score2: null, played: false },
  { id: 33, group: "F", date: "18 Jun", home: "Netherlands", away: "Tunisia",     score1: null, score2: null, played: false },
  { id: 34, group: "F", date: "18 Jun", home: "Japan",       away: "Sweden",      score1: null, score2: null, played: false },
  { id: 35, group: "F", date: "22 Jun", home: "Netherlands", away: "Sweden",      score1: null, score2: null, played: false },
  { id: 36, group: "F", date: "22 Jun", home: "Tunisia",     away: "Japan",       score1: null, score2: null, played: false },
  // ── GROUP G ──────────────────────────────────────────────
  { id: 37, group: "G", date: "14 Jun", home: "Belgium",     away: "Egypt",       score1: null, score2: null, played: false },
  { id: 38, group: "G", date: "14 Jun", home: "Iran",        away: "New Zealand", score1: null, score2: null, played: false },
  { id: 39, group: "G", date: "18 Jun", home: "Belgium",     away: "New Zealand", score1: null, score2: null, played: false },
  { id: 40, group: "G", date: "18 Jun", home: "Egypt",       away: "Iran",        score1: null, score2: null, played: false },
  { id: 41, group: "G", date: "22 Jun", home: "Belgium",     away: "Iran",        score1: null, score2: null, played: false },
  { id: 42, group: "G", date: "22 Jun", home: "New Zealand", away: "Egypt",       score1: null, score2: null, played: false },
  // ── GROUP H ──────────────────────────────────────────────
  { id: 43, group: "H", date: "14 Jun", home: "Spain",        away: "Cape Verde",   score1: null, score2: null, played: false },
  { id: 44, group: "H", date: "14 Jun", home: "Saudi Arabia", away: "Uruguay",      score1: null, score2: null, played: false },
  { id: 45, group: "H", date: "18 Jun", home: "Spain",        away: "Uruguay",      score1: null, score2: null, played: false },
  { id: 46, group: "H", date: "18 Jun", home: "Cape Verde",   away: "Saudi Arabia", score1: null, score2: null, played: false },
  { id: 47, group: "H", date: "22 Jun", home: "Spain",        away: "Saudi Arabia", score1: null, score2: null, played: false },
  { id: 48, group: "H", date: "22 Jun", home: "Uruguay",      away: "Cape Verde",   score1: null, score2: null, played: false },
  // ── GROUP I ──────────────────────────────────────────────
  { id: 49, group: "I", date: "14 Jun", home: "France",  away: "Senegal", score1: null, score2: null, played: false },
  { id: 50, group: "I", date: "14 Jun", home: "Iraq",    away: "Norway",  score1: null, score2: null, played: false },
  { id: 51, group: "I", date: "19 Jun", home: "France",  away: "Norway",  score1: null, score2: null, played: false },
  { id: 52, group: "I", date: "19 Jun", home: "Senegal", away: "Iraq",    score1: null, score2: null, played: false },
  { id: 53, group: "I", date: "23 Jun", home: "France",  away: "Iraq",    score1: null, score2: null, played: false },
  { id: 54, group: "I", date: "23 Jun", home: "Norway",  away: "Senegal", score1: null, score2: null, played: false },
  // ── GROUP J ──────────────────────────────────────────────
  { id: 55, group: "J", date: "15 Jun", home: "Argentina", away: "Algeria",  score1: null, score2: null, played: false },
  { id: 56, group: "J", date: "15 Jun", home: "Austria",   away: "Jordan",   score1: null, score2: null, played: false },
  { id: 57, group: "J", date: "19 Jun", home: "Argentina", away: "Jordan",   score1: null, score2: null, played: false },
  { id: 58, group: "J", date: "19 Jun", home: "Algeria",   away: "Austria",  score1: null, score2: null, played: false },
  { id: 59, group: "J", date: "23 Jun", home: "Argentina", away: "Austria",  score1: null, score2: null, played: false },
  { id: 60, group: "J", date: "23 Jun", home: "Jordan",    away: "Algeria",  score1: null, score2: null, played: false },
  // ── GROUP K ──────────────────────────────────────────────
  { id: 61, group: "K", date: "15 Jun", home: "Portugal",   away: "DR Congo",   score1: null, score2: null, played: false },
  { id: 62, group: "K", date: "15 Jun", home: "Uzbekistan", away: "Colombia",   score1: null, score2: null, played: false },
  { id: 63, group: "K", date: "20 Jun", home: "Portugal",   away: "Colombia",   score1: null, score2: null, played: false },
  { id: 64, group: "K", date: "20 Jun", home: "DR Congo",   away: "Uzbekistan", score1: null, score2: null, played: false },
  { id: 65, group: "K", date: "24 Jun", home: "Portugal",   away: "Uzbekistan", score1: null, score2: null, played: false },
  { id: 66, group: "K", date: "24 Jun", home: "Colombia",   away: "DR Congo",   score1: null, score2: null, played: false },
  // ── GROUP L ──────────────────────────────────────────────
  { id: 67, group: "L", date: "15 Jun", home: "England",  away: "Croatia", score1: null, score2: null, played: false },
  { id: 68, group: "L", date: "16 Jun", home: "Ghana",    away: "Panama",  score1: null, score2: null, played: false },
  { id: 69, group: "L", date: "20 Jun", home: "England",  away: "Panama",  score1: null, score2: null, played: false },
  { id: 70, group: "L", date: "20 Jun", home: "Croatia",  away: "Ghana",   score1: null, score2: null, played: false },
  { id: 71, group: "L", date: "24 Jun", home: "England",  away: "Ghana",   score1: null, score2: null, played: false },
  { id: 72, group: "L", date: "24 Jun", home: "Panama",   away: "Croatia", score1: null, score2: null, played: false },
];

// ----------------------------------------------------------------
// KNOCKOUT BRACKET — fill in as teams advance
// ----------------------------------------------------------------
export const knockout = {
  R32: [
    { id: "r32-1",  home: "", away: "", score1: null, score2: null, played: false, date: "28-29 Jun" },
    { id: "r32-2",  home: "", away: "", score1: null, score2: null, played: false, date: "28-29 Jun" },
    { id: "r32-3",  home: "", away: "", score1: null, score2: null, played: false, date: "28-29 Jun" },
    { id: "r32-4",  home: "", away: "", score1: null, score2: null, played: false, date: "28-29 Jun" },
    { id: "r32-5",  home: "", away: "", score1: null, score2: null, played: false, date: "29-30 Jun" },
    { id: "r32-6",  home: "", away: "", score1: null, score2: null, played: false, date: "29-30 Jun" },
    { id: "r32-7",  home: "", away: "", score1: null, score2: null, played: false, date: "29-30 Jun" },
    { id: "r32-8",  home: "", away: "", score1: null, score2: null, played: false, date: "29-30 Jun" },
    { id: "r32-9",  home: "", away: "", score1: null, score2: null, played: false, date: "30 Jun-1 Jul" },
    { id: "r32-10", home: "", away: "", score1: null, score2: null, played: false, date: "30 Jun-1 Jul" },
    { id: "r32-11", home: "", away: "", score1: null, score2: null, played: false, date: "30 Jun-1 Jul" },
    { id: "r32-12", home: "", away: "", score1: null, score2: null, played: false, date: "30 Jun-1 Jul" },
    { id: "r32-13", home: "", away: "", score1: null, score2: null, played: false, date: "1-2 Jul" },
    { id: "r32-14", home: "", away: "", score1: null, score2: null, played: false, date: "1-2 Jul" },
    { id: "r32-15", home: "", away: "", score1: null, score2: null, played: false, date: "1-2 Jul" },
    { id: "r32-16", home: "", away: "", score1: null, score2: null, played: false, date: "1-2 Jul" },
  ],
  R16: [
    { id: "r16-1", home: "", away: "", score1: null, score2: null, played: false, date: "4-5 Jul" },
    { id: "r16-2", home: "", away: "", score1: null, score2: null, played: false, date: "4-5 Jul" },
    { id: "r16-3", home: "", away: "", score1: null, score2: null, played: false, date: "5-6 Jul" },
    { id: "r16-4", home: "", away: "", score1: null, score2: null, played: false, date: "5-6 Jul" },
    { id: "r16-5", home: "", away: "", score1: null, score2: null, played: false, date: "6-7 Jul" },
    { id: "r16-6", home: "", away: "", score1: null, score2: null, played: false, date: "6-7 Jul" },
    { id: "r16-7", home: "", away: "", score1: null, score2: null, played: false, date: "7-8 Jul" },
    { id: "r16-8", home: "", away: "", score1: null, score2: null, played: false, date: "7-8 Jul" },
  ],
  QF: [
    { id: "qf-1", home: "", away: "", score1: null, score2: null, played: false, date: "9-10 Jul" },
    { id: "qf-2", home: "", away: "", score1: null, score2: null, played: false, date: "9-10 Jul" },
    { id: "qf-3", home: "", away: "", score1: null, score2: null, played: false, date: "10-11 Jul" },
    { id: "qf-4", home: "", away: "", score1: null, score2: null, played: false, date: "10-11 Jul" },
  ],
  SF: [
    { id: "sf-1", home: "", away: "", score1: null, score2: null, played: false, date: "14 Jul" },
    { id: "sf-2", home: "", away: "", score1: null, score2: null, played: false, date: "15 Jul" },
  ],
  Third: [
    { id: "3rd", home: "", away: "", score1: null, score2: null, played: false, date: "18 Jul" },
  ],
  Final: [
    { id: "final", home: "", away: "", score1: null, score2: null, played: false, date: "19 Jul" },
  ],
};
