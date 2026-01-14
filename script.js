// Initialize scores
let homeScore = 0;
let awayScore = 0;

// Function to add score to a team
function addScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        updateScore('home');
    } else if (team === 'away') {
        awayScore += points;
        updateScore('away');
    }
}

// Function to update the score display
function updateScore(team) {
    if (team === 'home') {
        document.getElementById('home-score').textContent = homeScore;
    } else if (team === 'away') {
        document.getElementById('away-score').textContent = awayScore;
    }
}

// Function to reset all scores
function resetScores() {
    homeScore = 0;
    awayScore = 0;
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('away-score').textContent = awayScore;
}
