/*Using an entity relationship diagram, design the data model for an application of your choice. 

/* Next, using the entity relationship diagram as a starting point, write all the necessary CREATE TABLE statements to create all tables and relationships (foreign key constraints) for this data model. */

CREATE TABLE course (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255)
);

CREATE TABLE team (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    course_id BIGINT,
    FOREIGN KEY (course_id) REFERENCES course (id)
);

CREATE TABLE hyf_student (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    team_id BIGINT,
    FOREIGN KEY (team_id) REFERENCES team (id)
);

CREATE TABLE computer (
    id BIGINT PRIMARY KEY,
    brand VARCHAR(255),
    model VARCHAR(255),
    hyf_student_id BIGINT UNIQUE,
    FOREIGN KEY (hyf_student_id) REFERENCES hyf_student (id)
);

CREATE TABLE staff (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    team_id BIGINT,
    FOREIGN KEY (team_id) REFERENCES team (id)
);

CREATE TABLE mentor (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    team_id BIGINT,
    FOREIGN KEY (team_id) REFERENCES team (id)
);

CREATE TABLE enrollment (
    hyf_student_id BIGINT,
    course_id BIGINT,
    PRIMARY KEY (hyf_student_id, course_id),
    FOREIGN KEY (hyf_student_id) REFERENCES hyf_student (id),
    FOREIGN KEY (course_id) REFERENCES course (id)
);