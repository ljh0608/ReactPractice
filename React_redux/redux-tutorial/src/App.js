import CounterContainer from './containers/CounterContainer';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <CounterContainer></CounterContainer>
      <hr />
      <Todo></Todo>
    </div>
  );
}

export default App;
