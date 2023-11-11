import seedrandom from "seedrandom";

export const GetSignals = ({ game, setSignalMsg }) => {



    const gameName = (typeof game == "object" && game != null ? game.name : "x")
    const seed = `${gameName}`
    const rng = seedrandom(seed)

    const getCrashSignal = (mode = 0) => {
        let results = [];

        const maxValues = {
            0: 1.5,
            1: 2.0,
            2: 8.0,
        };
        const max = maxValues[mode];

        const generateNumber = () => {
            let num;
            do {
                num = rng() * max;
            } while (num <= 1.17);
            return num.toFixed(2);
        };

        for (let i = 0; i < 3; i++) {
            results.push(`Retirar em <strong class="greenGradientText"> ${generateNumber()}x </strong>`);
        }

        // 35% chance to skip a round
        if (rng() < 0.35) {
            results[1] = 'Pular Rodada';
        }

        return results.join('<br/>');
    };
    const getMinesSignal = (quanty) => {
        let newGrid = Array(5).fill(Array(5).fill('🟦')); // Resetting the grid
        newGrid = JSON.parse(JSON.stringify(newGrid)); // Deep copy
        let count = 0;
        const positions = [];

        while (count < quanty) {
            const x = Math.floor(rng() * 5);
            const y = Math.floor(rng() * 5);
            const position = `${x}-${y}`;

            if (!positions.includes(position)) {
                newGrid[x][y] = '⭐';
                positions.push(position);
                count++;
            }
        }

        // Convert the grid to a string (or HTML)
        const gridString = newGrid.map(row => row.join('')).join('<br/>');
        return gridString;
    };
    const getFortuneSignal = () => {
        const random = () => Math.floor(rng() * (10 - 3) + 3);

        const normal = random();
        const turbo = random();

        return `entrem <strong class="greenGradientText">${normal}x normal</strong>  e <strong class="greenGradientText">${turbo}x turbo</strong>  alternado`;
    }
    const getRouletteSignal = () => {
        const signals = [
            `Entrem no <strong class="greenGradientText"> vermelho </strong>`,
            `Entrem no <strong class="greenGradientText"> preto </strong>`,
            `Joguem nos <strong class="greenGradientText"> pares </strong>`,
            `Joguem nos <strong class="greenGradientText"> ímpares </strong>`,
            `Entrem no <strong class="greenGradientText"> 1 a 18 </strong>`,
            `Entrem no <strong class="greenGradientText"> 19 a 36 </strong>`,
            `Entrem na <strong class="greenGradientText"> 1ª </strong> e <strong class="greenGradientText"> 2ª </strong> coluna`,
            `Entrem na <strong class="greenGradientText"> 1ª </strong> e <strong class="greenGradientText"> 3ª </strong> coluna`,
            `Entrem na <strong class="greenGradientText"> 2ª </strong> e <strong class="greenGradientText"> 3ª </strong> coluna`,
            `Entrem na <strong class="greenGradientText"> 1ª </strong> e <strong class="greenGradientText"> 2ª </strong> dúzia`,
            `Entrem na <strong class="greenGradientText"> 1ª </strong> e <strong class="greenGradientText"> 3ª </strong> dúzia`,
            `Entrem na <strong class="greenGradientText"> 2ª </strong> e <strong class="greenGradientText"> 3ª </strong> dúzia`,
        ];

        const complements = ["1 tentativa", "2 tentativas", "3 tentativas"];

        const randomSignal = signals[Math.floor(rng() * signals.length)];
        const randomComplement = complements[Math.floor(rng() * complements.length)];

        return `${randomSignal}, vcs tem ${randomComplement}, não esqueçam de sempre cobrir o zero!`;
    };

    const getTwiceSignal = (op1, op2) => {
        const random = () => Math.floor(rng() * 2);

        const twiceOptions = [op1, op2]


        return twiceOptions[random()]

    }
    const getSquadSignal = (op1, op2, op3, op4) => {
        const random = () => Math.floor(rng() * 4);

        const squadOptions = [op1, op2, op3, op4]


        return squadOptions[random()]

    }



    /* ifs */

    function loadSignals(game) {

        let finalMessage
        let sinal


        
        if (game == "Mines") {
            finalMessage = getMinesSignal(5)

        }

        if (game === "Aviator" || game === "Spaceman") {
            finalMessage = getCrashSignal()
        }




        if (game === "FortuneTiger") {
            sinal = getFortuneSignal();
            finalMessage = `
        
        Tigrinho tá pagando muitoo <br/>
        ${sinal} <br/>
        `


        }

        if (game === "Roulette") {
            sinal = getRouletteSignal();
            finalMessage = `${sinal} <br/>
        `


        }

        /*VIP GAMES*/

        if (game === "FortuneRabbit") {
            sinal = getFortuneSignal();
            finalMessage = `
        
        ${sinal} <br/>
        Coelhinho ta pagando!
        `


        }

        if (game === "FortuneOx") {
            sinal = getFortuneSignal();
            finalMessage = `
        
        ${sinal} <br/>
        TOURO FICOU MALUCO!
        `



        }


        if (game === "BacBo") {
            sinal = getTwiceSignal(`Entre no <strong class="greenGradientText"> Azul </strong> `, `Entre no <strong class="greenGradientText">Vermelho</strong>`)
            finalMessage = `Esse tá fácil! <br/>
        ${sinal} e marque o EMPATE. <br/> `
        }
        if (game === "DragonTiger") {
            sinal = getTwiceSignal(`Aposte no <strong class="greenGradientText"> Dragão </strong> `, `Aposte no <strong class="greenGradientText">Tigre</strong>`)
            finalMessage = `É sinalzinho que vcs querem?? <br/>
        ${sinal} e marque o EMPATE. <br/> `
        }
        if (game === "FootballStudio") {
            sinal = getTwiceSignal(`Aposte na <strong class="greenGradientText"> Casa </strong> `, `Aposte no <strong class="greenGradientText">Visitante</strong>`)
            finalMessage = `É sinalzinho que vcs querem?? <br/>
        ${sinal} e lembra de marcar o EMPATE. <br/> `
        }

        if (game === "LightingDice") {
            sinal = getSquadSignal(`NÚMERO ALTO`, `NÚMERO BAIXO`, `QUALQUER DUPLO`, `QUALQUER TRIPLO`)
            finalMessage = `Podem apostar em <strong class="greenGradientText"> ${sinal}!! </strong>`

        }

        if (game == "NinjaCrash") {
            sinal = (Math.floor(rng() * (4 - 2) + 2))
            finalMessage = `Entrem e façam <strong class="greenGradientText"> ${sinal} </strong>`
        }

        return finalMessage

    }


    return loadSignals(gameName);
}