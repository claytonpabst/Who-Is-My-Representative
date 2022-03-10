import { useContext } from 'react';

import { listContext } from "./../Store/ListStore";
import './InfoModal.css';

function InfoModal() {
  const { listState, updateList } = useContext(listContext);

  function closeInfoModal() {
    updateList({type:"CLOSE_INFO_MODAL"})
  }

  return (
    <div className="info-modal-wrapper">
      <div className="info-modal">
        <div className="x-out" onClick={closeInfoModal}>x</div>
        {listState.selectedPerson.name && <p>{listState.selectedPerson.name}</p>}
        {listState.selectedPerson.district && <p>{listState.selectedPerson.district}</p>}
        {listState.selectedPerson.link && <p>{listState.selectedPerson.link}</p>}
        {listState.selectedPerson.office && <p>{listState.selectedPerson.office}</p>}
        {listState.selectedPerson.party && <p>{listState.selectedPerson.party}</p>}
        {listState.selectedPerson.phone && <p>{listState.selectedPerson.phone}</p>}
        {listState.selectedPerson.state && <p>{listState.selectedPerson.state}</p>}
      </div>
    </div>
  );
}

export default InfoModal;