function startBlackjack() {
    const root = document.getElementById("blackjack-game");

    let dealerCards = [];
    let playerCards = [];
    let gameOver = false;

    function getCard() {
        const cards = [2,3,4,5,6,7,8,9,10,10,10,10,11];
        return cards[Math.floor(Math.random() * cards.length)];
    }

    function sum(cards) {
        let total = cards.reduce((a,b)=>a+b,0);
        let aces = cards.filter(c=>c===11).length;

        while (total > 21 && aces > 0) {
            total -= 10;
            aces--;
        }
        return total;
    }

    function render() {
        root.innerHTML = `
            <p>Dealer: ${dealerCards.join(" ")} ( ${sum(dealerCards)} )</p>
            <p>You: ${playerCards.join(" ")} ( ${sum(playerCards)} )</p>

            <button onclick="hit()">Hit</button>
            <button onclick="stand()">Stand</button>

            <p id="msg"></p>
        `;
    }

    window.hit = function () {
        if (gameOver) return;
        playerCards.push(getCard());

        if (sum(playerCards) > 21) {
            gameOver = true;
            document.getElementById("msg").innerText = "You busted!";
        }
        render();
    }

    window.stand = function () {
        if (gameOver) return;

        while (sum(dealerCards) < 17) {
            dealerCards.push(getCard());
        }

        let p = sum(playerCards);
        let d = sum(dealerCards);

        if (d > 21 || p > d) {
            document.getElementById("msg").innerText = "You win!";
        } else if (p < d) {
            document.getElementById("msg").innerText = "Dealer wins!";
        } else {
            document.getElementById("msg").innerText = "Tie!";
        }

        gameOver = true;
        render();
    }

    function start() {
        dealerCards = [getCard(), getCard()];
        playerCards = [getCard(), getCard()];
        render();
    }

    start();
}
