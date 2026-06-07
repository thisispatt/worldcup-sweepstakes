import { useState, useMemo } from "react";
import { getFlag } from "../flag";

const MONTH = { Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12 };

function sortKey(f) {
  const [day, mon] = f.date.split(" ");
  const [h, m] = f.time.split(":").map(Number);
  return (MONTH[mon] * 31 * 1440) + (parseInt(day) * 1440) + (h * 60) + m;
}

function getTeamFlag(teamName, groups) {
  for (const g of Object.values(groups)) {
    const t = g.teams.find(t => t.name === teamName);
    if (t) return t.flag;
  }
  return null;
}

export default function Fixtures({ fixtures, groups, entries }) {
  const [activeGroup, setActiveGroup] = useState("all");
  const [search, setSearch] = useState("");
  const groupList = ["all","A","B","C","D","E","F","G","H","I","J","K","L"];

  const entryMap = useMemo(() => {
    const map = {};
    entries.forEach(e => { map[e.team] = e.name !== "TBD" ? e.name : null; });
    return map;
  }, [entries]);

  const filtered = useMemo(() => {
    let list = activeGroup === "all"
      ? fixtures
      : fixtures.filter(f => f.group === activeGroup);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(f =>
        f.home.toLowerCase().includes(q) ||
        f.away.toLowerCase().includes(q) ||
        (entryMap[f.home] && entryMap[f.home].toLowerCase().includes(q)) ||
        (entryMap[f.away] && entryMap[f.away].toLowerCase().includes(q))
      );
    }

    return [...list].sort((a, b) => sortKey(a) - sortKey(b));
  }, [fixtures, activeGroup, search, entryMap]);

  return (
    <div className="section">
      <div className="section-header">
        <h1 className="section-title">Group stage fixtures</h1>
        <p className="section-sub">72 matches · 11 Jun – 28 Jun 2026 · All times Irish local (IST)</p>
      </div>

      <div className="sweep-controls" style={{ marginBottom: "1rem" }}>
        <input
          className="search-input"
          type="text"
          placeholder="Search by team or player"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="group-tabs">
        {groupList.map(g => (
          <button
            key={g}
            className={`group-tab${activeGroup === g ? " group-tab-active" : ""}`}
            onClick={() => setActiveGroup(g)}
          >
            {g === "all" ? "All" : `Grp ${g}`}
          </button>
        ))}
      </div>

      <div className="fixtures-list">
        {filtered.length === 0 && (
          <div className="empty">No fixtures match your search.</div>
        )}
        {filtered.map(f => {
          const homeFlag = getTeamFlag(f.home, groups);
          const awayFlag = getTeamFlag(f.away, groups);
          const homeName = entryMap[f.home];
          const awayName = entryMap[f.away];
          return (
            <div key={f.id} className={`fixture-row${f.played ? " fixture-played" : ""}`}>
              <div className="fixture-meta">
                <span className="fixture-group">Group {f.group}</span>
                <span className="fixture-date">{f.date}</span>
                <span className="fixture-time">{f.time}</span>
              </div>
              <div className="fixture-match">
                <div className="fixture-team fixture-home">
                  <div className="fixture-team-info fixture-team-info-home">
                    <span className={f.played && f.score1 > f.score2 ? "winner" : ""}>{f.home}</span>
                    {homeName && <span className="fixture-colleague">{homeName}</span>}
                  </div>
                  {homeFlag && <img src={getFlag(homeFlag)} alt={f.home} className="fixture-flag" />}
                </div>
                <div className="fixture-score">
                  {f.played
                    ? <span className="score-result">{f.score1} – {f.score2}</span>
                    : <span className="score-vs">vs</span>
                  }
                </div>
                <div className="fixture-team fixture-away">
                  {awayFlag && <img src={getFlag(awayFlag)} alt={f.away} className="fixture-flag" />}
                  <div className="fixture-team-info fixture-team-info-away">
                    <span className={f.played && f.score2 > f.score1 ? "winner" : ""}>{f.away}</span>
                    {awayName && <span className="fixture-colleague">{awayName}</span>}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
