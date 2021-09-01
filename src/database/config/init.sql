BEGIN;
DROP TABLE IF EXISTS users, posts, comments CASCADE;
CREATE TABLE  users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(225) NOT NULL
);
CREATE TABLE  posts (
    id SERIAL PRIMARY KEY,
    users_id INTEGER REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    data_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    votes INTEGER NOT NULL DEFAULT 1
);
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    users_id INTEGER REFERENCES users(id),
    data_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    votes INTEGER NOT NULL DEFAULT 1
);
INSERT INTO users (user_name,email, password) VALUES
('msahah7','mosalah@gmail.com','salah1234'),
('ahmed5','ahmedsalah@gmail.com','salah1234'),
('ali6','alidsalah@gmail.com','salah1234');
INSERT INTO posts (users_id, title, content) VALUES
(1,'Mohammed Salah','He is a best football palyer'),
(2,'Messi','He is a best football palyer'),
(3,'Suaraz','He is a best football palyer');
COMMIT;