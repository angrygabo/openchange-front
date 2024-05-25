import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

// layouts
import Login from './components/LoginUser';
import i18n from './utils/i18n';
import './App.css';
import WrapApp from './components/layouts/wrapApp';

// Carga diferida
const HomePage = lazy(()        => import('./pages/Home'));
const Dashboard = lazy(()       => import('./pages/Dashboard'));
const NuevaOperacion = lazy(()  => import('./pages/NuevaOperacion'));
const MisOperaciones = lazy(()  => import('./pages/MisOperaciones'));
const MiPerfil = lazy(()        => import('./pages/MiPerfil'));
const MisBancos = lazy(()       => import('./pages/MisBancos'));
const MisWallets = lazy(()      => import('./pages/MisWallets'));
const Settings = lazy(()        => import('./pages/Settings'));

function App() {
  i18n;
  return (
    <Provider store={store}>
      <Router>
        <WrapApp>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/nueva-operacion" element={<NuevaOperacion />} />
                <Route path="/dashboard/mis-operaciones" element={<MisOperaciones />} />
                <Route path="/dashboard/mi-perfil" element={<MiPerfil />} />
                <Route path="/dashboard/mis-bancos" element={<MisBancos />} />
                <Route path="/dashboard/mis-wallets" element={<MisWallets />} />
                <Route path="/dashboard/settings" element={<Settings />} />
              </Routes>
          </Suspense>
        </WrapApp>
      </Router>
    </Provider>
  );
}

export default App;