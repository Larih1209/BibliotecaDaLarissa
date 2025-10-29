import pkg from "pg";
import dotenv from "dotenv";
import nodemon from "nodemon";
dotenv.config();
const { Pool } = pkg;
const pool = new Pool({
 connectionString: process.env.DATABASE_URL,
});
export default pool;