--psql efosdan
--\c teamworkdb

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_firstname VARCHAR(255)  NOT NULL,
    user_lastname VARCHAR(255)  NOT NULL,
    user_email VARCHAR(255)  NOT NULL UNIQUE,
    user_password VARCHAR(255)  NOT NULL 
);


SELECT * FROM users;

INSERT INTO users (user_firstname,user_lastname,user_email,user_password) VALUES ('Efosa','Daniel','efosdan@gmail.com','cocakola')
INSERT INTO users (user_firstname,user_lastname,user_email,user_password) VALUES ('ekiuwa','yvpnne','ekiuwa@gmail.com','passing')