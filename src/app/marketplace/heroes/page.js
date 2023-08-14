'use client'

import Sidebar from '../../components/marketplace/heroes/sidebar'
import styles from '../../styles/marketplace/heroes/heroes.module.css'
import Tooltip from '@/app/components/utils/tooltip'
import Pagination from '@/app/components/utils/pagination'
import { useState } from 'react';

export default function Heroes() {

  const [selectedItem, setSelectedItem] = useState('Ordenar por precio');
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const [hero1, setHero] = useState({
    image: 'https://us.123rf.com/450wm/starush/starush2306/starush230603497/206527426-a-cartoon-viking-with-a-beard-and-a-helmet-generative-ai-image.jpg?ver=6'
  })

  const HeroCard = (hero) => {
    return (
      <div className={`${styles.heroCard} col-12 col-xl-3 col-lg-3 col-md-3 col-sm-6`}>
        <div className={styles.price}>
          <span className={styles.moneyBag}>💰</span>
          <span className={styles.priceNumber}>500000000</span>
          <span className={styles.cart}>🛒</span>
          <span className={styles.cartNumber}>5</span>
        </div>
        <div className={styles.heroContainer} style={{ backgroundImage: `url(${hero1.image})` }}>
          <div className={styles.heroImage}></div>
          <div className={styles.darkCircles}>
            <Tooltip title='titulo del skill 1' description='parrafo con la descripcion de la skill en detalle. 1' type={styles.darkCircle1} ></Tooltip>
            <Tooltip title='titulo del skill 2' description='parrafo con la descripcion de la skill en detalle. 2' type={styles.darkCircle2} ></Tooltip>

          </div>
          <div className={`${styles.overlayCircle}`}></div>
        </div>
      </div>
    );
  };


  return (
    <div className={`${styles.pageContainer} row g-0`}>
      <Sidebar></Sidebar>
      <div className={`col-12 col-xl-9 col-lg-9 col-md-9 col-sm-12`}>
        <div className={`${styles.heroCardContainer} row g-0`}>
          <div className="dropdown col-12" style={{paddingLeft: 20 + 'px'}}>
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown" aria-expanded="false"
            >
              {selectedItem}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className={`dropdown-item ${selectedItem === 'Lowest Price' ? 'active' : ''}`} href="#" onClick={() => handleItemClick('Lowest Price')}>
                  Lowest Price
                </a>
              </li>
              <li>
                <a className={`dropdown-item ${selectedItem === 'Higher Price' ? 'active' : ''}`} href="#" onClick={() => handleItemClick('Higher Price')}>
                  Higher Price
                </a>

              </li>
            </ul>
          </div>
          <div className='row g-0'>
            {/* aqui se pondra el map con la data recursiva */}
            <HeroCard hero={hero1}></HeroCard>
            <HeroCard hero={hero1}></HeroCard>
            <HeroCard hero={hero1}></HeroCard>
            <HeroCard hero={hero1}></HeroCard>
            <HeroCard hero={hero1}></HeroCard>
          </div>
          <div className="row gx-0">
            <Pagination></Pagination>

          </div>
        </div>
      </div>
    </div>
  )
}
