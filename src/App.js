import './App.css';
import Data from './components/Data';
import Error_ from './components/Error';
import Loading from './components/Loading';

function App() {
  const url =  process.env.REACT_APP_URL;

  return (
    <div className="App">
      <Data url={url}/>
      <Error_ url={url}/>
      <Loading url={url}/>
    </div>
  );
}

export default App;
