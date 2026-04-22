import { useMemo, useState } from 'react'
import Topbar from '../components/layout/Topbar'
import HeroSection from '../components/home/HeroSection'
import StatsBar from '../components/home/StatsBar'
import SidebarFilters from '../components/catalog/SidebarFilters'
import ContentTop from '../components/catalog/ContentTop'
import CardsGrid from '../components/catalog/CardsGrid'
import { iniciativas } from '../data/iniciativas'

export default function HomePage() {
  const [filters, setFilters] = useState({
    macrocat: 'todos',
    interop: 'todos',
    ambito: 'todos',
    status: 'todos',
    tipo: 'todos',
  })

  const filteredItems = useMemo(() => {
    return iniciativas.filter((item) => {
      if (filters.macrocat !== 'todos' && item.macrocat !== filters.macrocat) {
        return false
      }

      if (filters.ambito !== 'todos' && item.ambito !== filters.ambito) {
        return false
      }

      if (filters.status !== 'todos' && item.status !== filters.status) {
        return false
      }

      if (filters.tipo !== 'todos' && item.tipo !== filters.tipo) {
        return false
      }

      if (filters.interop !== 'todos') {
        if (filters.interop === 'RNDS') return item.rnds
        return item.interop.includes(filters.interop)
      }

      return true
    })
  }, [filters])

  return (
    <>
      <Topbar />
      <HeroSection />
      <StatsBar />

      <section className="page-body">
        <SidebarFilters filters={filters} setFilters={setFilters} />

        <main>
          <ContentTop total={filteredItems.length} />
          <CardsGrid items={filteredItems} />
        </main>
      </section>
    </>
  )
}