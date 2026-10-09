import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { DashboardPage } from './pages/DashboardPage'
import { SubjectsPage } from './pages/SubjectsPage'
import { SubjectOverviewPage } from './pages/SubjectOverviewPage'
import { AddQuestionPage } from './pages/AddQuestionPage'
import { SearchPage } from './pages/SearchPage'
import { SourceLibraryPage } from './pages/SourceLibraryPage'
import { AISettingsPage } from './pages/AISettingsPage'
import { SettingsPage } from './pages/SettingsPage'
import { useApp } from './contexts/AppContext'

function App() {
  const { state } = useApp();

  if (state.isLoading) {
    return (
      <div className="flex items-center justify-center" style={{ height: '100vh', background: 'var(--bg-base)' }}>
        <div className="text-center">
          <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 20, margin: '0 auto 16px', boxShadow: 'var(--shadow-glow)' }}>S7</div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/subjects/:subjectId" element={<SubjectOverviewPage />} />
        <Route path="/subjects/:subjectId/add-question" element={<AddQuestionPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/sources" element={<SourceLibraryPage />} />
        <Route path="/ai-settings" element={<AISettingsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Layout>
  )
}

export default App
