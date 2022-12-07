import chai from 'chai'
const expect = chai.expect

import request from 'supertest';

const superTest = request('http://localhost:8080/api/products')

describe('Test de todos los metodos de la api de productos', function () {
    it('List', async function () {
        let response = await superTest.get('/')
        expect(response.body).to.be.a('array')
    })

    it('GetbyId', async function () {
        let response = await superTest.get('/636e741db4dd08011fb3a06a')
        expect(response.body.title).to.equal('Mate de acero negro + bombilla ')
    })

    it('Save', async function () {
        let array = await superTest.get('/')

        await superTest.post('/').send({
            title: 'superTest',
            price: 10,
            thumbnail: 'none'
        })

        let newArray = await superTest.get('/')

        expect(newArray.body.length).to.equal(array.body.length + 1)
    })

    it('Put', async function () {
        await superTest.put('/637fe1339f9ecfa046ccc4c2').send({
            title: 'superTest updated',
        })

        let response = await superTest.get('/637fe1339f9ecfa046ccc4c2')

        expect(response.body.title).to.equal('superTest updated')
    })

    it('Delete', async function () {
        let array = await superTest.get('/')

        await superTest.delete('/637fe834372f742494ef99c0')

        let newArray = await superTest.get('/')

        expect(newArray.body.length).to.equal(array.body.length - 1)
    })
})