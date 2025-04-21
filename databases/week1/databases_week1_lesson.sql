SELECT * FROM user;
SELECT name, email FROM user;

SELECT * FROM task where status_id = 1;

SELECT * FROM task where status_id = 1 or user_id= 2;

SELECT * FROM task WHERE created > '2017-01-01';

SELECT * FROM user where name LIKE 'p%';

/* Class exercises
Implement the following queries:
Select the names and phones of all users;
Select the name of the user with id=10;
Find how many users exist in the database;
Select the names of the first 5 users in the database;
Select the names of the last 3 users in the database;
Sum all the ids in the user table;
Select all users and order them alphabetically by name;
Find all tasks that include SQL either on the title or on the description;
Find the title of all tasks that the user Maryrose is responsible for;
Find how many tasks each user is responsible for;
Find how many tasks with a status=Done each user is responsible for;*/

SELECT name, phone FROM user;

SELECT name FROM user Where id=10;

SELECT COUNT(*) FROM user; 

SELECT name FROM user LIMIT 5;

SELECT name FROM user ORDER BY id DESC LIMIT 3;

SELECT SUM(id) from user; 

SELECT * FROM user ORDER BY name;

SELECT * FROM task WHERE title LIKE '%SQL%' OR description LIKE '%SQL%';

SELECT * FROM task WHERE user_id = 6;
SELECT title FROM task WHERE user_id = (SELECT id from user where name like '%Maryrose%');
SELECT task.title FROM task JOIN user on task.user_id = user.id WHERE user.name like '%Maryrose%';

SELECT title, user.name from task right join user on task.user_id = user.id;
SELECT title, user.name from task left join user on task.user_id = user.id;


SELECT user_id, COUNT(id) FROM task GROUP BY user_id;

SELECT name, COUNT(task.id) as total_tasks FROM user left join task on user.id = task.user_id Group by user.name;

SELECT user_id, COUNT(status_id=2) FROM task GROUP BY user_id;

SELECT name, COUNT(task.id) as total_tasks FROM user left join task on user.id = task.user_id where task.status_id=3 GROUP BY user.name; 

SELECT user.name, COUNT(task.id) as total_tasks, status.name as status_name
FROM user left 
join task on user.id = task.user_id 
join status on task.status_id = status.id 
where status.name = 'Done' GROUP BY user.name;







