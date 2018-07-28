export const GITHUB_REACTION_INFO_QUERY = `
  query($owner: String!, $name: String!, $number: Int!,
    $reviewsCount: Int!, $discussionsPerReview: Int!, $commentsCount: Int!) {
    rateLimit {
      limit
      remaining
      resetAt
    }
    repository(owner:$owner, name:$name) {
      pullRequest(number: $number) {
          reviews(first: $reviewsCount) {
            nodes {
              comments(first: $discussionsPerReview) {
                nodes {
                  id
                  reactions(first: 100) {
                    nodes {
                      id
                      createdAt
                      content
                      user {
                        login
                        name
                      }
                    }
                  }
                }
              }
            }
          }
          comments(first:$commentsCount) {
            nodes {
              id
              reactions(first: 100) {
                nodes {
                  id
                  createdAt
                  content
                  user {
                    login
                    name
                  }
                }
              }
            }
          }
        }
    }
  }`;
