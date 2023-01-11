// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "localhost"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", ""),
//       user: env("DATABASE_USERNAME", ""),
//       password: env("DATABASE_PASSWORD", ""),
//     },
//     acquireConnectionTimeout: 600000,
//     pool: {
//       min: 0,
//       max: 100,
//       acquireTimeoutMillis: 300000,
//       createTimeoutMillis: 300000,
//       destroyTimeoutMillis: 50000,
//       idleTimeoutMillis: 300000,
//       reapIntervalMillis: 10000,
//       createRetryIntervalMillis: 2000,
//       propagateCreateError: false,
//     },
//     useNullAsDefault: true,
//   },
// });

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "strapi"),
      user: env("PGUSER", "strapi"),
      password: env("PGPASSWORD", "password"),
      ssl: env.bool(true),
    },
  },
});
