import { openDb } from "../config/configDb.js";

const db = await openDb();

// inicio ROTAS POST
export async function newUser(req, res) {
    let { name, username, email, password } = req.body;

    try {
        await db.run(`INSERT INTO Users (name, username, email, password) VALUES (?, ?, ?, ?)`, [name, username, email, password]);
        res.status(200).json({
            "statusCode": 200,
            "message": "Usuário criado com sucesso!"
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            "statusCode": 500,
            "message": "Erro ao criar usuário"
        })
    }
}

export async function createPost(req, res) {
    let { id_user, title, body } = req.body;

    try {
        await db.run(`INSERT INTO Posts (id_user, title, body) VALUES (?, ?, ?)`, [id_user, title, body])
        res.status(200).json({
            "statusCode": 200,
            "message": "Post criado com sucesso!"
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            "statusCode": 500,
            "message": "Erro ao criar post"
        });
    }
}

export async function createComent(req, res) {
    let { id_post, id_user, content } = req.body;

    try {
        await db.run(`INSERT INTO Coments (id_post, id_user, content) VALUES (?, ?, ?)`, [id_post, id_user, content])
        res.status(200).json({
            "statusCode": 200,
            "message": "Comentário criado com sucesso!"
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            "statusCode": 500,
            "message": "Problemas ao criar comentário"
        })
    }
}
// fim ROTAS POST

// inicio ROTAS GET
export async function getUsers(req, res) {
    try {
        await db.all(`SELECT * FROM Users`)
        .then(users => res.status(200).json(users))
    } catch (err) {
        console.error(err);
        res.status(500).json({
            "statusCode": 500,
            "message": "Erro ao buscar usuários"
        })
    }
}

export async function getPosts(req, res) {
    try {
        await db.all(`SELECT * FROM Posts`)
        .then(posts => res.status(200).json(posts))
    } catch (err) {
        console.error(err);
        res.status(500).json({
            "statusCode": 500,
            "message": "Erro ao buscar posts"
        })
    }
}

export async function getComents(req, res) {
    let id_post = req.params.id_post;

    try {
        await db.all(`SELECT * FROM Coments WHERE id_post = ?`, [id_post])
        .then(coments => res.status(200).json(coments))
    } catch (err) {
        console.error(err);
        res.status(500).json({
            "statusCode": 500,
            "message": "Erro ao buscar comentários"
        })
    }
}

export async function getUserPosts(req, res) {
    let id_user = req.params.id_user;

    try {
        await db.all(`SELECT * FROM Posts WHERE id_user = ?`, [id_user])
        .then(userPosts => res.status(200).json(userPosts))
    } catch (err) {
        console.error(err);
        res.status(500).json({
            "statusCode": 500,
            "message": "Erro ao buscar comentários"
        })
    }
}
// fim ROTAS GET