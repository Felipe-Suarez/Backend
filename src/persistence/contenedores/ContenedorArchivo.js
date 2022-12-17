import fs from 'fs'

class ContenedorArchivo {
    constructor(archive) {
        this.archive = `DB/${archive}.json`;
    }

    async getById(id) {
        const objs = await this.list()
        const obj = await objs.find(item => item.id === parseInt(id))
        return obj
    }

    async list() {
        try {
            const objs = await fs.promises.readFile(this.archive, 'utf-8')
            return JSON.parse(objs)
        }
        catch {
            return []
        }

    }

    async save(obj) {
        const objs = await this.list()
        let newId;
        if (objs.length == 0) {
            newId = 1
        } else {
            newId = objs[objs.length - 1].id + 1
        }

        const newObj = { ...obj, id: newId }
        objs.push(newObj)

        try {
            await fs.promises.writeFile(this.archive, JSON.stringify(objs, null, 2))
            return newObj
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(obj, index, productList) {
        if (index == -1) {
            throw new Error('Error, no se encontro el id')

        } else {
            productList.splice(index, 1, obj)
            try {
                await fs.promises.writeFile(this.archive, JSON.stringify(productList, null, 2))
            } catch {
                throw new Error('Error')
            }
        }
    }

    async delete(id) {
        const objs = await this.list()
        const index = objs.findIndex(item => item.id == id)
        if (index == -1) {
            throw new Error('Error, no se encontro el id')
        }
        objs.splice(index, 1)
        try {
            await fs.promises.writeFile(this.archive, JSON.stringify(objs, null, 2))
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteAll() {
        try {
            await fs.promises.writeFile(this.archive, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default ContenedorArchivo;