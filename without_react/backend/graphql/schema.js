const { buildSchema } = require('graphql')

// type メソッド名 (検索キー): [返答キー]

// const schema = buildSchema(`
//   type Member {
//     id: Int
//     name: String
//     gender: String
//   }

//   type Query {
//     members(
//       id: Int,
//       first: Int,
//       name: String,
//       gender: String
//     ): [Member],
//   }

//   type Mutation {
//     addMember(name: String!, gender: String! ): Member,
//     delMember(id: Int!): Member
//   }
// `)

const schema = buildSchema(`
  type Memo {
    id: ID
    title: String
    content: String
  }

  type Query {
      memos(
          id: ID,
          title: String,
          content: String,
      ): [Memo],
  }

  type Mutation {
      createMemo(title: String!, content: String!): Memo,
  }
`)

module.exports = schema;