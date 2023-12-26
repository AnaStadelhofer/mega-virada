const readlineSync = require('readline-sync');

const games = [
    // Casa
    [7, 14, 18, 22, 39, 50],
    [7, 10, 30, 35, 46, 53],
    [5, 12, 27, 36, 44, 53],
    [4, 6, 22, 27, 28, 52],
    [2, 4, 7, 23, 40, 47],
    [21, 27, 30, 33, 37, 40],
    [6, 10, 13, 17, 20, 23],
    [7, 12, 14, 28, 30, 60],
    [13, 22, 28, 45, 48, 52],
    [3, 14, 27, 33, 41, 49],
    [4, 11, 23, 30, 42, 55],
    // Empresa
    [6, 7, 12, 25, 30, 47],
    [6, 25, 42, 44, 49, 58],
    [6, 11, 18, 22, 45, 58],
    [7, 26, 29, 30, 33, 42],
    [2, 5, 7, 13, 17, 47],
    [7, 9, 16, 22, 40, 53],
    [3, 24, 27, 33, 48, 58],
    [4, 18, 21, 32, 46, 59],
    [8, 13, 17, 29, 42, 51],
    [5, 9, 22, 36, 47, 53],
    [7, 8, 11, 22, 47, 51],
    [6, 8, 10, 20, 24, 37],
    [7, 11, 15, 20, 23, 55],
    [8, 21, 28, 49, 51, 55],
    [1, 15, 34, 38, 46, 59],
    [5, 7, 8, 29, 35, 57],
    [10, 26, 27, 43, 50, 57],
    [13, 18, 21, 34, 54, 55],
    [7, 11, 25, 37, 43, 51],
    [7, 8, 14, 24, 44, 51],
    [7, 14, 23, 34, 42, 56],
    [4, 12, 27, 32, 51, 58],
    [1, 3, 15, 28, 49, 60]
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

  console.log('\x1b[1m\x1b[35m\n================');
  console.log('\x1b[1mJogos feitos:');
  console.log('\x1b[1m================\n\x1b[0m\n');

  console.log(games);

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

