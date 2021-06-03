import {useState} from 'react';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Search from './Components/Search';
import Sort from './Components/Sort';
import data from './Components/data';
import './App.scss';

const App = () => {

  const [sites, setSites] = useState(data);  

  const sortHandler = (result) => {       
    let sortedData;
    for(let each of result) {
      if(each.selected) {        
        if(each.value === "ascending") {
          sortedData = [...data].sort((a, b) => (a.upvotes > b.upvotes) ? 1 : -1);
        } else {
          sortedData = [...data].sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1);
        }
      } 
    } 
    setSites(sortedData);
  }

  const searchHandler = (value) => {        
    const searchedSite = data.filter(each => {
      return each.title === value
    })     
    searchedSite.length ? setSites(searchedSite) : setSites(data);
  }

  return (
    <div className="App">
      <Header/>
      <Search searchHandler={searchHandler}/>
      <Sort sortHandler={sortHandler}/>
      <Cards data={sites}/>
    </div>
  );
}

export default App;
