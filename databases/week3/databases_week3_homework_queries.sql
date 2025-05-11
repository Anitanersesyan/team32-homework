--Queries
-- Queries for Meal table

-- 1. Get all meals
SELECT * FROM meal;

-- 2. Add a new meal
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
        'Spanish Tapas',
        'A delightful evening of Spanish tapas and wine.',
        'Barcelona',
        20,
        30.00,
        '2025-05-10'
    );

-- 3. Get a meal with any id, fx 1
SELECT * FROM meal WHERE id = 1;

-- 4. Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET title = 'Italian Feast', price = 30.00 WHERE id = 1;

-- 5. Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 5;

-- Queries for Reservation table

-- 1. Get all reservations
SELECT * FROM reservation;

-- 2. Add a new reservation
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
        3,
        1,
        '2025-05-10',
        '2222222222',
        'David Green',
        'david.green@example.com'
    )

-- 3. Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id = 1;

-- 4. Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET
    number_of_guests = 4,
    contact_name = 'David Brown'
WHERE
    id = 1;

-- 5. Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 5;

-- Queries for Review table

-- 1. Get all reviews
SELECT * FROM review;

-- 2. Add a new review
INSERT INTO
    review (
        title,
        description,
        meal_id,
        stars,
        created_date
    )
VALUES (
        'Mediterranean Delight',
        'A delightful Mediterranean dining experience.',
        1,
        5,
        '2025-05-10'
    );

-- 3. Get a review with any id, fx 1
SELECT * FROM review WHERE id = 1;

-- 4. Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET
    title = 'Italian Dinner Review',
    stars = 4
WHERE
    id = 1;

-- 5. Delete a review with any id, fx 1
DELETE FROM review WHERE id = 5;

--Additional queries
--Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries
-- Functionality

-- 1. Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE price < 90;

-- 2. Get meals that still has available reservations
SELECT *
FROM meal
WHERE max_reservations > (
    SELECT COALESCE(SUM(number_of_guests), 0)
    FROM reservation
    WHERE meal_id = meal.id
);

-- 3. Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE '%Brunch%';

-- 4. Get meals that has been created between two dates
SELECT *
FROM meal
WHERE
    created_date BETWEEN '2025-05-01' AND '2025-05-10';

-- 5. Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 5;

-- 6. Get the meals that have good reviews
SELECT *
FROM meal
    JOIN review ON meal.id = review.meal_id
WHERE
    review.stars >= 4;

-- 7. Get reservations for a specific meal sorted by created_date
SELECT *
FROM reservation
WHERE
    meal_id = 1
ORDER BY created_date DESC;

-- 8. Sort all meals by average number of stars in the reviews
SELECT meal.title, AVG(review.stars) AS average_stars
FROM meal
    LEFT JOIN review ON meal.id = review.meal_id
GROUP BY
    meal.id,
    meal.title
ORDER BY average_stars DESC;
