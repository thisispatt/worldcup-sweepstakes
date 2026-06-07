import { useMemo } from "react";
import { getFlag } from "../flag";

function calcStandings(teams, fixtures) {
  const stats = {};
  teams.forEach(t => {
    stats[t.name] = { ...t, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0 };
  });
  fixtures
    .filter(f => f.played && f.score1 !== null && f.score2 !== null)
    .forEach(f => {
      const h = stats[f.home];
      const a = stats[f.away];
      if (!h || !a) return;
      h.played++; a.played++;
      h.gf += f.score1; h.ga += f.score2;
      a.gf += f.score2; a.ga += f.score1;
      if (f.score1 > f.score2)      { h.won++;   a.lost++;  }
      else if (f.score1 < f.score2) { a.won++;   h.lost++;  }
      else                          { h.drawn++; a.drawn++; }
    });
  return Object.values(stats).sort((a, b) => {
    const pts = x => x.won * 3 + x.drawn;
    const gd  = x => x.gf - x.ga;
    return pts(b) - pts(a) || gd(b) - gd(a) || b.gf - a.gf || a.name.localeCompare(b.name);
  });
}

const STATUS_DOT = {
  active:      "#16a34a",
  eliminated:  "#ccc",
  champion:    "#FF4B44",
  "runner-up": "#90a4ae",
  third:       "#a1887f",
};

export default function Groups({ groups, fixtures, entries }) {
  const entryMap = useMemo(() => {
    const map = {};
    entries.forEach(e => { map[e.team] = e.name; });
    return map;
  }, [entries]);

  const computed = useMemo(() =>
    Object.entries(groups).map(([letter, g]) => ({
      letter,
      standings: calcStandings(g.teams, fixtures.filter(f => f.group === letter)),
    })),
  [groups, fixtures]);

  return (
    <div className="section">
      <div className="section-header">
        <h1 className="section-title">Group stage</h1>
        <p className="section-sub">12 groups · top 2 + 8 best 3rd place teams advance to Round of 32</p>
      </div>
      <div className="groups-grid">
        {computed.map(({ letter, standings }) => (
          <div key={letter} className="group-card">
            <div className="group-header">
              <span className="group-letter">Group {letter}</span>
            </div>
            <table className="group-table">
              <thead>
                <tr>
                  <th className="th-team">Team</th>
                  <th title="Played">P</th>
                  <th title="Won">W</th>
                  <th title="Drawn">D</th>
                  <th title="Lost">L</th>
                  <th title="Goals for">GF</th>
                  <th title="Goals against">GA</th>
                  <th title="Goal difference">GD</th>
                  <th title="Points">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((team, idx) => {
                  const pts = team.won * 3 + team.drawn;
                  const gd  = team.gf - team.ga;
                  const isQ = idx < 2;
                  const colleague = entryMap[team.name];
                  return (
                    <tr key={team.name} className={isQ ? "row-qualify" : ""}>
                      <td className="td-team">
                        <span
                          className="status-dot"
                          style={{ background: STATUS_DOT[team.status] || STATUS_DOT.active }}
                          title={team.status}
                        />
                        <span className="team-flag">
                          <img src={getFlag(team.flag)} alt={team.name} />
                        </span>
                        <div>
                          <div className="team-name-sm">{team.shortName || team.name}</div>
                          {colleague && colleague !== "TBD" && (
                            <div className="team-colleague">{colleague}</div>
                          )}
                        </div>
                      </td>
                      <td>{team.played}</td>
                      <td>{team.won}</td>
                      <td>{team.drawn}</td>
                      <td>{team.lost}</td>
                      <td>{team.gf}</td>
                      <td>{team.ga}</td>
                      <td className={gd > 0 ? "pos" : gd < 0 ? "neg" : ""}>{gd > 0 ? "+" : ""}{gd}</td>
                      <td className="pts">{pts}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="qualify-note">
              <span className="qualify-bar" /> Top 2 auto-qualify
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
