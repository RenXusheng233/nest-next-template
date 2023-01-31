import { gql } from 'graphql-request';

export const GET_LIST_BLOG_POSTS = gql`
  query {
    listBlogPosts {
      id
      title
    }
  }
`;

export const GET_BLOG_POST_BY_ID = gql`
  query ($input: GetBlogInput!) {
    getBlogPostById(input: $input) {
      title
    }
  }
`;
