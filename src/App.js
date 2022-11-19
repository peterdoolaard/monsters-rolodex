import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import '@fontsource/bigelow-rules';

const App = () => {
  const [ monsters, setMonsters ] = useState([]);
  const [ searchField, setSearchField ] = useState('');
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users));
  }, []);

  useEffect(() => {
    setFilteredMonsters(monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)))
  },[monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={ onSearchChange }
        className="monsters-search-box"
        placeholder="Search monsters"
      />
      <CardList monsters={ filteredMonsters }/>
    </div>
  );
};

export default App;
