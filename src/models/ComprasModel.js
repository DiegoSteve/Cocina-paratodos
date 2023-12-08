const { connectMysql } = require('../dbconnection');

class ComprasModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Compras');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Compras').where('ID', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Compras').insert(datos).returning('ID');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Compras').where('ID', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['ID'] = id;
        await db.where('ID', id).del();
        await db.insert(newData).into('Compras');
        return id;
    }
}

module.exports = ComprasModel;
