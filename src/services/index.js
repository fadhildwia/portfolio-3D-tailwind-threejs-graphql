import { request, gql } from "graphql-request"

const graphqlAPI = import.meta.env.VITE_PUBLIC_GRAPHCMS_ENDPOINT

export const getTechs = async () => {
  const query = gql`
    query MyQuery {
      techsConnection {
        edges {
          node {
            id
            name
            image {
              url
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.techsConnection.edges
}