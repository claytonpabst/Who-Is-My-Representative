import { useContext } from 'react';

import InfoModal from './InfoModal';
import { listContext } from "./../Store/ListStore";
import './List.css';

function List() {
  const { listState, updateList } = useContext(listContext);

  const peopleToDisplay = listState[listState.catagory];

  function openInfoModal(person) {
    updateList({type:"OPEN_INFO_MODAL", value:person})
  }

  function displayListOfPeople() {
    return peopleToDisplay.map((person) => {
      return(
        <div className="row" style={{cursor:"pointer"}} onClick={() => openInfoModal(person)}>
          <p>{person.name}</p>
          <p>{person.party[0]}</p>
        </div>
      )
    })
  }

  return (
    <>
      {listState.infoModalOpen && <InfoModal/>}
      <div className="list">
        <div className="list-title-wrapper" >
          <h3>List</h3>
          <h3>/</h3>
          <h3 style={{color:"#06A6ED"}}>{`${listState.catagory}`}</h3>
        </div>
        <div className="table-wrapper">
          <div className="table-header row">
            <p>Name</p>
            <p>Party</p>
          </div>
          {displayListOfPeople()}
        </div>
      </div>
    </>
  );
}

export default List;