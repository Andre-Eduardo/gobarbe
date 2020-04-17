module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'docker',
  database: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
// sudo docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
// sudo docker run --name mongobarber -p 27017:27017 -d -t mongo
// sudo docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
