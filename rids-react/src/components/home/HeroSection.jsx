import bandeiraicon from "../../assets/icons/square.png"


const quickSearches = ['e-SUS', 'RNDS', 'FHIR', 'Vigilância', 'Atenção Primária', 'Vacinação']

export default function HeroSection({ search, onSearchChange }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-badge">
          <img 
            src={bandeiraicon} 
            alt="Imagem da bandeira do Brasil" 
            style={{ width: "15px", height: "15px", display: "block" }}
          />
          Repositório Nacional · RIDS
        </div>

        <h1>
          Iniciativas Digitais
          <br />
          em Saúde Pública
        </h1>

        <p>
          Sistemas, plataformas e programas digitais organizados por macrocategoria RIDS,
          com metadados estruturados, interoperabilidade e comunidade de prática.
        </p>

        <div className="search-wrap">
          <input
            type="text"
            placeholder="Buscar por nome, área, padrão ou instituição"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button type="button">Buscar</button>
        </div>

        <div className="hero-chips">
          {quickSearches.map((term) => (
            <button
              key={term}
              type="button"
              className="chip"
              onClick={() => onSearchChange(term)}
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}