import { createRoot } from 'react-dom/client'
import './index.css'
import { Routes,  BrowserRouter, Route } from 'react-router'
import MainLayout from './layout/MainLayout.tsx'
import Dashboard from './views/Dashboard.tsx'
import AuthorizedProjects from './views/AuthorizedProjects.tsx'
import UserManagement from './views/UserManagement.tsx'
import ComplianceMonitoring from './views/ComplianceMonitoring.tsx'
import DataAnalytics from './views/DataAnalytics.tsx'
import SystemSettings from './views/SystemSettings.tsx'
import AddProject from './views/AddProject.tsx'
import Projects from './views/Projects.tsx'
import NotFoundPage from './views/NotFoundPage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Routes>
       <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/authorized-projects" element={<AuthorizedProjects />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/compliance-monitoring" element={<ComplianceMonitoring />} />
          <Route path="/data-analytics" element={<DataAnalytics />} />
          <Route path="/system-settings" element={<SystemSettings />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFoundPage />} />
       </Route>
    </Routes>
  </BrowserRouter>,
)
