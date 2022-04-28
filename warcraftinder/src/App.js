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
    <div>
    </div>
  );
}

export default App;
