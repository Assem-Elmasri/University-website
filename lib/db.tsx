// import sql from "mssql";

// const config: sql.config = {
//     server: "100.67.4.126",
//     port: 1433, 
//     database: "UniversityEnrollmentSystem",
//     user: "TEAM001",
//     password: "TEAM_001",  
//     options: {
//         encrypt: false,  
//         trustServerCertificate: true,
//         enableArithAbort: true,
//         instanceName: "SQLEXPRESS"
//     }
// }
    
// export default async function ExcuteQuery(query: string){
//         try {
//         const pool = await sql.connect(config);
//         const products = await pool.request().query(query);
//         return products.recordsets;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123456789",
  database: process.env.DB_NAME || "UniversityEnrollmentSystem",
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function ExcuteQuery(sql: string, params?: unknown[]) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}