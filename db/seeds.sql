INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Managment"),
       ("Sales");

      
  
INSERT INTO role(title, salary, department_id)
VALUES ("Human Resources Director", 200000, 1),
       ("Human Resources Assistant", 30000, 1),
       ("Managment Director", 150000, 2),
       ("Managment Assistant", 12000, 2),
       ("Sales Manager", 19000, 3), 
       ("Sales Assistant", 25000, 3);




INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Homer", "Simpson", 1, NULL),
       ("Marge", "Simpson", 2, 1),
       ("Ned", "Flanders", 3, NULL),
       ("Bart", "Simpson", 4, 3),
       ("Lisa", "Simpson", 5, NULL),
       ("Maude", "Flanders", 6, 5);

     