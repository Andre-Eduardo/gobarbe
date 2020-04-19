require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
// sudo docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
// sudo docker run --name mongobarber -p 27017:27017 -d -t mongo
// sudo docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
