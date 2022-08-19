
/*Finding average */
SELECT job_id ,avg(min_salary + max_salary) as Average, min_salary as Minimum , max_salary as Maximum FROM jobs  GROUP BY job_id,min_salary,max_salary

/*Finding Number of employees in each department */
SELECT department_name as Department_Name,COUNT(e.department_id) as Number_of_employee from departments d join employees e on
e.department_id = d.department_id GROUP BY department_name

/*Finding department name , department id from employee  */
SELECT last_name, d.department_id , d.department_name from employees e join departments d on  d.department_id = e.department_id
GROUP BY d.department_name,e.last_name,d.department_id

/*Finding specific data from 2 tables without common coloumn  */
SELECT j.job_title , l.street_address, l.city, l.country_id
FROM jobs j, locations l where j.job_title='Human Resources Representative' AND l.street_address='8204 Arthur St';

/*Finding specific data from 3 tables without common coloumn  */
SELECT e.last_name , d.department_name, l.location_id, l.city
FROM employees e, departments d, locations l

/*Finding lastname and depart name  */
SELECT last_name , d.department_name from employees e join departments d on  d.department_id = e.department_id
GROUP BY d.department_name,e.last_name,d.department_id

/*Finding data from 3 table  */
SELECT e.last_name ,d.department_id as department_number, d.department_name, j.job_title
FROM employees e, departments d, jobs j where d.department_id = 9 OR d.department_id = 6
OR d.department_id = 10 OR d.department_id = 3

/*Finding data from a table  */
SELECT e.first_name as Employee_Name, e.phone_number as Employee_Number, manager_id as Manager FROM employees e

/*Finding lastname and depart number  */
SELECT last_name , d.department_id as department_number from employees e join departments d on  d.department_id = e.department_id
GROUP BY d.department_name,e.last_name,d.department_id

/*Finding data from no realational tables*/
Select e.first_name, j.job_title, d.department_id, j.max_salary from employees e, jobs j, departments d

/*Sub_Query Section */
/*Solution 1 */
select last_name,department_id from employees order by last_name

/*Solution 2 */
select employee_id, first_name, salary from employees where salary in (select salary from employees where salary >=8200) order by salary

/*Solution 3 */
select employee_id as 'Employee Number', last_name from employees where employee_id in 
(select employee_id from employees  where employee_id in(103,105,112,118,122,145))

/*Solution 4 */
select last_name,department_id as 'Department Number', job_id from employees where last_name =(select last_name from employees
where last_name='Mavris' )

/*Solution 5 */
select last_name, salary from employees where department_id in (select department_id from employees
where salary>=8000 AND salary<=17000)

/*Solution 6 */
select department_id as 'Department Number', last_name, job_id from employees where department_id in
(select department_id from employees where job_id=9)

/*Solution 7 */
select employee_id,last_name,salary from employees where employee_id in (select employee_id from employees where employee_id in (103,145))

/*Solution 8 */
select first_name from employees where department_id in (select department_id from employees where phone_number is null)

/*Solution 9 */
select last_name, salary from employees where department_id in (select department_id from employees where department_id=9)

/*Solution 10*/
select first_name, salary,department_id from employees where employee_id in (select employee_id from employees 
where employee_id in (101,102,145))