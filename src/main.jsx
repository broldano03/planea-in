import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Kanban from './components/kanban/Kanban.jsx'
import Template from './components/main/Template.jsx'
import { ItemsProvider } from './context/ItemsContext.jsx'
import Login from "./pages/Login.jsx";
import Eisenhower from './components/eisenhower/Eisenhower.jsx'
import UserProfile from './pages/UserProfile.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
            <ItemsProvider>
                <Routes>
                    <Route path="/" element={<Template/>}>
                        <Route index element={<App/>} />
                        <Route path="/perfil" element={<UserProfile/>} />
                        <Route path="/cuadro-de-mando" element={<App/>} />
                        <Route path="/tablero-kanban" element={<Kanban />} />
                        <Route path="/matriz-eisenhower" element={<Eisenhower />} />
                    </Route>
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </ItemsProvider>
    </BrowserRouter>
)
