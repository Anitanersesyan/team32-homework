/*Part 2: School database
Create a new database containing the following tables: */

-- 1. Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE class (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    begins DATE,
    ends DATE
) ENGINE = InnoDB;

-- 2. Student: with the columns: id, name, email, phone, class_id (foreign key)CREATE TABLE student (
CREATE TABLE student (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    class_id INT UNSIGNED REFERENCES class (id)
) ENGINE = InnoDB;

/*If you are done with the above tasks, you can continue with these advanced tasks: */

-- 3. Create an index on the name column of the student table.
CREATE INDEX idx_student_name ON student (name);

-- 4.Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD COLUMN status ENUM(
    'not-started',
    'ongoing',
    'finished'
) DEFAULT 'not-started';