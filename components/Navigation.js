import { StackNavigator } from 'react-navigation';
import DecksListView from './DecksListView';
import NewDeckView from './NewDeckView';
import IndividualDeckView from './IndividualDeckView';
import QuizView from './QuizView';
import NewQuestionView from './NewQuestionView';

const Navigation = StackNavigator({
  Home: { screen: DecksListView },
  NewDeck: { screen: NewDeckView },
  Deck: {
    path: 'deck/:deck',
    screen: IndividualDeckView
  },
  Quiz: {
    path: 'quiz/:deck',
    screen: QuizView
  },
  NewQuestion: {
    path: 'new/:deck',
    screen: NewQuestionView
  }
  }, 
);

export default Navigation;
