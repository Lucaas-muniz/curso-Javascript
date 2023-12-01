class Carrinho {
    constructor(itens, quantidadeTotal, valorTotal) {
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }

    adicionar(item, valor) {
        this.itens.push(item);
        this.quantidadeTotal++;
        this.valorTotal += valor;
    }

    remover() {
        this.itens.pop();
        this.quantidadeTotal--;
    }
}

let compra1 = new Carrinho([], 0, 0);
console.log(compra1.itens);
console.log(compra1.quantidadeTotal);
console.log(compra1.valorTotal);

compra1.adicionar('capa de celular', 30);

console.log(compra1.itens);
console.log(compra1.quantidadeTotal);
console.log(compra1.valorTotal);
compra1.adicionar('bola', 50);
compra1.adicionar('fone de ouvido', 30);

console.log(compra1.itens);
console.log(compra1.quantidadeTotal);
console.log(compra1.valorTotal);
compra1.remover();
console.log(compra1.itens);
console.log(compra1.quantidadeTotal);
console.log(compra1.valorTotal);