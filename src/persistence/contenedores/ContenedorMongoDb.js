import mongoose from 'mongoose'

import { URL_MONGO, OPTIONS_MONGO } from '../../../config/index.js';

import { asPojo, renameField } from "../../../utils/objetsUtils.js";

mongoose.connect(URL_MONGO, OPTIONS_MONGO);

class ContenedorMongoDb {

    constructor(model) {
        this.coleccion = model;
    }

    async getById(id) {
        try {
            const docs = await this.coleccion.find({ '_id': id }, { __v: 0 });
            if (docs.length == 0) {
                throw new Error(`No existe el documento con id ${id}`);
            } else {
                const result = renameField(asPojo(docs[0]), '_id', 'id');
                return result;
            }
        } catch (error) {
            throw new Error(`Error al listar el documento con id ${id}: ${error}`);
        }
    }

    async list() {
        try {
            const docs = await this.coleccion.find({}, { __v: 0 });
            const result = docs.map(doc => renameField(asPojo(doc), '_id', 'id'));
            return result;
        } catch (error) {
            throw new Error(`Error al listar los documentos: ${error}`);
        }
    }

    async save(objeto) {
        try {
            const doc = new this.coleccion(objeto);
            const result = await doc.save();
            return renameField(asPojo(result), '_id', 'id');
        } catch (error) {
            throw new Error(`Error al guardar el documento: ${error}`);
        }
    }

    async update(objeto) {
        try {
            return this.coleccion.findOneAndUpdate({ _id: objeto.id }, objeto);
        } catch (error) {
            throw new Error(`Error al actualizar el documento: ${error}`);
        }
    }

    async delete(id) {
        try {
            const result = await this.coleccion.deleteOne({ '_id': id });
            if (result.n == 0) {
                throw new Error(`No existe el documento con id ${id}`);
            } else {
                return id;
            }
        } catch (error) {
            throw new Error(`Error al borrar el documento con id ${id}: ${error}`);
        }
    }

    async deleteAll() {
        try {
            const result = await this.coleccion.deleteMany({});
            return result;
        } catch (error) {
            throw new Error(`Error al borrar los documentos: ${error}`);
        }
    }
}

export default ContenedorMongoDb;