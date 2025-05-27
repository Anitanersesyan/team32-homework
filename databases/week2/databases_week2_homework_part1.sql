/*Part 1: Working with tasks
Write the following sql queries: */

-- 1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id:
INSERT INTO
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
VALUES (
        'New Task',
        'This is a new task',
        NOW(),
        NOW(),
        null,
        1,
        1
    );

-- 2. Change the title of a task:
UPDATE task SET title = 'Updated Task Title' WHERE id = 36;

-- OR:
UPDATE task t1
SET
    t1.title = 'Updated Task Title'
WHERE
    t1.id = (
        SELECT t2.id
        FROM (
                SELECT *
                FROM task
            ) t2
        ORDER BY t2.id desc
        limit 1
    );

-- 3. Change a task due date:
UPDATE task SET due_date = '2025-12-30' WHERE id = 36;

-- 4. Change a task status:
UPDATE task SET status_id = 2 WHERE id = 36;

-- OR:
UPDATE task SET status_id = 2 WHERE id = 36;

-- 5. Mark a task as complete:
UPDATE task SET status_id = 3 WHERE id = 36;

-- OR:
UPDATE task
SET
    status_id = (
        SELECT id
        FROM status
        WHERE
            name = 'Done'
    )
WHERE
    id = 36;

-- 6. Delete a task:
DELETE FROM task WHERE id = 37;