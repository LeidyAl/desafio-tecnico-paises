type userResponse = "SI" | "NO";

const rowOfUsersAvengers: number[] = [
  //25,25,50,100,25,25,25,50  --> Imprime SI
  // 25, 25, 50 --> Imprime Si
    25,100 //--> Imprime NO
];

const canSellTheTickets = (row: number[]): userResponse => {
  let change25 = 0; // Contador para billetes de 25
  let change50 = 0; // Contador para billetes de 50

  for (const bill of row) {
    if (bill === 25) {
      change25++;
    } else if (bill === 50) {
      if (change25 > 0) {
        change25--;
        change50++;
      } else {
        return "NO";
      }
    } else if (bill === 100) {
      if (change50 > 0 && change25 > 0) {
        change50--;
        change25--;
      } else if (change25 >= 3) {
        change25 -= 3;
      } else {
        return "NO";
      }
    }
  }

  return "SI";
}

// Ejemplo de uso
const results = canSellTheTickets(rowOfUsersAvengers);
console.log(results); // Debería imprimir "SI" o "NO" dependiendo de la fila de usuarios