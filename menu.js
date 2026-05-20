function loadGame(game) {
    const container = document.getElementById("game-container");

    if (game === "blackjack") {
        fetch("blackjack.js")
            .then(res => res.text())
            .then(code => {
                container.innerHTML = `
                    <h2>Blackjack</h2>
                    <div id="blackjack-game"></div>
                    <button onclick="location.reload()">⬅ Back to Menu</button>
                `;
                eval(code);
                startBlackjack();
            });
    }

    if (game === "poker") {
        container.innerHTML = `
            <h2>Poker is coming soon ♠</h2>
            <button onclick="location.reload()">⬅ Back</button>
        `;
    }
}
