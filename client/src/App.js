import Header from './Components/Header';
import List from './Components/List';
import Search from './Components/Search';

import logo from './logo.svg';
import './App.css';

function App() {

  // async function search() {
  //   const data = await axios.get('/senators/UT');
  //   console.log(data)
  // } 

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
