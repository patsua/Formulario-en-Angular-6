CREATE DATABASE ng_games_db;
USE ng_games_db;
CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAP DEFAULT CURRENT_TIMESTAMP
); 
DESCRIBE games;
CREATE TABLE accionesproceso(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    accion VARCHAR(255),
    proceso VARCHAR(255),
    responsable VARCHAR(200),
    fechaini VARCHAR(50),
    fechafin VARCHAR(50),
    actividades VARCHAR(50)
);
DESCRIBE acciones_proceso;