
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}


class BinaryTree {
    constructor() {
        this.raiz = null;
    }

    
    insertar(valor) {
        
        const nodoNuevo = new Nodo(valor);
        
        if (this.raiz === null) {
            this.raiz = nodoNuevo;
            return true;
        }
        else {
            
            let nodoActual = this.raiz;
            while (true) {
                
                if (valor < nodoActual.valor) {
                    
                    if (nodoActual.izquierda === null) {
                        nodoActual.izquierda = nodoNuevo;
                        return true;
                    }
                    
                    nodoActual = nodoActual.izquierda;
                }
                
                else {
                
                    if (nodoActual.derecha === null) {
                        nodoActual.derecha = nodoNuevo;
                        return true;
                    }
                    
                    nodoActual = nodoActual.derecha;
                }
            }
        }
    }

    
    buscar(valor) {
        
        let nodoActual = this.raiz;

        
        while (nodoActual !== null) {
            
            if (valor === nodoActual.valor) {
                return true;
            }
            
            else if (valor < nodoActual.valor) {
                nodoActual = nodoActual.izquierda;
            }
            
            else {
                nodoActual = nodoActual.derecha;
            }
        }
        
        return false;
    }

    encontrarTodos(valor) {
        let coincidencias = [];
        this._buscarCoincidencias(this.raiz, valor, coincidencias);
        return coincidencias;
    }

    _buscarCoincidencias(nodo, valor, coincidencias) {
        if (nodo === null) {
            return;
        }

        if (nodo.valor === valor) {
            coincidencias.push(nodo);
        }

        this._buscarCoincidencias(nodo.izquierda, valor, coincidencias);
        this._buscarCoincidencias(nodo.derecha, valor, coincidencias);
    }
}

// Ejemplo de uso
const binaryTree = new BinaryTree();
binaryTree.insertar(5);
binaryTree.insertar(2);
binaryTree.insertar(3);
binaryTree.insertar(8);

// Método buscar y notificar si encuentra todas las coincidencias
console.log(binaryTree.buscar(4)); // Output: false porque 4 no está en el árbol.
console.log(binaryTree.buscar(6)); // Output: false porque 6 no está en el árbol.
console.log(binaryTree.encontrarTodos(5)); // Output: [Nodo] porque 5 está en el árbol.
console.log(binaryTree.encontrarTodos(6)); // Output: [] porque 6 no está en el árbol.
