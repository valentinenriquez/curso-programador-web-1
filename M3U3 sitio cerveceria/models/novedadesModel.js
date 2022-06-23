var pool = require('./bd');

/*sirve para listar las novedades*/
async function getNovedades() {
    var query = 'select * from novedades';
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getNovedades }