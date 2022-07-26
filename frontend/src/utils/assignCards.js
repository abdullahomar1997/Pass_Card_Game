import shuffleArray from "./shuffleArray";

export default function assignCards(players, cards) {

    const cardIndexes = [];

    for (let i = 0; i < cards.length; ++i) {
        cardIndexes.push(i);
    }

    let shuffledCardIndexes = shuffleArray(cardIndexes);

    let n = cards.length - 1;

    while (n >= 0) {
        for (let j = 0; j < players.length; ++j) {
            if (n >= 0) {
                cards[shuffledCardIndexes[n]].player = players[j].id;
                n -= 1;
            }
        }
    }
    return cards;

}