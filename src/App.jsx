import { useState } from "react";
import { entries, groups, fixtures, knockout, ENTRY_FEE, PRIZES } from "./data";
import Sweepstakes from "./components/Sweepstakes";
import Groups from "./components/Groups";
import Fixtures from "./components/Fixtures";
import Bracket from "./components/Bracket";
import Prize from "./components/Prize";

const NAV = [
  { id: "sweep",    label: "Sweepstakes", icon: "🏆" },
  { id: "groups",   label: "Groups",      icon: "📊" },
  { id: "fixtures", label: "Fixtures",    icon: "📅" },
  { id: "bracket",  label: "Bracket",     icon: "🗂" },
  { id: "prize",    label: "Prize Pot",   icon: "💶" },
];

export default function App() {
  const [tab, setTab] = useState("sweep");
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-ball">⚽</span>
            <div>
              <div className="logo-title">World Cup 2026</div>
              <div className="logo-sub">Office Sweepstakes</div>
            </div>
          </div>
          <nav className="nav">
            {NAV.map(n => (
              <button
                key={n.id}
                className={`nav-btn${tab === n.id ? " active" : ""}`}
                onClick={() => setTab(n.id)}
              >
                <span className="nav-icon">{n.icon}</span>
                <span className="nav-label">{n.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>
      <main className="main">
        {tab === "sweep"    && <Sweepstakes entries={entries} teamStatus={{}} groups={groups} />}
        {tab === "groups"   && <Groups groups={groups} fixtures={fixtures} />}
        {tab === "fixtures" && <Fixtures fixtures={fixtures} />}
        {tab === "bracket"  && <Bracket knockout={knockout} />}
        {tab === "prize"    && <Prize entries={entries} entryFee={ENTRY_FEE} prizes={PRIZES} teamStatus={{}} groups={groups} />}
      </main>
      <footer className="footer">
        FIFA World Cup 2026 · USA / Canada / Mexico · 11 Jun – 19 Jul
      </footer>
    </div>
  );
}
