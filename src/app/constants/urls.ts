const baseURL = "https://jsonplaceholder.typicode.com"
const users = `${baseURL}/users`
const posts = `${baseURL}/posts`
const comments = `${baseURL}/comments`
const urls = {
  users: {
    base: users,
    byId:(id: number):string => `${users}/${id}`
  },
  posts: {
    base: posts
  },
  comments: {
    base: comments,
    byPostId: (id: number): string => `${comments}?postId=${id}`
  }
}

export {
  urls
}
