import './stats.css'
import { Percentage } from './percentage.jsx'

let lastRandomValue = null;

function getRandomValue() {
  const today = new Date();
  const day = today.getDate();
  const currentHour = today.getHours();

  // Define time intervals (e.g., morning, afternoon, evening)
  let timeInterval;
  if (currentHour < 8) {
    timeInterval = 'morning';
  } else if (currentHour < 16) {
    timeInterval = 'afternoon';
  } else {
    timeInterval = 'evening';
  }

  // Generate a seed based on the day and the current time interval
  const rng = seedrandom(`${day}-${timeInterval}`);

  // Generate the random value based on the seed
  let randomValue = rng() * (32 - (-15)) + (-15); // Random value between -15 and +32
  
  // If it's the first random value of the day, save it
  if (lastRandomValue === null) {
    lastRandomValue = randomValue;
  } else {
    // Otherwise, limit the fluctuation based on the first random value of the day
    const minLimit = lastRandomValue - 5; // 5% less than the first value
    const maxLimit = lastRandomValue + 5; // 5% more than the first value
    
    randomValue = Math.min(Math.max(randomValue, minLimit), maxLimit);
  }

  return randomValue;
}

// Reset `lastRandomValue` at the start of each new day
// This could be done using a scheduled job or other mechanism
function resetLastRandomValue() {
  lastRandomValue = null;
}


export function Stats(){
    return <>
    <div className="statsInfo">
        <h2 className="secondText statsTitle">Pagamento</h2>
        <h1 className="mainText statsValue">R$ 400K</h1>
        <Percentage value="10"/>
    </div>
</>
}