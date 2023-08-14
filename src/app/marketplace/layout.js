import HeaderMarketplace from '../components/marketplace/layout/headerMarkeplace'
import NavItems from '../components/marketplace/layout/navItems'


export const metadata = {
  title: 'Marketplace',
  description: 'Tienda de nfts',
}
export default function MarketplaceLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        <HeaderMarketplace></HeaderMarketplace>
        <NavItems/>
        {children}

      </section>
    )
  }