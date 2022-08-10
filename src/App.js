import './App.css';
import BookContainer from './Components/BookContainer';
import AddBook from './Components/AddBook';

function App() {
  return (
    <div className='App'>
      <h1>Our Book App</h1>
      <AddBook />
      <BookContainer />
    </div>
  );
}

export default App;
