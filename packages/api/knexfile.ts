const options = {
    client: process.env.DB_CLIENT,
    connection: process.env.CONNECTION || {
        filename: "db/db.sqlite3"
    },
    migrations: {
        directory: "db/migrations",
        tableName: "migrations"
    },
    debug: false,
    seeds: {
        directory: "db/seeds"
    },
    useNullAsDefault: process.env.DB_CLIENT === "sqlite3",
    pool: process.env.client !== "sqlite3" ? { min: 2, max: 10 } : undefined
}

const configs = {
    development: options,

    test: {
        ...options,
        connection: process.env.CONNECTION || {
            filename: "test/testdb.sqlite3"
        }
    }
}

export default configs[process.env.NODE_ENV || "development"]
