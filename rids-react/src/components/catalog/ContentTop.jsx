export default function ContentTop({ total }) {
    return (
        <div className="content-top">
            <div className="content-title">
                Resultados <span>{total} Iniciativas</span>
            </div>

            <div className="top-right">
                <div className="view-log">
                    <button className="vtbtn on">Cards</button>
                    <button className="vtbtn">Tabela</button>
                </div>

                <select className="sort-sel" defaultValue="rel">
                    <option value="rel">Relevancia</option>
                    <option value="az" >Nome</option>
                    <option value="cat">Categoria</option>
                    <option value="new">Mais Recentes</option>
                </select>
            </div>
        </div>
    )
}