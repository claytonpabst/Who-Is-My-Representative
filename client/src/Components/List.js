import { useContext } from 'react';

import { listContext } from "./../Store/ListStore";
import './List.css';

function List() {
  const { listState } = useContext(listContext);

  console.log(listState);

  const peopleToDisplay = listState[listState.catagory];

  return (
    <div className="list">
      <div className="list-title-wrapper" >
        <h3>List</h3>
        <h3>/</h3>
        <h3 style={{color:"#06A6ED"}}>{`${listState.catagory}`}</h3>
      </div>
      <p>{JSON.stringify(peopleToDisplay)}</p>
    </div>
  );
}

export default List;