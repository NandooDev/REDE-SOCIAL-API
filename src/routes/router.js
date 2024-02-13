import { Router } from 'express';
import { createTableComents, createTablePosts, createTableUsers } from '../controllers/Tables.js';
import { newUser, createPost, createComent, getUsers, getPosts, getComents, getUserPosts } from '../controllers/Functions.js';

createTableComents();
createTablePosts();
createTableUsers();

const router = Router();

router.get("/", (req, res) => {
    res.json({
        "statusCode": 200,
        "message": "Rotas ok"
    })
})
router.get("/users", getUsers)
router.get("/user/posts/:id_user", getUserPosts)
router.get("/posts", getPosts)
router.get("/post/coments/:id_post", getComents)
router.post("/newuser", newUser)
router.post("/newpost", createPost)
router.post("/newcoment", createComent)

export default router;