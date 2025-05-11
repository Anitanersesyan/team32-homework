CREATE TABLE SoMe_user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    registration_datetime DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE post (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    creation_datetime DEFAULT CURRENT_TIMESTAMP,
    update_datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    SoMe_user_id BIGINT NOT NULL,
    FOREIGN KEY (SoMe_user_id) REFERENCES SoMe_user(id) ON DELETE CASCADE
);

CREATE TABLE comment (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    creation_datetime DATETIME NOT NULL,
    update_datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
    SoMe_user_id BIGINT NOT NULL,
    post_id BIGINT,
    parent_comment_id BIGINT,
    FOREIGN KEY (SoMe_user_id) REFERENCES SoMe_user(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE,
    FOREIGN KEY (parent_comment_id) REFERENCES comment(id) ON DELETE CASCADE
);

CREATE TABLE reaction (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    type ENUM('like', 'highfive', 'laugh', 'cry') NOT NULL,
    SoMe_user_id BIGINT NOT NULL,
    post_id BIGINT,
    comment_id BIGINT,
    creation_datetime DEFAULT CURRENT_TIMESTAMP,
    CHECK (
        (post_id IS NOT NULL AND comment_id IS NULL) OR
        (post_id IS NULL AND comment_id IS NOT NULL)
    ),
    UNIQUE (SOMe_user_id, post_id, type),
    UNIQUE (SoMe_user_id, comment_id, type),
    FOREIGN KEY (SoMe_user_id) REFERENCES SoMe_user(id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE,
    FOREIGN KEY (comment_id) REFERENCES comment(id) ON DELETE CASCADE
);

CREATE TABLE friendship (
    friendship_datetime DATETIME NOT NULL,
    SoMe_user1_id BIGINT NOT NULL,
    SoMe_user2_id BIGINT NOT NULL,
    PRIMARY KEY (SoMe_user1_id, SoMe_user2_id),
    FOREIGN KEY (SoMe_user1_id) REFERENCES SoMe_user(id) ON DELETE CASCADE,
    FOREIGN KEY (SoMe_user2_id) REFERENCES SoMe_user(id) ON DELETE CASCADE,
    CHECK (SoMe_user1_id < SoMe_user2_id)
);
