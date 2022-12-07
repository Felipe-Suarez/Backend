import fs from 'fs'

class ContenedorArchivo {
    constructor(archive) {
        this.archive = `DB/${archive}`;
    }

    async listar(id) {
        const objs = await this.listarAll()
        const buscado = objs.find(item => item.id === id)
        return buscado
    }

    async listarAll() {
        try {
            const objs = await fs.promises.readFile(this.archive, 'utf-8')
            return JSON.parse(objs)
        }
        catch {
            return []
        }

    }

    async guardar(obj) {
        const objs = await this.listarAll()
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

    async actualizar(obj) {
        const objs = await this.listarAll()
        const index = objs.findIndex(item => item.id == obj.id)
        if (index == -1) {
            throw new Error('Error, no se encontro el id')
        } else {
            objs[index] = obj
            try {
                await fs.promises.writeFile(this.archive, JSON.stringify(objs, null, 2))
            } catch {
                throw new Error('Error')
            }
        }
    }

    async borrar(id) {
        const objs = await this.listarAll()
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

    async borrarAll() {
        try {
            await fs.promises.writeFile(this.archive, JSON.stringify([], null, 2))
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default ContenedorArchivo;