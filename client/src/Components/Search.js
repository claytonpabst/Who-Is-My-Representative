import { useContext } from 'react';
import axios from 'axios';

import { listContext } from "./../Store/ListStore";
import './Search.css';


function Search() {
  const { listState, updateList } = useContext(listContext);
  
  async function getSenators() {
    const res = await axios.get(`/senators/${listState.selectedState}`);
    console.log(res)
    updateList({ type: "SET_SENATORS", value: res.data.results });
  } 

  return (
    <div className="search">
      <h1>Who's My Representative</h1>
      <button onClick={() => getSenators()}>Search</button>
    </div>
  );
}

export default Search;

