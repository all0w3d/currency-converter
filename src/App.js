import './App.scss'
import Header from './components/Header'
import Main from './components/Main'
import Today from './components/Today'

function App() {
  return (
    
    <div>
      <Header/>
      <Today name="1" />
      <Main/>
    </div>

  );
}

export default App;
