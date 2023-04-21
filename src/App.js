import './App.css';
import './assets/scss/styles.scss';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './views/HomePage';
import { ContactPage } from './views/ContactPage';
import { StatisticPage } from './views/StatisticPage';
import { AppHeader } from './views/AppHeader';
import { ContactEditPage } from './views/ContactEditPage';
import { ContactDetails } from './views/ContactDetails';
import { SignupPage } from './views/SignupPage';
import { SideNav } from './cmps/SideNav';
import { SideScreen } from './cmps/SideScreen';
import { useState } from 'react';
function App() {

  const [isScreen, setIsScreen] = useState(false)


  return (
    <Router>
      <section className="App main-layout">
        <SideScreen isScreen={isScreen} setIsScreen={setIsScreen}/>
        <AppHeader setIsScreen={setIsScreen}/>
        <section className='main-content'>
          <SideNav />
          <Routes>
            <Route path="/contacts/edit/:id?" element={<ContactEditPage />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/statistics" element={<StatisticPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>

        </section>
      </section>
    </Router>
  );
}

export default App;
