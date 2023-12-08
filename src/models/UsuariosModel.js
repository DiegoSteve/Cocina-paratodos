const { connectMysql } = require('../dbconnection');

class UsuariosModel {
    static async consultar() {
        let db = await connectMysql();
        let query = db('Usuarios');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectMysql();
        return await db('Usuarios').where('ID', id);
    }

    static async insertar(datos) {
        let db = await connectMysql();
        const result = await db('Usuarios').insert(datos).returning('ID');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMysql();
        return await db('Usuarios').where('ID', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectMysql();
        newData['ID'] = id;
        await db.where('ID', id).del();
        await db.insert(newData).into('Usuarios');
        return id;
    }
}

module.exports = UsuariosModel;
