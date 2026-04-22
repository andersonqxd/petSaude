import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hospitalIcon from "../assets/icons/hospital-building.png"

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "bolsista",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Login enviado:", formData);
    navigate("/");
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-header">
          <div className="lh-icon"><img src={hospitalIcon} alt="" /></div>
          <h2>Acesso ao Repositório</h2>
          <p>Entre com suas credenciais e selecione seu perfil de acesso</p>
        </div>

        <div className="login-body">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="fld">
              <label htmlFor="email">E-mail institucional</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="nome@instituicao.gov.br"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="fld">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="fld">
              <label htmlFor="role">Perfil de acesso</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="bolsista">Bolsista</option>
                <option value="revisor">Revisor</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary login-submit">
              Entrar
            </button>
          </form>

          <div className="login-extra">
            <button
              type="button"
              className="login-link-btn"
              onClick={() => navigate("/")}
            >
              Continuar como visitante
            </button>

            <span className="login-divider">•</span>

            <button
              type="button"
              className="login-link-btn"
              onClick={() => alert("Tela de cadastro virá na próxima etapa")}
            >
              Solicitar cadastro
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}