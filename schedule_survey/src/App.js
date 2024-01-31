import { useHistory } from 'react-router-dom';
import './App.css';
import { mdExpandMore } from 'react-icons/md';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  <BrowserRouter>
    <Routes>
      <Route exact path='/' component={<homePage/>} />
      <Route path="/email" component={<EmailPage/>} />
      <Route path="/schedule" component={<SchedulePage/>} />
    </Routes>
  </BrowserRouter>
}

function homePage() {
  return (
    <div className="App">
      <body className='App-body'>
        <h2 className="fade-enter">Welcome to the schedule survey!</h2>
        <p className="fade-enter" style={{animationDelay:'1s'}}>To begin, we'll need your email.</p>
        <div className="arrow-container" onClick={() => {}}>
          <div className="arrow-down">
            <mdExpandMore />
          </div>
        </div>
      </body>
    </div>
  );
}