const { Client } = require("pg");
require("dotenv").config();

console.log("🔍 Starting database connection test..."); // Debugging log

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: 5432,  // Default PostgreSQL port
});

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PASS:", process.env.DB_PASS ? "****" : "NOT SET");

async function testConnection() {
    try {
        console.log("🔗 Attempting to connect to the database...");
        await client.connect();
        console.log("✅ Database connected successfully!");

        const res = await client.query("SELECT NOW()");
        console.log("🕒 Current Timestamp:", res.rows[0]);

    } catch (err) {
        console.error("❌ Database connection error:", err);
    } finally {
        console.log("🔌 Closing database connection...");
        await client.end();
    }
}

testConnection();