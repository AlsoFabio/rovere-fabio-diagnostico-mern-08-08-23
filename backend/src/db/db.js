const { connect } = require('mongoose');
const ConnectDB = async ({ uri }) => {
    try {
        await connect(uri);
        console.log('conectado a la base de datos.');
    } catch (error) {
        console.log('Hubo un error con conectar a la base de datos: ${error.message}');
    }
};
module.exports = ConnectDB;