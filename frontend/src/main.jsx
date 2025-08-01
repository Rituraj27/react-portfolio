import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { ColorProvider } from './context/ColorContext.jsx';
import ProjectPage from './components/CaseStudy/ProjectPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='case-study/:projectId' element={<ProjectPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ColorProvider>
        <RouterProvider router={router} />
      </ColorProvider>
    </ThemeProvider>
  </StrictMode>
);
