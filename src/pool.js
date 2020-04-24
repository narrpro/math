import mysql from 'mysql2/promise'

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  connectionLimit: 30,
  database: 'test',
})

const result = async ( )=>{
  const conn = connection.getConnection()
  try{
    const [row] = await conn.query("SELECT * FROM TABLE WHERE id=4")
    return row
  } catch(err) {
    throw new Error(err)
  } finally {
    conn.release()
  }
}