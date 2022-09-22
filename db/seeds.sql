INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Managment"),
       ("Sales");
  
INSERT INTO role(title, salary, department_id)
VALUES ("Human Resources Director", 200000, 0),
       ("Human Resources Assistant", 30000, 1),
       ("Managment Director", 150000, 2),
       ("Managment Assistant", 12000, 3),
       ("Sales Manager", 19000, 4), 
       ("Sales Assistant", 25000, 5),
       ("Promotions", 10000, 6)
       ("Promotions Assistant", 900, 7);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Homer", "Simpson", 1, 01),
       ("Marge", "Simpson", 2, 02),
       ("Ned", "Flanders", 3, 03),
       ("Bart", "Simpson", 4, NULL),
       ("Lisa", "Simpson", 5, NULL),
       ("Maude", "Flanders", 6, 06),
       ("Rod", "Flanders", 7, NULL),
       ("Todd", "Flanders", 8. NULL),