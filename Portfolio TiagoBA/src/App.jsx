import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SobreMim from "./pages/SobreMim.jsx";
import Projetos from "./pages/Projetos.jsx";
import Experiencias from "./pages/Experiencias.jsx";
import Contato from "./pages/Contato.jsx";
import styles from "./styles/AppLayout.module.css";

export default function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.brand}>Portfólio</div>
          <ul className={styles.menu}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Sobre Mim
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projetos"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experiencias"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Experiências
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobreMim />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Portfólio</p>
      </footer>
    </div>
  );
}
