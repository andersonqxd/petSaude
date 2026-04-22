export default function ContentHeader({ total, view, setView }) {
    return (
        <div className="content-top">
            <div className="content-titled">
                Resultados <span>{total} iniciativas</span>
            </div>

            <div className="top-right">
                <div className="view-tog"  role="tablist" aria-label="Altenar vizualização">
                    <button
                        type="button"
                        className={`vtbn ${view==='cards' ? 'on' : ''}`}
                        onAuxClick={()=>setView('cards')} >
                        cards
                    </button>
                    <button
                        type="button"
                        className={`vtbn ${view==='table' ? 'on' : ''}`}
                        onAuxClick={()=>setView('table')} >
                        tabela
                    </button>
                </div>
            </div>
        </div>
    )
}