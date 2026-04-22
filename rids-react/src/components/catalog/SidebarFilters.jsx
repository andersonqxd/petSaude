import { macroCategories } from '../../data/iniciativas'

const interopOptions = ['todos', 'FHIR', 'HL7', 'OpenEHR', 'RNDS']
const ambitoOptions = ['todos', 'Nacional', 'Estadual', 'Municipal']
const statusOptions = ['todos', 'Ativo', 'Parcial', 'Descontinuado']
const tipoOptions = ['todos', 'Sistema de Informação', 'Plataforma Digital', 'Programa']

export default function SidebarFilters({ filters, setFilters }) {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: 'todos' }))
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="filter-block">
          <div className="filter-head">
            <span>Macrocategoria RIDS v3</span>
            <button className="filter-clear" onClick={() => clearFilter('macrocat')}>
              limpar
            </button>
          </div>

          <button
            className={`f-opt ${filters.macrocat === 'todos' ? 'sel' : ''}`}
            onClick={() => updateFilter('macrocat', 'todos')}
          >
            <span>Todas</span>
          </button>

          {Object.entries(macroCategories).map(([key, item]) => (
            <button
              key={key}
              className={`f-opt ${filters.macrocat === key ? 'sel' : ''}`}
              onClick={() => updateFilter('macrocat', key)}
            >
              <span className="f-dot" style={{ background: item.color }} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="filter-block">
          <div className="filter-head">
            <span>Interoperabilidade</span>
            <button className="filter-clear" onClick={() => clearFilter('interop')}>
              limpar
            </button>
          </div>

          {interopOptions.map((item) => (
            <button
              key={item}
              className={`f-opt ${filters.interop === item ? 'sel' : ''}`}
              onClick={() => updateFilter('interop', item)}
            >
              <span>{item === 'todos' ? 'Todos' : item}</span>
            </button>
          ))}
        </div>

        <div className="filter-block">
          <div className="filter-head">
            <span>Âmbito</span>
            <button className="filter-clear" onClick={() => clearFilter('ambito')}>
              limpar
            </button>
          </div>

          {ambitoOptions.map((item) => (
            <button
              key={item}
              className={`f-opt ${filters.ambito === item ? 'sel' : ''}`}
              onClick={() => updateFilter('ambito', item)}
            >
              <span>{item === 'todos' ? 'Todos' : item}</span>
            </button>
          ))}
        </div>

        <div className="filter-block">
          <div className="filter-head">
            <span>Status</span>
            <button className="filter-clear" onClick={() => clearFilter('status')}>
              limpar
            </button>
          </div>

          {statusOptions.map((item) => (
            <button
              key={item}
              className={`f-opt ${filters.status === item ? 'sel' : ''}`}
              onClick={() => updateFilter('status', item)}
            >
              <span>{item === 'todos' ? 'Todos' : item}</span>
            </button>
          ))}
        </div>

        <div className="filter-block">
          <div className="filter-head">
            <span>Tipo</span>
          </div>

          {tipoOptions.map((item) => (
            <button
              key={item}
              className={`f-opt ${filters.tipo === item ? 'sel' : ''}`}
              onClick={() => updateFilter('tipo', item)}
            >
              <span>{item === 'todos' ? 'Todos' : item}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}