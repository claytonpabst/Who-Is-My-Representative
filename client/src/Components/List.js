import { useContext } from 'react';

import { listContext } from "./../Store/ListStore";
import './List.css';

function List() {
  const { listState, updateList } = useContext(listContext);

  return (
    <div className="list">
      <p>{JSON.stringify(listState.senators)}</p>
    </div>
  );
}

export default List;