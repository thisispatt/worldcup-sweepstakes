import { getFlag } from "../flag";

const ROUNDS = [
  { key: "R32",   label: "Round of 32" },
  { key: "R16",   label: "Round of 16" },
  { key: "QF",    label: "Quarter-finals" },
  { key: "SF",    label: "Semi-finals" },
];

function getTeamFlag(teamName, groups) {
  if (!teamName) return null;
  for (const g of Object.values(groups)) {
    const t = g.teams.find(t => t.name === teamName);
    if (t) return t.flag;
  }
  return null;
}

function MatchCard({ match, groups, entryMap }) {
  const homeWin = match.played && match.score1 > match.score2;
  const awayWin = match.played && match.score2 > match.score1;
  const empty = !match.home && !match.away;
  const homeFlag = getTeamFlag(match.home, groups);
  const awayFlag = getTeamFlag(match.away, groups);
  const homeName = match.home ? entryMap[match.home] : null;
  const awayName = match.away ? entryMap[match.away] : null;

  return (
    <div className={`ko-match${match.played ? " ko-played" : ""}${empty ? " ko-empty" : ""}`}>
      <div className={`ko-team ko-home${homeWin ? " ko-winner" : ""}`}>
        {homeFlag && <img src={getFlag(homeFlag)} alt={match.home} className="ko-flag" />}
        <div className="ko-team-info">
          <span>{match.home || "TBD"}</span>
          {homeName && <span className="ko-colleague">{homeName}</span>}
        </div>
        {match.played && <span className="ko-score">{match.score1}</span>}
      </div>
      <div className={`ko-team ko-away${awayWin ? " ko-winner" : ""}`}>
        {awayFlag && <img src={getFlag(awayFlag)} alt={match.away} className="ko-flag" />}
        <div className="ko-team-info">
          <span>{match.away || "TBD"}</span>
          {awayName && <span className="ko-colleague">{awayName}</span>}
        </div>
        {match.played && <span className="ko-score">{match.score2}</span>}
      </div>
      <div className="ko-date">{match.date} · {match.time}</div>
    </div>
  );
}

function PrizeSidebar({ prizes, entryFee, entries }) {
  const total  = entries.length * entryFee;
  const first  = Math.round(total * prizes.first);
  const second = Math.round(total * prizes.second);
  const third  = Math.round(total * prizes.third);
  return (
    <div className="ko-prize-sidebar">
      <div className="ko-prize-card" style={{ borderTop: "3px solid #f59e0b" }}>
        <div className="ko-prize-amt">€{first}</div>
        <div className="ko-prize-lbl">1st place</div>
      </div>
      <div className="ko-prize-card" style={{ borderTop: "3px solid #94a3b8" }}>
        <div className="ko-prize-amt">€{second}</div>
        <div className="ko-prize-lbl">Runner-up</div>
      </div>
      <div className="ko-prize-card" style={{ borderTop: "3px solid #d97706" }}>
        <div className="ko-prize-amt">€{third}</div>
        <div className="ko-prize-lbl">3rd place</div>
      </div>
    </div>
  );
}

export default function Bracket({ knockout, groups, entries, entryFee, prizes }) {
  const entryMap = {};
  entries.forEach(e => { entryMap[e.team] = e.name !== "TBD" ? e.name : null; });

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
              {matches.map(m => (
                <MatchCard key={m.id} match={m} groups={groups} entryMap={entryMap} />
              ))}
            </div>
          </div>
        );
      })}

      <div className="ko-round">
  <div className="ko-final-row">
    <div>
      <div className="ko-round-label" style={{ marginBottom: "0.5rem" }}>3rd place · {knockout.Third?.[0]?.date}</div>
      {knockout.Third?.map(m => (
        <MatchCard key={m.id} match={m} groups={groups} entryMap={entryMap} />
      ))}
    </div>
    <div className="ko-prize-card" style={{ borderTop: "3px solid #d97706" }}>
      <div className="ko-prize-amt">€{Math.round(entries.length * entryFee * prizes.third)}</div>
      <div className="ko-prize-lbl">3rd place</div>
    </div>
  </div>

  <div className="ko-final-row" style={{ marginTop: "1.5rem" }}>
    <div>
      <div className="ko-round-label" style={{ marginBottom: "0.5rem" }}>Final · {knockout.Final?.[0]?.date}</div>
      {knockout.Final?.map(m => (
        <MatchCard key={m.id} match={m} groups={groups} entryMap={entryMap} />
      ))}
    </div>
    <div className="ko-prize-card" style={{ borderTop: "3px solid #f59e0b" }}>
      <div className="ko-prize-amt">€{Math.round(entries.length * entryFee * prizes.first)}</div>
      <div className="ko-prize-lbl">1st place</div>
    </div>
    <div className="ko-prize-card" style={{ borderTop: "3px solid #94a3b8" }}>
      <div className="ko-prize-amt">€{Math.round(entries.length * entryFee * prizes.second)}</div>
      <div className="ko-prize-lbl">Runner-up</div>
    </div>
  </div>
</div>
  );
}
