export default function StatsBar({
  total = 12,
  macrocategorias = 5,
  ambitos = 3,
  documentos = 28,
  pendentes = 2,
}) {
  const stats = [
    { value: total, label: 'Iniciativas', tone: 'default' },
    { value: macrocategorias, label: 'Macrocategorias', tone: 'default' },
    { value: ambitos, label: 'Âmbitos', tone: 'default' },
    { value: documentos, label: 'Documentos', tone: 'default' },
    { value: pendentes, label: 'Aguardando revisão', tone: 'warning' },
  ]

  return (
    <section className="statsbar" aria-label="Indicadores do repositório">
      {stats.map((stat) => (
        <div className="stat-item" key={stat.label}>
          <div className={`stat-n ${stat.tone === 'warning' ? 'warning' : ''}`}>
            {stat.value}
          </div>
          <div className="stat-l">{stat.label}</div>
        </div>
      ))}
    </section>
  )
}