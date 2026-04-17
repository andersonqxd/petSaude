import { NavLink, useNavigate } from "react-router-dom";

export default function Topbar() {
    const navigate = useNavigate();

    const handleThemeToggle = () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme') || 'ligth';
        html.setAttribute('data-theme', currentTheme === 'dark' ? 'ligth':'dark');
    };

    return (
        <header>
        <nav className="topbar">
            <div className="brand" onClick={() => navigate('/')}>
            <div className="brand-mark">＋</div>

            <div>
                <span className="brand-text">RIDS</span>
                <span className="brand-sub">Repositório Nacional de Saúde Digital</span>
            </div>
            </div>

            <div className="topnav">
            <NavLink
                to="/"
                className={({ isActive }) =>
                isActive ? 'topnav-btn active' : 'topnav-btn'
                }
            >
                Catálogo
            </NavLink>

            <NavLink
                to="/grafo"
                className={({ isActive }) =>
                isActive ? 'topnav-btn active' : 'topnav-btn'
                }
            >
                Grafo Interop.
            </NavLink>

            <div className="topnav-sep" />

            <button
                type="button"
                className="dark-toggle"
                onClick={handleThemeToggle}
                title="Alternar tema"
                aria-label="Alternar tema"
            >
                ◐
            </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <button type="button" className="btn-login">
                Entrar
            </button>

            <button type="button" className="btn-nova">
                Nova Iniciativa
            </button>
            </div>
        </nav>
        </header>
    );
}