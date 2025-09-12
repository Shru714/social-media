const Post = require('../models/post');

exports.getAllPosts = (req, res) => {
  res.json(Post.getAll());
};

exports.getPostById = (req, res) => {
  const post = Post.getById(parseInt(req.params.id));
  if (post) res.json(post);
  else res.status(404).json({ error: 'Post not found' });
};

exports.createPost = (req, res) => {
  const newPost = Post.create(req.body);
  res.status(201).json(newPost);
};

exports.updatePost = (req, res) => {
  const updated = Post.update(parseInt(req.params.id), req.body);
  if (updated) res.json(updated);
  else res.status(404).json({ error: 'Post not found' });
};

exports.deletePost = (req, res) => {
  const deleted = Post.delete(parseInt(req.params.id));
  if (deleted) res.json({ success: true });
  else res.status(404).json({ error: 'Post not found' });
};
