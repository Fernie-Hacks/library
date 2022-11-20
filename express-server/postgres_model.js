const Pool = require('pg').Pool
const dotenv = require("dotenv")
dotenv.config()

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

const getUsers = () => {
    return new Promise(function(resolve, reject) {
        pool.query('SELECT * FROM library_users ORDER BY id ASC;', (error, results) => {
            if (error) {
                reject(error)
            }
            console.log("Response: " + results.row)
            resolve(results.row);
        })
    })
}

const createUser = (body) => {
    return new Promise(function(resolve, reject) {
        const { name, email } = body
        pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new merchant has been added added: ${results.rows[0]}`)
        })
    })
}
const deleteUser = () => {
    return new Promise(function(resolve, reject) {
        const id = parseInt(request.params.id)
        pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Merchant deleted with ID: ${id}`)
        })
    })
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
}