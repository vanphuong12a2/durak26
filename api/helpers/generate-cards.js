function shuffle(cards) {
  let counter = cards.length;

  while (counter !== 0) {
    const randomIndex = Math.floor(Math.random() * counter);
    counter -= 1;

    const temporaryValue = cards[counter];
    cards[counter] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return cards;
}

module.exports = {

  friendlyName: 'Generate card',

  sync: true,

  fn: function () {
    const cards = [];
    const suits = ['H', 'D', 'C', 'S'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    suits.forEach((suit) => {
      values.forEach((value) => {
        cards.push({value: value, suit: suit});
      });
    });

    return shuffle(cards);
  }
};

