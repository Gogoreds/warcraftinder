import React from 'react';
import Header from './Header';
import Person from './Person';
import Lonely from './Lonely';
import data from './data.json';
import './App.css';

function App() {
  const [people, setPeople] = useState(data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const activeUser = 0;

  switch (action) {
    case 'ADD_TO_LIKED_USERS':
      break;
    case 'ADD_TO_DISLIKED_USERS':
      break;
    case 'ADD_TO_SUPER_LIKED_USERS':
      break;
    default:
      return people;
  }

  return (
    <div className='app'>
      <Header />

      {people[1] ? (
        <Person
           key={person[1].id}
           person={people[1]}
           modifySuperficialChoices={modifySuperficialChoices}
           likedUsers={likedUsers}
        />
      ) : (

        <Lonely 
          activeUserImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={superLikedUsers}
        />
      )}
    </div>
  );
}

export default App;
