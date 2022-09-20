/* Implementação para Estrutura de Dados - PILHA
Autor:  Prof. Ronaldo R. de campos
Baseado  nos materiais desenvolvidos anteriormente pelos professores: Fábio Takeda e Erick Petrucelli
Detalhes de funcionamento e conceitos sobre Pilhas estão no texto do Módulo 3 = pilhas.pdf
*/ 

//Representação para os elementos (nodes) que compõe a pilha

class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

//Gerenciamento dos mecanismos de controle da pilha como um todo, sua quantidade de elementos, quem 
//está no topo, inserir novo node, excluir....
class Stack {
    constructor () {
        this.counter = 0;
        this.top = null;
    }

    //Inserir novo item na pilha
    push(value) {
        this.counter++;
        let newnode = new Node(value);
        newnode.next = this.top;
        this.top = newnode;
    }

    //Verificar se a pilha está vazia = retorna verdadeiro se estiver.
    isEmpty() {
        return this.counter === 0;
    }
    
    //Remover item da pilha
    pop() {
        if (this.isEmpty()) return null
        this.counter--;
        let rmnode = this.top; //node removed
        delete this.top;
        this.top = rmnode.next;
        return rmnode;   
    } 

    size() {
        return this.counter;
    }
    
    onTop() {
        if (this.isEmpty()) return null
        let tpnode = this.pop();
        this.push(tpnode.value);
        return tpnode;
    }
    //Alternativamente as linhas 2, 3 e 4 dessa funcao poderiam ser substituídas por
    //return this.top, mas por questões didáticas de se mostrar operações ocorrendo apenas
    //no topo da pilha, foram utilizadas o pop() e push()

}

module.exports = Stack;   