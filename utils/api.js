import { AsyncStorage } from 'react-native';

export const getDecks = () => {
  // AsyncStorage.clear();
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(formatDecks);
};

export const addDeck = (deck) => (
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
);

export const addCard = (deck, card) => (
  AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
    let currentDeck = JSON.parse(result)[deck];
    let questions = currentDeck.questions;
    questions[questions.length] = card;
    currentDeck.questions = questions;
    AsyncStorage.mergeItem(
      DECKS_STORAGE_KEY,
      JSON.stringify({[deck]: currentDeck})
    );
  })
);
