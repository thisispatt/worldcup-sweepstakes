function getFlagForTeam(teamName, groups) {
  for (const g of Object.values(groups)) {
    const t = g.teams.find(t => t.name === teamName);
    if (t) return t.flag;
  }
  return "🏳";
}

export default function Prize({ entries, entryFee, prizes, teamStatus, groups }) {
  const total = entries.length * entryFee;
  const first  = Math.round(total * prizes.first);
  const second = Math.round(total * prizes.second);
  const third  = Math.round(total * prizes.third);

  const champion  = entries.find(e => (teamStatus[e.team] || "active") === "champion");
  const runnerUp  = entries.find(e => (teamStatus[e.team] || "active") === "runner-up");
  const thirdPl   = entries.find(e => (teamStatus[e.team] || "active") === "third");

  const totalPaid = entries.filter(e => e.name !== "TBD").length * entryFee;
  const paidCount = entries.filter(e => e.name !== "TBD").length;

  return (
    <div className="section">
      <div className="section-header">
        <h1 className="section-title">Prize Pot</h1>
        <p className="section-sub">€{entryFee} per entry · {entries.length} teams total</p>
      </div>

      <div className="prize-pot-hero">
        <div className="pot-total">€{total}</div>
        <div className="pot-label">Total Prize Pot</div>
        <div className="pot-paid">
          {paidCount < entries.length
            ? `${paidCount} of ${entries.length} entries confirmed · €${totalPaid} collected so far`
            : "All entries confirmed!"}
        </div>
      </div>

      <div className="prize-breakdown">
        {[
          { place: "🥇 1st Place", pct: "60%", amount: first, winner: champion, color: "#b8860b", bg: "#fff8e1" },
          { place: "🥈 2nd Place", pct: "25%", amount: second, winner: runnerUp, color: "#607d8b", bg: "#eceff1" },
          { place: "🥉 3rd Place", pct: "15%", amount: third,  winner: thirdPl,  color: "#8d6e63", bg: "#efebe9" },
        ].map(({ place, pct, amount, winner, color, bg }) => (
          <div key={place} className="prize-card" style={{ borderTop: `4px solid ${color}` }}>
            <div className="prize-place">{place}</div>
            <div className="prize-amount" style={{ color }}>€{amount}</div>
            <div className="prize-pct">{pct} of pot</div>
            {winner ? (
              <div className="prize-winner">
                <span className="winner-flag">{getFlagForTeam(winner.team, groups)}</span>
                <div>
                  <div className="winner-name">{winner.name}</div>
                  <div className="winner-team">{winner.team}</div>
                </div>
              </div>
            ) : (
              <div className="prize-tbd">Winner TBD</div>
            )}
          </div>
        ))}
      </div>

      <div className="prize-info-box">
        <h3 className="info-box-title">How the draw works</h3>
        <ul className="info-list">
          <li>Each of the 48 teams is randomly assigned to one participant</li>
          <li>The participant whose team wins the World Cup takes home <strong>60%</strong> (€{first})</li>
          <li>The participant whose team finishes as runner-up takes <strong>25%</strong> (€{second})</li>
          <li>The participant whose team wins 3rd place takes <strong>15%</strong> (€{third})</li>
          <li>All other participants receive nothing — may the best team win! ⚽</li>
        </ul>
      </div>
    </div>
  );
}

