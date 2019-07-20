module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`./src/**/*.entity{.ts,.js}`],

  migrations: [`./src/database/migrations/**/*.ts`],
  subscribers: [`./src/database/subscriber/**/*.ts`],
  cli: {
    entitiesDir: `./src`,
    migrationsDir: `./src/database/migrations`,
    subscribersDir: `./src/database/subscriber`,
  },
  synchronize: false,
  logging: true,
};
