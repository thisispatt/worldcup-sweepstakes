import { useState } from "react";

export default function Fixtures({ fixtures }) {
  const [activeGroup, setActiveGroup] = useState("all");
  const groups = ["all", "A","B","C","D","E","F","G","H","I","J","K","L"];

  const filtered = activeGroup === "all"
    ? fixtures
    : fixtures.filter(f => f.group === activeGroup);

  return (
    <div className="section">
      <div className="section-header">
        <h1 className="section-title">Group Stage Fixtures</h1>
        <p className="section-sub">72 matches · 11 Jun – 27 Jun 2026</p>
      </div>

      <div className="group-tabs">
        {groups.map(g => (
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
        {filtered.map(f => (
          <div key={f.id} className={`fixture-row${f.played ? " fixture-played" : ""}`}>
            <div className="fixture-meta">
              <span className="fixture-group">Group {f.group}</span>
              <span className="fixture-date">{f.date}</span>
            </div>
            <div className="fixture-match">
              <span className={`fixture-team fixture-home${f.played && f.score1 > f.score2 ? " winner" : ""}`}>
                {f.home}
              </span>
              <div className="fixture-score">
                {f.played
                  ? <span className="score-result">{f.score1} – {f.score2}</span>
                  : <span className="score-vs">vs</span>
                }
              </div>
              <span className={`fixture-team fixture-away${f.played && f.score2 > f.score1 ? " winner" : ""}`}>
                {f.away}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
