const CardPosition = {
  TO_DEAL: 'TO_DEAL',
  TRUMP: 'TRUMP',
  HAND_TOP: 'HAND_TOP',
  HAND_BOTTOM: 'HAND_BOTTOM',
  HAND_RIGHT: 'HAND_RIGHT',
  HAND_LEFT: 'HAND_LEFT',
  TABLE: 'TABLE'
};

const UNKNOWN_VALUE = 'X';

const hiddenCard = {value: UNKNOWN_VALUE, suit: UNKNOWN_VALUE};

module.exports = {
  CardPosition,
  hiddenCard
};
