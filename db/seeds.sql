USE employee_tracker;

INSERT INTO departments (department_name)
VALUES
("Management"),
("Bakery"),
("Produce"),
("Deli"),
("Meat");

INSERT INTO roles (title, salary, department_id)
VALUES
("Upfront Managers", 80000.00, 1),
("Meat Clerk", 20000.00, 5),
("Deli Clerk", 20000.00, NULL),
("Baker", 35000.00, 2),
("Produce Clerk", 35000.00, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
("Evan", "Teems", 1, NULL),
("Devin", "Shimane", 5, 1),
("Ryugen", "Yasuo", 3, 1),
("Cole", "Norcio", 4, 1),
("Robert", "Wyatt", 3, 1),
("Evan", "Nouchi", 3, 1),
("CJ", "Reyes", 3, 1),
("Horace", "Grant", 2, 1),
("Rock", "Lee", 2, 1),
("Adela", "Kerr", 2, 1),
("Cheren", "Gass", 4, 1),
("Greg", "Oden", 3, 1),
("Brandon", "Roy", 4, 1),
("Kwame", "Brown", 4, 1),
("Cristiano", "Felicio", 3, 1),
("Heather", "Hubbert", 2, 1),
("Vanessa", "Bermudez", 5, 1),
("Onyeka", "Okongwu", 5, 1);