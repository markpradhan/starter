// Libs
import { GraphQLServer } from 'graphql-yoga'
import * as data from './data'
import uuid from 'uuid/v4'

let users = [...data.users]
let posts = [...data.posts]
let comments = [...data.comments]

// Type definitions
const typeDefs = `
  type Query {
    me: User!
    greeting(name: String): String!
    posts(query: String): [Post!]!
    users(id: String): [User!]!
    comments(id: String): [Comment!]!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }

  input CreateUserInput {
    name: String!
    email: String!
    age: Int
  }

  input CreatePostInput {
    title: String!
    body: String!
    published: Boolean!
    author: ID!
  }

  input CreateCommentInput {
    text: String!
    post: ID!
    author: ID!
  }

  type Mutation {
    createUser(data: CreateUserInput): User!
    createPost(data: CreatePostInput): Post!
    createComment(data: CreateCommentInput): Comment!
    deleteUser(data: DeleteInput): User!
    deletePost(data: DeleteInput): Post!
    deleteComment(data: DeleteInput): Comment!
  }

  input DeleteInput {
    id: ID!
  }
`

/* eslint-disable no-unused-vars */
// Resolvers
const resolvers = {
  Query: {
    me: () => ({
      id: 'someId',
      name: 'Mark',
      email: 'bruinbeer@gmail.com',
    }),

    greeting: (parent, args, ctx, info) =>
      args.name ? `Hello, ${args.name}!` : 'Hello!',

    users: (parent, args, ctx, info) =>
      !args.id ? users : users.filter(user => user.id === args.id),

    posts: (parent, args, ctx, info) =>
      !args.query
        ? posts
        : posts.reduce(
            (rArr, post) =>
              post.title.toLowerCase().includes(args.query.toLowerCase()) ||
              post.body.toLowerCase().includes(args.query.toLowerCase())
                ? [...rArr, post]
                : rArr,
            [],
          ),

    comments: (parent, args, ctx, info) =>
      !args.id ? comments : comments.filter(comment => comment.id === args.id),
  },
  Post: {
    author: (parent, args, ctx, info) =>
      users.find(user => user.id === parent.author),
    comments: (parent, args, ctx, info) =>
      comments.filter(comment => comment.post === parent.id),
  },
  User: {
    posts: (parent, args, ctx, info) =>
      posts.filter(post => post.author === parent.id),
    comments: (parent, args, ctx, info) =>
      comments.filter(comment => comment.author === parent.id),
  },
  Comment: {
    author: (parent, args, ctx, info) =>
      users.find(user => user.id === parent.author),
    post: (parent, args, ctx, info) =>
      posts.find(post => post.id === parent.post),
  },
  Mutation: {
    createUser: (parent, args, ctx, info) => {
      const emailTaken = users.some(user => user.email === args.data.email)
      if (emailTaken) throw new Error('Email taken')

      const user = {
        id: uuid(),
        ...args.data,
      }
      users = [...users, user]
      return user
    },
    createPost: (parent, args, ctx, info) => {
      const userExists = users.some(user => user.id === args.data.author)
      if (!userExists) throw new Error('User does not exist')

      const post = {
        id: uuid(),
        ...args.data,
      }
      posts = [...posts, post]
      return post
    },
    createComment: (parent, args, ctx, info) => {
      const userExists = users.some(user => user.id === args.data.author)
      if (!userExists) throw new Error('User does not exist')

      const existingPost = posts.find(post => post.id === args.data.post)
      if (!existingPost) throw new Error('Post does not exist')
      if (!existingPost.published) throw new Error('Post is not published')

      const comment = {
        id: uuid(),
        ...args.data,
      }
      comments = [...comments, comment]
      return comment
    },
    deleteUser: (parent, args, ctx, info) => {
      // check if user exists
      const userToDelete = users.find(user => user.id === args.data.id)
      if (!userToDelete)
        throw new Error(`Can't find user for id ${args.data.id}.`)
      // delete comments
      comments = comments.filter(comment => comment.author !== args.data.id)
      // delete posts
      posts = posts.filter(post => post.author !== args.data.id)
      // delete user
      users = users.filter(user => user !== userToDelete)

      return userToDelete
    },
    deletePost: (parent, args, ctx, info) => {
      // check if post exists
      const postToDelete = posts.find(post => post.id === args.data.id)
      if (!postToDelete)
        throw new Error(`Can't find post for id ${args.data.id}.`)
      // delete comments
      comments = comments.filter(comment => comment.post !== args.data.id)
      // delete posts
      posts = posts.filter(post => post !== postToDelete)

      return postToDelete
    },
    deleteComment: (parent, args, ctx, info) => {
      // check if comment exists
      const commentToDelete = comments.find(
        comment => comment.id === args.data.id,
      )
      if (!commentToDelete)
        throw new Error(`Can't find comment for id ${args.data.id}.`)
      // delete comment
      comments = comments.filter(comment => comment !== commentToDelete)

      return commentToDelete
    },
  },
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log('The server is up!'))
