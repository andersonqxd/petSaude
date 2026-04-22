import { macroCategories } from '../../data/categories'

export default function TableView({ items }) {
  if (!items.length) {
    return (
      <div className="empty">
        <div className="empty-ico">⌕</div>
        <p>Nenhuma iniciativa encontrada com os filtros selecionados.</p>
      </div>
    )
  }

  return (
    <div className="tbl-wrap">
      <table>
        <thead>
          <tr>
            <th>Iniciativa</th>
            <th>Macrocategoria</th>
            <th>Âmbito</th>
            <th>Status</th>
            <th>Instituição</th>
            <th>Atualização</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="td-nome">{item.nome}</div>
                <div className="td-mono">{item.sigla}</div>
              </td>
              <td>{macroCategories[item.macrocat]?.label}</td>
              <td>{item.ambito}</td>
              <td>{item.status}</td>
              <td>{item.inst}</td>
              <td>{item.atualizado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}