// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

function Post(author, title, contents) {
    this.id = posts.length + 1;
    this.author = author;
    this.title = title;
    this.contents = contents;
}

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests

server.post('/posts', (req, res) => {
    const { author, title, contents } = req.body;
    if (!author || !title || !contents) {
        return res.status(STATUS_USER_ERROR)
            .json({error: "No se recibieron los parámetros necesarios para crear el Post"});
    } 
    const newPost = new Post (author, title, contents);
    posts.push(newPost);
    res.json(newPost);
})

server.post('/posts/author/:author', (req, res) => {
    const { title, contents } = req.body;
    const { author } = req.params;
    if (!title || !contents) {
        return res.status(STATUS_USER_ERROR)
            .json({error: "No se recibieron los parámetros necesarios para crear el Post"});
    } 
    const newPost = new Post (author, title, contents);
    posts.push(newPost);
    res.json(newPost);
})

server.get('/posts', (req, res) => {
    const { term } = req.query;
    if (term) {
        return res.json(posts.filter(p => p.title.includes(term) || p.contents.includes(term)));
    }
    res.json(posts);
})

server.get('/posts/:author', (req, res) => {
    const { author } = req.params;
    const postByAuthor = posts.filter(p => p.author === author);
    if (!postByAuthor.length) return res.status(STATUS_USER_ERROR).json({error: "No existe ningun post del autor indicado"})
    res.json(postByAuthor);
})

server.get('/posts/:author/:title', (req, res) => {
    const { author, title } = req.params;
    const postByAuthorTitle = posts.filter(p => p.author === author && p.title === title);
    if (!postByAuthorTitle.length) return res.status(STATUS_USER_ERROR).json({error: "No existe ningun post con dicho titulo y autor indicado"})
    res.json(postByAuthorTitle);
})

server.put('/posts', (req, res) => {
    const { title, contents, id } = req.body;
    if (!title || !contents || !id) {
        return res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para modificar el Post"});
    }
    let postFound = posts.find(p => p.id === parseInt(id));
    if (!postFound) {
        return res.status(STATUS_USER_ERROR).json({error: "No se recibieron un ID válido"});
    }
    postFound.title = title;
    postFound.contents = contents;
    res.json(postFound);
})

server.delete('/posts', (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(STATUS_USER_ERROR).json({error: "No se recibió parametro ID"});
    }
    let postFound = posts.find(p => p.id === id);
    if (!postFound) {
        return res.status(STATUS_USER_ERROR).json({error: "No existe el ID indicado"});
    }
    posts = posts.filter(p => p.id !== id);
    res.json({ success: true });
})

server.delete('/author', (req, res) => {
    const { author } = req.body;
    if (!author) {
        return res.status(STATUS_USER_ERROR).json({error: "No se recibió parametro Author"});
    }
    let postFound = posts.find(p => p.author === author);
    if (!postFound) {
        return res.status(STATUS_USER_ERROR).json({error: "No existe el autor indicado"});
    }
    let deletedPosts = posts.filter(p => p.author === author);
    posts = posts.filter(p => p.author !== author);
    res.json(deletedPosts);
})


module.exports = { posts, server };
