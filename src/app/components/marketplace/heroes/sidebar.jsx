import styles from '../../../styles/marketplace/heroes/sidebar.module.css';
import { useState } from 'react';

export default function Sidebar() {
  const [selectedRarity, setSelectedRarity] = useState('legendary');
  const [selectedHeroTypes, setSelectedHeroTypes] = useState([]);
  const [selectedHeroes, setSelectedHeroes] = useState([]);
  const [searchAbility, setSearchAbility] = useState('');
  const [elementFrom, setElementFrom] = useState('');
  const [elementTo, setElementTo] = useState('');
  const rarities = [
    { name: 'common', color: 'gray' },
    { name: 'uncommon', color: 'green' },
    { name: 'rare', color: 'blue' },
    { name: 'epic', color: 'purple' },
    { name: 'legendary', color: 'gold' },
  ];
  const heroTypes = ['warrior', 'mage', 'rogue', 'archer', 'paladin'];
  const heroNames = ['Atalanta', 'Heracles', 'Achilles', 'Freya', 'Odin'];
  return (
    <div className={`${styles.sidebar} col-12 col-xl-2 col-lg-3 col-md-3 col-sm-12`}>
      <div className={styles.filterContainer}>
        <div className={styles.filterTitle}>
          <h2>Filter</h2>
          <button className='btn text-muted' type='button'>Reset</button>
        </div>
      </div>
      {/* Filtro de Rareza */}
      <div className={styles.filterRarityContainer}>
        <div className={styles.filterRarityTitle}>
          <h2>Rarity</h2>
          <div className={styles.selectedRarity}>{selectedRarity}</div>
        </div>
        <div className={styles.rarityOptions}>
          {rarities.map(rarity => (
            <div
              key={rarity.name}
              className={`${styles.rarityCircle} ${selectedRarity === rarity.name ? styles.selected : ''}`}
              style={{ backgroundColor: rarity.color }}
              onClick={() => setSelectedRarity(rarity.name)}
            ></div>
          ))}
        </div>
      </div>
      {/* Filtro de Elemento */}
      <div className={styles.filterElementsContainer}>
        <div className={styles.elementFilter}>

          <div className={styles.filterTitle}>
            <h2>Element</h2>
          </div>
          <input
            className={styles.size}
            type="text"
            placeholder="From"
            value={elementFrom}
            width={50}
            onChange={(e) => setElementFrom(e.target.value)}
          />
          <span className={styles.rangeText}>To</span>
          <input
            className={styles.size}
            type="text"
            placeholder="infinite"
            value={elementTo}
            onChange={(e) => setElementTo(e.target.value)}
          />
        </div>
      </div>
      {/* Filtro de Heroe  */}
      <div className={styles.filterHeroesTypeContainer}>

        <div className={styles.filterTitle}>
          <h2>Hero</h2>
          <div className={styles.selectedHeroTypes}>{selectedHeroes.length}</div>
        </div>
        <div className={styles.heroTypeOptions}>
          {heroNames.map(heroName => (
            <div
              key={heroName}
              className={`${styles.heroType} ${selectedHeroes.includes(heroName) ? styles.selected : ''}`}
              onClick={() => {
                if (selectedHeroes.includes(heroName)) {
                  setSelectedHeroes(selectedHeroes.filter(type => type !== heroName));
                } else {
                  setSelectedHeroes([...selectedHeroes, heroName]);
                }
              }}
            >
              {heroName}
            </div>
          ))}
        </div>
      </div>
      {/* Filtro de tipo de Heroe  */}
      <div className={styles.filterHeroesTypeContainer}>

        <div className={styles.filterTitle}>
          <h2>Hero Types</h2>
          <div className={styles.selectedHeroTypes}>{selectedHeroTypes.length}</div>
        </div>
        <div className={styles.heroTypeOptions}>
          {heroTypes.map(heroType => (
            <div
              key={heroType}
              className={`${styles.heroType} ${selectedHeroTypes.includes(heroType) ? styles.selected : ''}`}
              onClick={() => {
                if (selectedHeroTypes.includes(heroType)) {
                  setSelectedHeroTypes(selectedHeroTypes.filter(type => type !== heroType));
                } else {
                  setSelectedHeroTypes([...selectedHeroTypes, heroType]);
                }
              }}
            >
              {heroType}
            </div>
          ))}
        </div>
      </div>
      {/* Filtro de habilidad  */}
      <div className={styles.filterContainer}>
        <div className={styles.filterTitle}>
          <h2>Ability</h2>
        </div>
        <div className={styles.abilityFilter}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search abilities"
            value={searchAbility}
            onChange={(e) => setSearchAbility(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
