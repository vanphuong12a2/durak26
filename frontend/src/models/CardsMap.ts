export type CardData = string;
export const hiddenCard: CardData = '';

export enum CardPosition {
  TO_DEAL = 'TO_DEAL',
  TRUMP = 'TRUMP',
  TABLE = 'TABLE'
}

export class CardsMap {
  [key: string]: CardData[]
}

const getSafe = (cards: CardsMap, key: CardPosition): CardData[] => {
  const cardData = cards[key];
  return cardData ? cardData : [];
};

export const getTrumpCard = (cards: CardsMap): CardData | undefined => {
  const trumpCardAsList: CardData[] = getSafe(cards, CardPosition.TRUMP);
  return trumpCardAsList.length > 0 ? trumpCardAsList[0] : undefined;
};

export const getTableCards = (cards: CardsMap): CardData[] => {
  return getSafe(cards, CardPosition.TABLE);
};

export const getCardsToDeal = (cards: CardsMap): CardData[] => {
  return getSafe(cards, CardPosition.TO_DEAL);
};
