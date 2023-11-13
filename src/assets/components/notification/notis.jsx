import React, { useState, useEffect, useMemo } from 'react';
import { NotiBadge } from './notiBadge.jsx';
import './notis.css'

export function Notis({ data }) {

    const [namesA, setNamesA] = useState(['FortuneTiger'])
    const currentHour = new Date().getHours()
    const [count, setCount] = useState(0);
    const [badges, setBadges] = useState([]);
    const [isUserPresent, setIsUserPresent] = useState(true);

    const handleVisibilityChange = () => {
        setIsUserPresent(!document.hidden);
    };

    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        const interval = isUserPresent ? setInterval(() => {
            setCount(oldCount => oldCount + 1);
        }, 4000) : null;

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isUserPresent]);
    useEffect(() => {
        if (count > 0) {
            let randomType;
            const giftChance = Math.random(); // generates a random number between 0 and 1
            if (giftChance <= 1 / 20) {
                randomType = 'gift';
            } else {
                randomType = 'pix';
            }

            const names = [
                "Luiz", "Lula",
                "João", "Joca",
                "Felipe", "Lipe",
                "Gabriel", "Gabi",
                "Lucas", "Luquinhas",
                "Matheus", "Teteu",
                "Bruno", "Bru",
                "Ricardo", "Rico",
                "Gustavo", "Gus",
                "Carlos", "Cacá",
                "Diogo", "Digo",
                "Fernando", "Nando",
                "Thiago", "Tiago", "Thia",
                "Vitor", "Vitinho",
                "Jorge", "Jorginho",
                "Alexandre", "Xande",
                "Leandro", "Léo",
                "Cássio", "Cassinho",
                "Cauê", "Cau",
                "Rafael", "Rafa",
                "Rodrigo", "Digo",
                "Henrique", "Rique",
                "Murilo", "Muri",
                "Vinícius", "Vini",
                "Yuri", "Yu",
                "Wesley", "Wes",
                "Victor", "Vic",
                "Caio", "Cai",
                "André", "Dé",
                "Pedro", "Peu",
                "Eduardo", "Dudu",
                "Leonardo", "Léo",
                "Daniel", "Dani",
                "Paulo", "Paulinho",
                "Igor", "Igão",
                "Otávio", "Tavinho",
                "César", "Cesinha",
                "Arthur", "Tu",
                "Samuel", "Sam",
                "Renato", "Rê",
                "Willian", "Will",
                "Marcos", "Marquinho",
                "Isaac", "Zac",
                "Douglas", "Doug",
                "Júlio", "Ju",
                "Fabrício", "Fá",
                "Márcio", "Marcinho",
                "Roberto", "Beto",
                "Guilherme", "Gui",
                "Fábio", "Fabinho",
                "Rogério", "Roger",
                "José", "Zé",
                "André", "Dedé",
                "Antônio", "Tonho",
                "Marcelo", "Celo",
                "Cláudio", "Cau",
                "Sérgio", "Serginho",
                "Maria", "Mari",
                "Ana", "Aninha",
                "Beatriz", "Bia",
                "Julia", "Juju",
                "Luiza", "Lu",
                "Larissa", "Lari",
                "Isabela", "Bela",
                "Fernanda", "Nanda",
                "Gabriela", "Gabi",
                "Carolina", "Carol",
                "Amanda", "Mandi",
                "Bruna", "Bru",
                "Camila", "Cami",
                "Rafaela", "Rafa",
                "Leticia", "Leti",
                "Vitória", "Vivi",
                "Mariana", "Mari",
                "Daniela", "Dani",
                "Stefany", "Stef",
                "Alice", "Lice",
                "Eduarda", "Duda",
                "Clara", "Clarinha",
                "Jéssica", "Jess",
                "Nathalia", "Nati",
                "Sabrina", "Bri",
                "Samantha", "Sam",
                "Vanessa", "Nessa",
                "Hugo", "Huguinho",
                "Rafael", "Rafinha",
                "Luciano", "Lu",
                "Erick", "Rick",
                "Feliciano", "Feli",
                "Pedro Henrique", "PH",
                "Gabriel Henrique", "Gabi",
                "Marcelo", "Marcelinho",
                "Raul", "Raulzinho",
                "Luciana", "Lu",
                "Isaac", "Isa",
                "Vera", "Verinha",
                "Leila", "Leilinha",
                "Luciana", "Luci",
                "Fábio", "Fabão",
                "Alex", "Ale",
                "Simone", "Sim",
                "Larissa", "Lara",
                "Renata", "Rê",
                "Carlos Eduardo", "Cadu",
                "Luana", "Lua",
                "Gabriel", "Gabi",
                "Fernando", "Fer",
                "Sandra", "San",
                "Guilhermina", "Guila",
                "Thaís", "Tha",
                "Lucas", "Luquinhas",
                "Priscila", "Pri",
                "Rodrigo", "Rodriguinho",
                "Aline", "Ali",
                "Giovanni", "Gio",
                "Mirella", "Mika",
                "Eduardo", "Dudu",
                "Cristina", "Cris",
                "Anderson", "Andinho",
                "Lívia", "Livinha",
                "Wagner", "Waguinho",
                "Lais", "Lalá",
                "Alan", "Alanzinho",
                "Sueli", "Sue",
                "Lucas", "Luquitas",
                "Nayara", "Naya",
                "Robson", "Robinho",
                "Renan", "Renanzinho",
                "Larissa", "Lari",
                "Carlos", "Carlão",
                "Natália", "Nat",
                "João Vitor", "Jota",
                "Marina", "Mari",
                "Rogério", "Ro",
                "Tatiane", "Tati",
                "Elias", "Elinho",
                "Mara", "Marinha",
                "Andréia", "André",
                "Júnior", "Jr.",
                "Marlene", "Mar",
                "Ronaldo", "Ronaldinho",
                "Camila", "Camis",
                "Ivan", "Ivinho",
                "Elaine", "Elô",
                "Vinícius", "Vinis",
                "Luzia", "Lu",
                "Hélio", "Helinho",
                "Clarissa", "Clara",
                "Sandro", "Sandrinho",
                "Raquel", "Raque",
                "Márcia", "Má",
                "Diego", "Dieguinho",
                "Caroline", "Carolzinha",
                "Ricardo", "Riquinho",
                "Fernanda", "Fê",
                "Gustavo", "Guto",
                "Lilian", "Lili",
                "Jeferson", "Jefinho",
                "Lídia", "Lí",
                "Eduardo", "Edu",
                "Júlia", "Jujuba",
                "Ricardo", "Ricardinho",
                "Lorena", "Lola",
                "Victor Hugo", "Vitinho",
                "Natasha", "Nat",
                "Fábio", "Fabu",
                "Igor", "Iguinho",
                "Alessandra", "Alessa",
                "Leonardo", "Léo",
                "Mariane", "Mari",
                "Juliano", "Juju",
                "Gabrielly", "Gabi",
                "Renan", "Rê",
                "Viviane", "Vivi",
                "Denis", "Dê",
                "Raissa", "Rai",
                "Thiago", "Thiaguinho",
                "Jaqueline", "Jaque",
                "Higor", "Higão",
                "Eliane", "Eli",
                "Adriano", "Adri",
                "Renata", "Renatinha",
                "Ruan", "Ru",
                "Aline", "Alininha",
                "Fernando", "Fernandinho",
                "Suzana", "Su",
                "Caio", "Caizinho",
                "Mirela", "Mimi",
                "Rafael", "Rafaelzinho",
                "Cíntia", "Cí",
                "Matheus", "Mat",
                "Larissa", "Lara",
                "Felipe", "Felipinho",
                "Amanda", "Amandinha",
                "Lucas", "Luquinhas",
                "Patrícia", "Paty",
                "Felipe", "Fefê",
                "Carla", "Carlinha",
                "Vinícius", "Vini",
                "Lívia", "Livinha",
                "Rodrigo", "Rodriguinho",
                "Natalia", "Nati",
                "Erick", "Erinho",
                "Alessandra", "Ale",
                "Luciano", "Lucinha",
                "Jaqueline", "Jaque",
                "Raphael", "Raphinha",
                "Marina", "Mari",
                "Igor", "Igão",
                "Simone", "Sim",
                "Ricardo", "Rica",
                "Andressa", "Dessa",
                "Vitor", "Vitu",
                "Vanessa", "Vane",
                "Paulo", "Paulinho",
                "Laura", "Lau",
                "Gabriel", "Gabi",
                "Cristiane", "Cris",
                "Alexandre", "Ale",
                "Isadora", "Isa",
                "Ronaldo", "Ronaldinho",
                "Leticia", "Leti",
                "Eduardo", "Edu",
                "Ana Paula", "Aninha",
                "Fernando", "Fernandinho",
                "Sandra", "San",
                "Bruno", "Bru",
                "Luisa", "Lulu",
                "Rogério", "Ro",
                "Caroline", "Carol",
                "Ivan", "Ivinho",
                "Cynthia", "Cyn",
                "Luiz", "Luizinho",
                "Elaine", "Elô",
                "Henrique", "Henriquinho",
                "Marlene", "Mar",
                "Matias", "Matinho",
                "Monique", "Moni",
                "Carlos", "Carlinhos",
                "Márcia", "Má",
                "Diego", "Dieguinho",
                "Carla", "Carlinha",
                "Gabriel", "Gabi",
                "Ricardo", "Ricardinho"
            ];
            const games = namesA;
            const randomName = names[Math.floor(Math.random() * names.length)];
            const randomGame = games[Math.floor(Math.random() * games.length)];

            // Conditional value based on the type
            let randomValue;
            if (randomType === 'gift') {
                randomValue = Math.floor(Math.random() * (3400 - 900 + 1) + 900); // generates a random number between 900 and 3400
            } else {
                randomValue = (Math.random() * 1000).toFixed(2); // generates a random number between 0 and 1000
            }

            const newBadge = { id: Date.now(), type: randomType, name: randomName, value: randomValue, game: randomGame };

            setBadges(oldBadges => {
                if (oldBadges.length >= 15) {
                    return [...oldBadges.slice(1), newBadge];
                }
                return [...oldBadges, newBadge];
            });
        }
    }, [count]);

    useEffect(() => {

        let setNamesArray = [];

        data.map(c => c.games.map(c => {
            setNamesArray.push(c.name)
        }))

        console.log(setNamesArray)
        
        setNamesA(setNamesArray);
   
    }, [])


    return (
        <section className='notiSection'>
            <div className="notiTrack">
                {badges.map((badge) => (
                    <NotiBadge key={badge.id} {...badge} />
                ))}
            </div>
        </section>
    );
}
