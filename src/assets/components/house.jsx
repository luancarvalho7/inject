import React, { useEffect } from 'react';
import seedrandom from 'seedrandom';

export function House({ initialData,  }) {
  useEffect(() => {

    console.log()

    const today = new Date();
    const day = today.getDate();
    const rng = seedrandom(day.toString());

    
    const randomFactor = rng();
    const deltaPlayers = initialData.players*0.2;
    const deltaRevenue = initialData.revenue*0.2;

    const newPlayers = initialData.players + Math.floor((deltaPlayers * 2 * randomFactor) - deltaPlayers);
    const newRevenue = initialData.revenue + Math.floor((deltaRevenue * 2 * randomFactor) - deltaRevenue);


    const updatedData = {
      ...initialData,
      players: newPlayers,
      revenue: newRevenue
    };


    // If you want to update the parent component's state, you would do it here using a passed-in function

  }, []); 

  return null;
}
