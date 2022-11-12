import './App.css';
import {BrowserRouter, Route} from "react-router-dom";   
import Homepage from './Pages/Homepage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Homepage} exact/>
        <Route path="/chats" component= {ChatPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
