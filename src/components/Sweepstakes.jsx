import { useMemo, useState } from "react";
import { getFlag } from "../flag";

const STATUS_CONFIG = {
  active:      { bg: null },
  eliminated:  { bg: null },
  champion:    { bg: "#fffbeb" },
  "runner-up": { bg: "#f1f5f9" },
  third:       { bg: "#fff7ed" },
};

function getTeamData(teamName, groups) {
  for (const [key, g] of Object.entries(groups)) {
    const t = g.teams.find(t => t.name === teamName);
    if (t) return { status: t.status, flag: t.flag, group: key };
  }
  return { status: "active", flag: null, group: "" };
}

export default function Sweepstakes({ entries, teamStatus, groups }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const enriched = useMemo(() =>
    entries.map(e => {
      const data = getTeamData(e.team, groups);
      return {
        ...e,
        flagCode: data.flag,
        group: data.group,
        status: teamStatus[e.team] || data.status,
      };
    }), [entries, groups, teamStatus]);

  const filtered = enriched.filter(e => {
    const matchSearch = search === "" ||
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.team.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || e.status === filter;
    return matchSearch && matchFilter;
  });

  const counts = useMemo(() => ({
    active:    enriched.filter(e => e.status === "active").length,
    eliminated:enriched.filter(e => e.status === "eliminated").length,
  }), [enriched]);

  return (
    <div className="section">
      <div className="section-header">
        <h1 className="section-title">Sweepstakes entries</h1>
        <p className="section-sub">48 teams · 48 participants · €{entries.length * 5} prize pot</p>
      </div>
      <div className="sweep-controls">
        <input
          className="search-input"
          type="text"
          placeholder="Search by team or player"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className="filter-pills">
          {[
            { id: "all",        label: `All (${enriched.length})` },
            { id: "active",     label: `Active (${counts.active})` },
            { id: "eliminated", label: `Eliminated (${counts.eliminated})` },
          ].map(f => (
            <button
              key={f.id}
              className={`pill${filter === f.id ? " pill-active" : ""}`}
              onClick={() => setFilter(f.id)}
            >{f.label}</button>
          ))}
        </div>
      </div>
      <div className="entry-grid">
        {filtered.map((e, i) => {
          const sc = STATUS_CONFIG[e.status] || STATUS_CONFIG.active;
          const isOut = e.status === "eliminated";
          return (
                <div key={i} className={`entry-card${isOut ? " entry-out" : ""}`} style={sc.bg ? { background: sc.bg } : {}}>
              <div className="entry-flag">
                <img src={getFlag(e.flagCode)} alt={e.team} />
              </div>
              <div className="entry-info">
                <div className="entry-team">{e.team}</div>
                <div className="entry-name">{e.name === "TBD" ? <em className="tbd">— not assigned —</em> : e.name}</div>
              </div>
              <div className="entry-right">
                <span className="entry-group">Grp {e.group}</span>
                {e.status === "active" && <span className="status-pulse" />}
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="empty">No entries match your search.</div>
        )}
      </div>
    </div>
  );
}
