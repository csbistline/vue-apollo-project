// Import/configure server
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const fs = require("fs");
const path = require("path");

// Import typeDefs and resolvers
const filePath = path.join(__dirname, "typeDefs.gql");
const typeDefs = fs.readFileSync(filePath, "utf-8");
const resolvers = require("./resolvers");

// Import environement variables/models
require("dotenv").config({ path: "variables.env" });
const User = require("./models/User");
const Post = require("./models/Post");

// Connect to database
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

  // Create Apollo/GraphQL server using typeDefs, resolvers and context objects
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

// Run server
server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
