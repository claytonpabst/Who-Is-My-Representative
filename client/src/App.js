import Header from './Components/Header';
import List from './Components/List';
import Search from './Components/Search';

import './App.css';

function App() {
  return (
    <div className='App-Wrapper'>
      <div className="App">
        <Header/>
        <Search/>
        <List/>
      </div>
    </div>
  );
}

export default App;
