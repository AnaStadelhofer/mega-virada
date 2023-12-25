const readlineSync = require('readline-sync');

const games = [
    [5, 10, 15, 20, 25, 30],
    [1, 2, 3, 4, 5, 6],
    [11, 22, 33, 44, 55, 60]
  ];
  
function drawnNumbers() {
    const drawns = [];

    for (let i = 0; i < 6; i++) {
        const drawn = readlineSync.questionInt(`Informe o ${i + 1} número sorteado: `);
        drawns.push(drawn);

    }
    return drawns;
}

function validateResult(games, drawns) {
    const result = [];

    for (const game of games) {
        const matchingNumbers = game.filter(number => drawns.includes(number));
        const quantityOfMatches = matchingNumbers.length;

        result.push({
          game,
          matchingNumbers,
          quantityOfMatches
        });
    }

    for (const { game: originalNumbers, matchingNumbers: matchedNumbers, quantityOfMatches } of result) {
        console.log(`Jogo: \x1b[36m${originalNumbers.join(', ')}\x1b[0m`);

        if (matchedNumbers.length > 0) {
            console.log(`Números Correspondentes: \x1b[36m${matchedNumbers.join(', ')}\x1b[0m`);
          } else {
            console.log('Números Correspondentes: \x1b[36mNenhum número correspondente encontrado.\x1b[0m');
          }        
          console.log(`Quantidade de Correspondências: \x1b[36m${quantityOfMatches}\x1b[0m`);

        if (quantityOfMatches >= 4) {
            console.log(`\x1b[31m\x1b[1mVOCÊ GANHOU UM PRÊMIO AQUI!!\x1b[0m \n`);
        } else {
            console.log(`\n`);
        }

    }

    return result;
}

//   console.log('\x1b[1m\x1b[35m\n================');
//   console.log('\x1b[1mJogos feitos:');
//   console.log('\x1b[1m================\n\x1b[0m\n');

//   console.log(games);

  console.log('\x1b[1m\x1b[35m\n================');
  console.log("\x1b[1mNúmeros sorteados");
  console.log('\x1b[1m================\n\x1b[0m\n');

  const numbersWinner = drawnNumbers();
  console.log(`\nNúmeros sorteados: \x1b[32m${numbersWinner.join(', ')}\x1b[0m\n`);

//   console.log('\n ' + numbersWinner);


  console.log('\x1b[1m\x1b[35m\n================');
  console.log('\x1b[1mResultados:');
  console.log('\x1b[1m================\n\x1b[0m\n');

  const result = validateResult(games, numbersWinner);

