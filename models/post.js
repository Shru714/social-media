// Mock data for posts
let posts = [
  { id: 1, username: 'alice', content: 'Hello world! This is my first post.', timestamp: '2 mins ago' },
  { id: 2, username: 'bob', content: 'Enjoying a sunny day at the park 🌞', timestamp: '5 mins ago' },
  { id: 3, username: 'charlie', content: 'Anyone up for a game tonight?', timestamp: '10 mins ago' }
];

module.exports = {
  getAll: () => posts,
  getById: id => posts.find(p => p.id === id),
  create: data => {
    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      username: data.username || 'anonymous',
      content: data.content,
      timestamp: 'just now'
    };
    posts.push(newPost);
    return newPost;
  },
  update: (id, data) => {
    const post = posts.find(p => p.id === id);
    if (post) {
      post.content = data.content || post.content;
      return post;
    }
    return null;
  },
  delete: id => {
    const idx = posts.findIndex(p => p.id === id);
    if (idx > -1) {
      posts.splice(idx, 1);
      return true;
    }
    return false;
  }
};
