export default class Inventory {
  constructor() {
    this.inicio = null;
    this.ultimo = null;
  }

  add(product) {
    if (this.inicio == null) {
      this.inicio = product;

      return true;
    } else {
      let aux = this.inicio;
      while (product.getId() > aux.getId() && aux.getSiguiente() != null) {
        aux = aux.getSiguiente();
      }

      if (product.getId() < aux.getId() && aux.getAnterior() == null) {
        aux.setAnterior(product);
        product.setSiguiente(aux);
        this.inicio = product;

        return true;
      }
      if (aux.getSiguiente() == null && aux.getId() < product.getId()) {
        aux.setSiguiente(product);
        product.setAnterior(aux);

        return true;
      }

      if (aux.getId() > product.getId() || aux.getSiguiente() != null) {
        product.setAnterior(aux.getAnterior());

        aux.getAnterior().setSiguiente(product);

        product.setSiguiente(aux);
        aux.setAnterior(product);

        return true;
      }
    }
  }

  /* _buscar() {
      let product = "El producto no existe";
      let aux = this.inicio;
      while (aux != null) {
        if (aux.getId() == idProduct) {
          product = ` ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} <br>`;
          return product;
        }
        aux = aux.getSiguiente();
      }
      return product;
    }*/
  buscar(idProduct) {
    let product = "El producto no existe";
    let aux = this.inicio;
    while (aux != null) {
      if (aux.getId() == idProduct) {
        product = ` ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} <br>`;
        return product;
      }
      aux = aux.getSiguiente();
    }
    return product;
  }

  eliminar(idDelete) {
    let product = "El producto no existe";
    let elim = null;
    if (idDelete == this.inicio.getId()) {
      elim = this.inicio;
      this.inicio = this.inicio.getSiguiente();
      elim.setSiguiente(null);
      if (this.inicio != null) {
        this.inicio.setAnterior(null);
      }
      product = `El elemento eliminado es  ID: ${elim.getId()}  Nombre: ${elim.getName()} Cantidad: ${elim.getQuantity()}  Costo: ${elim.getCost()} <br>`;
      return product;
    }
    let temp = this.inicio;
    while (temp.getSiguiente() != null) {
      if (temp.getSiguiente().getId() == idDelete) {
        elim = temp.getSiguiente();
        temp.setSiguiente(temp.getSiguiente().getSiguiente());
        elim.getSiguiente().setAnterior(temp);
        elim.setSiguiente(null);
        elim.setAnterior(null);
        product = `El elemento eliminado es  ID: ${elim.getId()}  Nombre: ${elim.getName()} Cantidad: ${elim.getQuantity()}  Costo: ${elim.getCost()} <br>`;
        return product;
      }
      temp = temp.getSiguiente();
    }
    return product;
  }

  listar() {
    let lista = "";
    let aux = this.inicio;
    let num = 1;
    if (this.inicio == null) {
      return "No se han agregado Productos";
    } else {
      while (aux.getSiguiente() != null) {
        lista = ` ${lista}  ${num}  ---->  ID: ${aux.getId()}  Nombre:  ${aux.getName()} Cantidad:  ${aux.getQuantity()}  Costo: $  ${aux.getCost()} Total: $ ${aux.getTotal()} Su siguiente es:  ${aux
          .getSiguiente()
          .getName()}  <br>`;
        aux = aux.getSiguiente();
        num++;
      }
      lista = ` ${lista}  ${num} ----> ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} Total: $ ${aux.getTotal()} Su siguiente es:  ${aux.getSiguiente()}  <br>`;
    }
    return lista;
  }
}
