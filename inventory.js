export default class Inventory {
  constructor() {
    this.inicio = null;
  }

  add(product) {
    if (this._cont() < 20) {
      if (this._buscar(product.getId()) == true) {
        if (this.inicio == null) {
          this.inicio = product;

          return 1;
        } else {
          let aux = this.inicio;
          while (product.getId() > aux.getId() && aux.getSiguiente() != null) {
            aux = aux.getSiguiente();
          }

          if (product.getId() < aux.getId() && aux.getAnterior() == null) {
            aux.setAnterior(product);
            product.setSiguiente(aux);
            this.inicio = product;

            return 1;
          }
          if (aux.getSiguiente() == null && aux.getId() < product.getId()) {
            aux.setSiguiente(product);
            product.setAnterior(aux);

            return 1;
          }

          if (aux.getId() > product.getId() || aux.getSiguiente() != null) {
            product.setAnterior(aux.getAnterior());

            aux.getAnterior().setSiguiente(product);

            product.setSiguiente(aux);
            aux.setAnterior(product);

            return 1;
          }
        }
      } else {
        return 2;
      }
    } else {
      return 3;
    }
  }

  _cont() {
    let cont = 1;
    let aux = this.inicio;
    if (this.inicio == null) {
      return cont;
    }

    while (aux.getSiguiente() != null) {
      cont++;
      aux = aux.getSiguiente();
    }
    return cont;
  }

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

  _buscar(idProduct) {
    let aux = this.inicio;
    while (aux != null) {
      if (aux.getId() == idProduct) {
        return false;
      }
      aux = aux.getSiguiente();
    }
    return true;
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
        if (elim.getSiguiente() != null) {
          temp.setSiguiente(temp.getSiguiente().getSiguiente());
          elim.getSiguiente().setAnterior(temp);
          elim.setSiguiente(null);
          elim.setAnterior(null);
          product = `El elemento eliminado es  ID: ${elim.getId()}  Nombre: ${elim.getName()} Cantidad: ${elim.getQuantity()}  Costo: ${elim.getCost()} <br>`;
          return product;
        } else {
          temp.setSiguiente(null);
          elim.setAnterior(null);
          product = `El elemento eliminado es  ID: ${elim.getId()}  Nombre: ${elim.getName()} Cantidad: ${elim.getQuantity()}  Costo: ${elim.getCost()} <br>`;
          return product;
        }
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

  listarInverso() {
    let lista = "";
    let aux = this.inicio;
    let num = 1;
    if (this.inicio == null) {
      return "No se han agregado Productos";
    } else {
      while (aux.getSiguiente() != null) {
        lista = `  ${num}  ---->  ID: ${aux.getId()}  Nombre:  ${aux.getName()} Cantidad:  ${aux.getQuantity()}  Costo: $  ${aux.getCost()} Total: $ ${aux.getTotal()} Su siguiente es:  ${aux
          .getSiguiente()
          .getName()} <br> ${lista} <br>`;
        aux = aux.getSiguiente();
        num++;
      }
      lista = `  ${num} ----> ID: ${aux.getId()}  Nombre: ${aux.getName()} Cantidad: ${aux.getQuantity()}  Costo: ${aux.getCost()} Total: $ ${aux.getTotal()} Su siguiente es:  ${aux.getSiguiente()}<br> ${lista}  <br>`;
    }
    return lista;
  }
}
