class ContenedorMemoria {
    constructor() {
        this.memoria = []
    }

    getById(id) {
        const obj = this.memoria.find(item => item.id == id)
        if (!obj) {
            throw new Error('Error')
        } else {
            return obj
        }
    }

    list() {
        return [...this.memoria]
    }

    save(obj) {
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

    update(obj, index) {
        if (index == -1) {
            throw new Error('Error')
        } else {
            this.memoria.splice(index, 1, obj)
            return obj
        }
    }

    delete(id) {
        const index = this.memoria.findIndex(item => item.id == id)
        if (index == -1) {
            throw new Error('Error')
        } else {
            return this.memoria.splice(index, 1)
        }
    }

    deleteAll() {
        this.memoria = []
    }
}

export default ContenedorMemoria