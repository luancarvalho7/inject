import { useState, useEffect } from 'react';
import data from './assets/data/data.json';
import suppliersData from './assets/data/suppliers.json';

import seedrandom from 'seedrandom';


import { HouseCard } from './assets/components/cards/houseCard.jsx';
import { SupplierCard } from './assets/components/cards/supplierCard';
import { GameCard } from './assets/components/cards/gameCard';
import { MinesGame } from './assets/components/frustrar/frustrar';
import { Home } from './assets/pages/home';


function App() {

  const [loaded, setLoaded] = useState(false)
  const [housesData, setHousesData] = useState(data);


  function randomizeHouseData(houseData) {
    const today = new Date();
    const day = today.getDate();
    const rng = seedrandom(day.toString());
    const randomFactor = rng();
    const deltaPlayers = houseData.players * 0.2;
    const deltaRevenue = houseData.revenue * 0.2;
    const randomizedPlayers = houseData.players + Math.floor((deltaPlayers * 2 * randomFactor) - deltaPlayers);
    const randomizedRevenue = houseData.revenue + Math.floor((deltaRevenue * 2 * randomFactor) - deltaRevenue);

    return { players: randomizedPlayers, revenue: randomizedRevenue };
  }

  function distributeToSuppliers(houseData, suppliersData) {

/*     console.log(houseData)
 */   const filtered = suppliersData.filter((x)=>{if(houseData.suppliers.includes(x.name)){return x}})
    const totalWeight = filtered.reduce((acc, supplier) => acc + supplier.weight, 0);
    return suppliersData.map((supplier) => {



      const xx = houseData.suppliers.includes(supplier.name.toString())

      if (xx) {
        const portion = supplier.weight / totalWeight;

        return {
          name: supplier.name,
          image: supplier.image,
          players: Math.floor(houseData.players * portion),
          revenue: Math.floor(houseData.revenue * portion),
          payment: Math.floor((houseData.revenue * portion) * 0.2)
        };

      }




    });

  }


  function distributeToGames(supplier, gamesData) {
    const today = new Date();
    const day = today.getDate();
    const hour = today.getHours();
    const rng = seedrandom(`${day}-${hour}`);

    // First, generate a random portion influenced by the game's weight for all games
    const initialPortions = gamesData.map((game) => {
      const randomFactor = rng();
      return (game.weight / 100) * (1 + randomFactor * 1.2 - 0.1);
    });

    // Normalize the portions so they add up to 1
    const totalInitialPortion = initialPortions.reduce((acc, portion) => acc + portion, 0);
    const normalizedPortions = initialPortions.map((portion) => portion / totalInitialPortion);

    let remainingPlayers = supplier.players;
    let remainingRevenue = supplier.revenue;

    const gamesWithDistribution = gamesData.map((game, index) => {
      const portion = normalizedPortions[index];

      const playersForGame = Math.floor(remainingPlayers * portion);
      const revenueForGame = Math.floor(remainingRevenue * portion);

      // Calculate the percentage of the total revenue this game has
      const revenuePercentage = (revenueForGame / supplier.revenue) * 100;

      let finalPercentage = 0;

      if (revenuePercentage > 30) {
        finalPercentage = revenuePercentage * 2.5
      }
      if (revenuePercentage > 20 && revenuePercentage < 30) {
        finalPercentage = revenuePercentage * 2

      }

      setLoaded(true)

      return {
        name: game.name,
        image: game.image,
        players: playersForGame,
        revenue: revenueForGame,
        revenuePercentage: revenuePercentage.toFixed(2),
        finalPercentage: finalPercentage.toFixed(2)
      };
    });

    return gamesWithDistribution;
  }


  useEffect(() => {
    const newHousesData = housesData.map((houseData, index) => {
      const { players, revenue } = randomizeHouseData(houseData);
/*       console.log(houseData)
 */      const houseSuppliers = distributeToSuppliers(houseData, suppliersData).filter(item => item !== undefined);
      houseSuppliers.forEach((supplier, i) => {
        const gamesData = suppliersData.find((s) => s.name === supplier.name).games;
        houseSuppliers[i] = {
          ...supplier,
          games: distributeToGames(supplier, gamesData),
        };
      });

      return {
        ...houseData,
        players,
        revenue,
        suppliers: houseSuppliers,
      };
    });
    setHousesData(newHousesData);
  }, []);

  function amin(){
    console.log(housesData)
  }

  return (
    <>
    
    <button onClick={amin}>xxx</button>
    {loaded ? <Home data={housesData} /> : ''}
     {/*  

      <SupplierCard data={housesData[0].suppliers[1]} />

      <SupplierCard data={housesData[0].suppliers[0]} />

      {housesData.map((current) => <HouseCard data={current} />)} */}

      
    </>
  );
}

export default App;
