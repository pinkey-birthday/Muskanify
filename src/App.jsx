import { Routes, Route } from 'react-router-dom';
import PasswordPage from './pages/PasswordPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Quotes from './pages/Quotes';
import "./App.css"
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PasswordPage />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
      <Route path="/page4" element={<Page4 />} />
      <Route path="/quotes" element={<Quotes />} />
    </Routes>
  )
}

export default App