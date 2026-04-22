import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "../common/ThemeToggle";
import { useEffect, useState } from "react";
import hospitalIcon from "../../assets/icons/hospital-building.png";

export default function Topbar() {
    const navigate = useNavigate();

    const [theme, setTheme] = useState("light")

    const handleThemeToggle = () => {
        setTheme((prev) => (prev ==="dark" ? "light" : "dark"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme])

    return (
        <header>
        <nav className="topbar">
            <div className="brand" onClick={() => navigate('/')}>
            <div className="brand-mark">
                <img 
                    src={hospitalIcon} 
                    alt="Logo do repositório" 
                    style={{ width: "20px", height: "20px", display: "block" }}
                />
            </div>

            <div>
                <span className="brand-text"> RIDS</span>
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
                <ThemeToggle theme={theme} />
            </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <button 
                type="button" 
                className="btn-login"
                onClick={() => navigate("/login")}
            >
                Entrar
            </button>

            {/* <button type="button" className="btn-nova">
                Nova Iniciativa
            </button> */}
            </div>
        </nav>
        </header>
    );
}