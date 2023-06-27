
function Tienda(precio) {
    this.data = precio 
    this.next = null
}

function List(){
    this.head = null
    this._length = 0;
}

List.prototype.add = function(precio){

    let zapatos = new Node(precio);
    let current = this.head; 

    if(!current){
        this.head = zapatos;
        this._length++;
        return zapatos;
    }

    while (current.next) {
        current = current.next;
    }

    current.next = zapatos;
    this._length++;
    return zapatos;
}

let escaner = new List();
console.log(escaner);

escaner.add(20);
console.log(escaner);

escaner.add(30);
console.log(escaner);