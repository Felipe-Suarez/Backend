class ContenedorMemoria {
    constructor() {
        this.memoria = []
    }

    listar(id) {
        const obj = this.memoria.find(item => item.id == id)
        if (!obj) {
            throw new Error('Error')
        } else {
            return obj
        }
    }

    listarAll() {
        return [...this.memoria]
    }

    guardar(obj) {

        let newId;
        if (this.memoria.length == 0) {
            newId = 1
        } else {
            newId = this.memoria[this.memoria.length - 1].id + 1
        }

        const newObj = { ...obj, id: newId }
        this.memoria.push(newObj)
        return newObj

    }

    actualizar(obj) {
        const index = this.memoria.findIndex(item => item.id == obj.id)
        if (index == -1) {
            throw new Error('Error')
        } else {
            this.memoria[index] = obj
            return obj
        }
    }

    borrar(id) {
        const index = this.memoria.findIndex(item => item.id == id)
        if (index == -1) {
            throw new Error('Error')
        } else {
            return this.memoria.splice(index, 1)
        }
    }

    borrarAll() {
        this.memoria = []
    }
}

export default ContenedorMemoria