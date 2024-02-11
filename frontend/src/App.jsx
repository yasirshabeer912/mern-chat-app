
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ChatPage from './pages/ChatPage'

function App() {

  return (
      <Router>
    <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/chats' element={<ChatPage/>}></Route>
        </Routes>
    </div>
      </Router>
  )
}

export default App
