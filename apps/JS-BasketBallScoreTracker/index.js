let homeScoreEl = document.getElementById('counter-display-home');
let guestScoreEl = document.getElementById('counter-display-guest');

window.incrementScore = function incrementScore(value, team) {
    const teamEl = team === 'home' ? homeScoreEl : guestScoreEl
    const currentTeam = Number(teamEl.textContent) || 0;
    teamEl.textContent = String(currentTeam + value);
}
