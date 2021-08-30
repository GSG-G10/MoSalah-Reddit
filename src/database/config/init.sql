BEGIN;
DROP TABLE IF EXISTS users, posts, comments CASCADE;
CREATE TABLE  users (
    id SERIAL PRIMARY KEY,
    users_name VARCHAR(100) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
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
INSERT INTO users (users_name,first_name, last_name, email, password) VALUES
('msahah7','mo', 'salah', 'mosalah@gmail.com','salah1234'),
('ahmed5','ahmed', 'salah', 'ahmedsalah@gmail.com','salah1234'),
('ali6','ali', 'salah', 'alidsalah@gmail.com','salah1234');
COMMIT;