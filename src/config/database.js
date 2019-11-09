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
