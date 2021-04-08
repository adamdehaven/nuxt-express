import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { users } from './mock'

const schema = buildSchema(`
  type User {
    id: Int!
    name: String!
    username: String!
    email: String!
    address: Address
  }

  type Address {
    street: String!
    suite: String
    city: String!
    zipcode: String!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }
`)

const root = {
  users: () => {
    return users
  },
  user: ({ id }) => {
    return users.find((u) => u.id === id)
  },
}

export default graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
})
