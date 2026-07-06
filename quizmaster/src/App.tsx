import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProfileProvider } from './context/ProfileContext'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { CategoriesPage } from './pages/CategoriesPage'
import { QuizPage } from './pages/QuizPage'
import { ResultPage } from './pages/ResultPage'
import { ProfilePage } from './pages/ProfilePage'

function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-b from-violet-50 to-cream">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/quiz/:category/:difficulty" element={<QuizPage />} />
              <Route path="/resultat" element={<ResultPage />} />
              <Route path="/profil" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ProfileProvider>
  )
}

export default App
