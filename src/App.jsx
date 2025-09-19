import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import ProtectedRoutes from './routes/ProtectedRoutes.jsx'
import Notes from './pages/Notes.jsx'
import CreateNote from './pages/CreateNote.jsx'
import ShowNote from './pages/ShowNote.jsx'
import UpdateNote from './pages/UpdateNote.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path='notes' element={<Notes/>}/>
        <Route path='notes/new' element={<CreateNote/>}/>
        <Route path='notes/:id' element={<ShowNote/>}/>
        <Route path='notes/:id/update' element={<UpdateNote/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default App
