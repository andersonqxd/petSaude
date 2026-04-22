import { filterOptions } from '../../data/categories'

function findLabel(group, value) {
  return filterOptions[group]?.find((item) => item.value === value)?.label || value
}

export default function ActiveFilters({ search, filters, clearFilter, clearSearch, clearAll }) {
  const tags = []

  if (search.trim()) {
    tags.push({ key: 'search', label: `Busca: ${search}`, onRemove: clearSearch })
  }

  if (filters.macrocat !== 'todas') {
    tags.push({ key: 'macrocat', label: findLabel('macrocat', filters.macrocat), onRemove: () => clearFilter('macrocat') })
  }
  if (filters.interop !== 'todos') {
    tags.push({ key: 'interop', label: findLabel('interop', filters.interop), onRemove: () => clearFilter('interop') })
  }
  if (filters.ambito !== 'todos') {
    tags.push({ key: 'ambito', label: findLabel('ambito', filters.ambito), onRemove: () => clearFilter('ambito') })
  }
  if (filters.status !== 'todos') {
    tags.push({ key: 'status', label: findLabel('status', filters.status), onRemove: () => clearFilter('status') })
  }
  if (filters.tipo !== 'todos') {
    tags.push({ key: 'tipo', label: findLabel('tipo', filters.tipo), onRemove: () => clearFilter('tipo') })
  }

  if (!tags.length) return null

  return (
    <div className="active-filters">
      {tags.map((tag) => (
        <span key={tag.key} className="af-tag">
          {tag.label}
          <button type="button" onClick={tag.onRemove} aria-label={`Remover filtro ${tag.label}`}>
            ×
          </button>
        </span>
      ))}
      <button type="button" className="filter-clear" onClick={clearAll}>
        limpar tudo
      </button>
    </div>
  )
}