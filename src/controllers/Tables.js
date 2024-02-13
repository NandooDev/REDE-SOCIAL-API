import { openDb } from '../config/configDb.js';

export async function createTableUsers() {
    openDb().then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS Users(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(100) NOT NULL,
            username VARCHAR(20) NOT NULL,
            email VARCHAR(200) NOT NULL,
            password VARCHAR(30) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`)
    })
}

export async function createTablePosts() {
    openDb().then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS Posts(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            id_user INTEGER NOT NULL,
            title VARCHAR(50) NOT NULL,
            body VARCHAR(500) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (id_user) REFERENCES Users (id) ON DELETE CASCADE ON UPDATE CASCADE
        )`)
    })
}

export async function createTableComents() {
    openDb().then(db => {
        db.exec(`CREATE TABLE IF NOT EXISTS Coments(
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            id_post INTEGER NOT NULL,
            id_user INTEGER NOT NULL,
            content VARCHAR(200) NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (id_user) REFERENCES Users (id) ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (id_post) REFERENCES Posts (id) ON DELETE CASCADE ON UPDATE CASCADE
        )`)
    })
}