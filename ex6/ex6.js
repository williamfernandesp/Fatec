var myread = require('readline-sync');

const Stack = require('./stack');

let cars = new Stack();

function menu() {
    let choice = ""
    while (choice != '0') {
        console.log("1. Empilhar");
        console.log("2. Desimpilhar");
        console.log("3. Exibir elemento do topo");
        console.log("4. Exibir pilha");
        console.log("5. Esvaziar a pilha");
        console.log("6. Sair")
        choice = myread.question('Digite uma opcao: ');
        let choiceName = "";

        switch (choice) {
            case "1":
                choiceName = "Empilhar";
                console.log(choiceName);
                var carsNumbers = myread.question('Quantos carros deseja adicionar? ');
                let answer = parseInt(carsNumbers);
                while (answer > 0) {
                    let carros = myread.question('Digite o nome do carro: ');
                    cars.push(carros);
                    answer--;
                }

                break;
            case "2":
                choiceName = "Desimpilhar";
                if (cars.isEmpty()) {
                    console.log("Pilha vazia");
                } else {
                    console.log(choiceName);
                    while (cars.size() > 0) {
                        let car = cars.pop();
                        console.log(car.value);
                    }
                }
                break;
            case "3":
                choiceName = "Exibir elemento do topo";
                if (cars.isEmpty()) {
                    console.log("Pilha vazia");
                } else {
                    console.log(cars.onTop());
                }
                break;
            case "4":
                choiceName = "Exibir pilha";
                if (cars.isEmpty()) {
                    console.log("Pilha vazia");
                } else {
                    console.log(cars);
                }
                break;
            case "5":
                if (cars.isEmpty()) {
                    console.log("Pilha vazia");
                } else {
                    choiceName = "Esvaziar a pilha";
                    console.log(choiceName);
                    let esvaziar = cars.pop();
                    console.log(esvaziar);
                    break;
                }
            case "6":
                choiceName = "Sair";
                console.log(choiceName);
                choice = "0";
                break;
        }
    }
}

menu()