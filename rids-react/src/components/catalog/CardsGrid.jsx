import InitiativeCard from './InitiativeCard'

export default function CardsGrid({ items }) {
  if (!items.length) {
    return (
      <div className="empty">
        <div className="empty-ico">⌕</div>
        <p>Nenhuma iniciativa encontrada com os filtros selecionados.</p>
      </div>
    )
  }

  return (
    <div className="cards-grid">
      {items.map((item) => (
        <InitiativeCard key={item.id} item={item} />
      ))}
    </div>
  )
}