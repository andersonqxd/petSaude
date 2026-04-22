import { macroCategories } from "../../data/iniciativas";

function statusClass(status) {
    if (status === 'ativo') return 's-ativo'
    if (status === 'Parcial') return 's-parcial'
    return 's-inativo'
}


export default function InitiativeCard({ item }) {
  const category = macroCategories[item.macrocat]

  return (
    <article className="card" style={{ '--cat-color': category.color }}>
      <div className="card-row1">
        <span
          className="cat-pill"
          style={{ background: category.bg, color: category.color }}
        >
          {category.label}
        </span>

        <div className="right-badges">
          <span className="ambito-pill">{item.ambito}</span>
          <span className="status-pill">
            <span className={`status-dot ${statusClass(item.status)}`} />
            {item.status}
          </span>
        </div>
      </div>

      <h3>{item.nome}</h3>

      <div className="card-tipo-label">
        {item.tipo} · {item.atualizado}
      </div>

      <div className="card-interop">
        {item.interop.map((tag) => (
          <span key={tag} className={`iop-badge iop-${tag.toLowerCase()}`}>
            {tag}
          </span>
        ))}

        {item.api && <span className="iop-badge iop-api">API</span>}
        {item.rnds && <span className="iop-badge iop-rnds">RNDS</span>}
      </div>

      <p>{item.desc}</p>

      <div className="card-tags">
        <span className="tag">{item.area}</span>
        <span className="tag tag-green">{item.cobertura}</span>
      </div>

      <div className="card-foot">
        <span className="card-inst">{item.inst}</span>
        <span className="card-date">{item.docs} docs</span>
      </div>
    </article>
  )
}
