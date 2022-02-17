import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Shop from './components/Shop'
import Footer from './components/Footer'
import store from './store'

import { createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const UserContext = createContext();

const App = () => {
    return (
        <>
            <BrowserRouter>
                <UserContext.Provider value={store}>
                    <NavBar/>
                    <Routes>
                        <Route path="*" element={<Home/>} />
                        <Route path="/shop" element={<Shop/>} />
                    </Routes>
                </UserContext.Provider>
            <Footer/>
            
            </BrowserRouter>
        </>
    )
}

export default App