import {useState} from 'react';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Search from './Components/Search';
import data from './Components/data';
import './App.scss';

const App = () => {

  const [sites, setSites] = useState(data);  

  const searchHandler = (value) => {    
    const searchedSite = data.filter(each => {
      return each.title.toLowerCase() === value
    }) 
    searchedSite.length ? setSites(searchedSite) : setSites(data);
  }

  return (
    <div className="App">
      <Header/>
      <Search searchHandler={searchHandler}/>
      <Cards data={sites}/>
    </div>
  );
}

export default App;
