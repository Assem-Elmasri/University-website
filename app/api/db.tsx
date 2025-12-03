import sql from "mssql";

const config: sql.config = {
    server: "server_address",
    port: 1433, /* t2reban dah el port el deafult fe mssql*/
    database: "database_name",
    driver: "msnodesqlv8",
     options: {
        trustedConnection: true,
        trustServerCertificate: true,
    },
    user: "username",
    password: "password",
}
    
export default async function ExcuteQuery(query: string){
        try {
        const pool = await sql.connect(config);
        const products = await pool.request().query(query);
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}