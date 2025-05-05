-- Data model

CREATE TABLE meal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    location VARCHAR(255),
    when_time DATETIME,
    max_reservations INT,
    price DECIMAL(10, 2),
    created_date DATE
);

CREATE TABLE reservation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255),
    FOREIGN KEY (meal_id) REFERENCES meal (id)
);

--Drop foreign key constraint and re-add it with ON DELETE CASCADE to ensure that when a meal is deleted, all associated reservations are also deleted. (Otherwise you would get an error in query 5)
ALTER TABLE reservation DROP FOREIGN KEY reservation_ibfk_1;

ALTER table reservation
ADD FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE

CREATE TABLE review (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    meal_id INT,
    stars INT,
    created_date DATE,
    FOREIGN KEY (meal_id) REFERENCES meal (id)
);

--Drop foreign key constraint and re-add it with ON DELETE CASCADE to ensure that when a meal is deleted, all associated reservations are also deleted. (Otherwise you would get an error in query 5)
ALTER TABLE review DROP FOREIGN KEY review_ibfk_1;

ALTER table review
ADD FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE

ALTER table review
ADD FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE;

-- Sample data for Meal table
INSERT INTO
    meal (
        title,
        description,
        location,
        when_time,
        max_reservations,
        price,
        created_date
    )
VALUES (
        'Italian Dinner',
        'A delicious Italian meal with pasta and wine.',
        'Rome',
        '2025-05-10 19:00:00',
        20,
        25.50,
        '2025-05-01'
    ),
    (
        'Sushi Night',
        'An authentic Japanese sushi experience.',
        'Tokyo',
        '2025-05-15 18:30:00',
        15,
        40.00,
        '2025-05-02'
    ),
    (
        'BBQ Feast',
        'A classic BBQ with ribs, chicken, and sides.',
        'Texas',
        '2025-05-20 17:00:00',
        30,
        35.00,
        '2025-05-03'
    ),
    (
        'Vegan Brunch',
        'A healthy vegan brunch with smoothies and salads.',
        'Berlin',
        '2025-05-25 10:00:00',
        25,
        20.00,
        '2025-05-04'
    ),
    (
        'French Cuisine',
        'A fine dining experience with French delicacies.',
        'Paris',
        '2025-05-30 20:00:00',
        10,
        50.00,
        '2025-05-05'
    );

-- Sample data for Review table
INSERT INTO
    reservation (
        number_of_guests,
        meal_id,
        created_date,
        contact_phonenumber,
        contact_name,
        contact_email
    )
VALUES (
        2,
        1,
        '2025-05-05',
        '1234567890',
        'John Doe',
        'john.doe@example.com'
    ),
    (
        4,
        2,
        '2025-05-06',
        '9876543210',
        'Jane Smith',
        'jane.smith@example.com'
    ),
    (
        3,
        3,
        '2025-05-07',
        '5555555555',
        'Alice Johnson',
        'alice.johnson@example.com'
    ),
    (
        1,
        4,
        '2025-05-08',
        '4444444444',
        'Bob Brown',
        'bob.brown@example.com'
    ),
    (
        5,
        5,
        '2025-05-09',
        '3333333333',
        'Charlie White',
        'charlie.white@example.com'
    );

-- Sample data for Review table
INSERT INTO
    review (
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'Amazing Dinner',
        'The Italian dinner was fantastic! Highly recommend.',
        1,
        5,
        '2025-05-11'
    ),
    (
        'Great Sushi',
        'Fresh and delicious sushi. A bit pricey but worth it.',
        2,
        4,
        '2025-05-16'
    ),
    (
        'BBQ Heaven',
        'The BBQ was amazing, especially the ribs!',
        3,
        5,
        '2025-05-21'
    ),
    (
        'Healthy and Tasty',
        'The vegan brunch was refreshing and delicious.',
        4,
        4,
        '2025-05-26'
    ),
    (
        'Exquisite French Cuisine',
        'The French meal was a true fine dining experience.',
        5,
        5,
        '2025-05-31'
    );