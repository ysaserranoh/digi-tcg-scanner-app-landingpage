import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Download from './pages/Download'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import AccountDeletion from './pages/AccountDeletion'
import DataDeletion from './pages/DataDeletion'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Navbar />
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/account-deletion" element={<AccountDeletion />} />
          <Route path="/data-deletion" element={<DataDeletion />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App