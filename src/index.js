// tutorial from: https://www.youtube.com/watch?v=VLVEkyQPguU

// logic for server
const { ApolloServer } = require("apollo-server");
const connectDb = require("./config/db");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");

console.log(typeDefs);

connectDb();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
});

server.listen({ port: 5000 }).then(({ url }) => {
  console.log("Server is ready at 5000");
});
