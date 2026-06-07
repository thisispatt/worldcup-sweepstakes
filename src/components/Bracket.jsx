import { getFlag } from "../flag";

const ROUNDS = [
  { key: "R32",   label: "Round of 32" },
  { key: "R16",   label: "Round of 16" },
  { key: "QF",    label: "Quarter-finals" },
  { key: "SF",    label: "Semi-finals" },
  { key: "Third", label: "3rd Place" },
  { key: "Final", label: "Final" },
];

function getTeamFlag(teamName, groups) {
  if (!teamName) return null;
  for (const g of Object.values(groups)) {
    const t = g.teams.find(t => t.name === teamName);
    if (t) return t.flag;
  }
  return null;
}

function MatchCard({ match, groups }) {
  const homeWin = match.played && match.score1 > match.score2;
  const awayWin = match.played && match.score2 > match.score1;
  const empty = !match.home && !match.away;
  const homeFlag = getTeamFlag(match.home, groups);
  const awayFlag = getTeamFlag(match.away, groups);

  return (
    <div className={`ko-match${match.played ? " ko-played" : ""}${empty ? " ko-empty" : ""}`}>
      <div className={`ko-team ko-home${homeWin ? " ko-winner" : ""}`}>
        {homeFlag && <img src={getFlag(homeFlag)} alt={match.home} className="ko-flag" />}
        <span>{match.home || "TBD"}</span>
        {match.played && <span className="ko-score">{match.score1}</span>}
      </div>
      <div className={`ko-team ko-away${awayWin ? " ko-winner" : ""}`}>
        {awayFlag && <img src={getFlag(awayFlag)} alt={match.away} className="ko-flag" />}
        <span>{match.away || "TBD"}</span>
        {match.played && <span className="ko-score">{match.score2}</span>}
      </div>
      <div className="ko-date">{match.date} · {match.time}</div>
    </div>
  );
}

export default function Bracket({ knockout, groups }) {
  return (
    <div className="section">
      <div className="section-header">
        <h1 className="section-title">Knockout bracket</h1>
        <p className="section-sub">28 Jun – 19 Jul 2026 · USA / Canada / Mexico</p>
      </div>
      {ROUNDS.map(({ key, label }) => {
        const matches = knockout[key];
        if (!matches) return null;
        return (
          <div key={key} className="ko-round">
            <h2 className="ko-round-label">{label}</h2>
            <div className="ko-grid">
              {matches.map(m => <MatchCard key={m.id} match={m} groups={groups} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
