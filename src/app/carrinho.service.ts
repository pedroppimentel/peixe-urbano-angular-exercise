import { Oferta } from './shared/oferta.model';
import { ItemCarrinho } from './shared/item-carrinho.model';

class CarrinhoService {
    public itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public incluirItem(oferta: Oferta, quantidade: number): void {
        const itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            quantidade
        );
        const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id);

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade++;
        } else {
            this.itens.push(itemCarrinho);
        }
    }

    totalCarrinhoCompras(): number {
        let total: number = 0;

        this.itens.map((item: ItemCarrinho) => {
            total += (item.valor * item.quantidade);
        });

        return total;
    }

    adicionarQuantidade(_item: ItemCarrinho): void {
        const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === _item.id);

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade++;
        }
    }

    diminuirQuantidade(_item: ItemCarrinho): void {
        const itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === _item.id);

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade--;

            if (itemCarrinhoEncontrado.quantidade === 0) {
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1);
            }
        }
    }

    limparCarrinho(): void {
        this.itens = [];
    }
}

export { CarrinhoService };