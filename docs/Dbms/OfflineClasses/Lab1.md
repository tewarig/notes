# Lab one 
date - 8 nov 2021

# Solve following Questions :-
- Create a table employee with following details.
  - First Name
  - Last Name
  - Age 
  - Title 
  - Salary
```sql
create table employee(
 fistName varchar(255),
 lastName varchar(255),
 age number,
 title varchar(255),
 salary number
 )
```
- Input some values in the table
```sql
insert into employee values('Gaurav','Tewari',20,'Intern',35000);
insert into employee values('Akshat','Thapiyal',20,'Intern',35000);
insert into employee values('Ayush','TreadOwl',20,'Intern',35000);
insert into employee values('Anmol','Malik',20,'Intern',35000);
insert into employee values('Zero','Two',20,'Intern',25000);
insert into employee values('Ren','CHann',20,'Intern',25000);
insert into employee values('Ram','Laal',20,'Cook',25000);

```
- Select all the data from the table employess
```sql
select * from employee;
```
- Select first name and last name from of employee's under age of 30.
```sql
select fistName, lastName from employee where age<30;

```
- Select fist name and age of everyone having salary greater than 30000.
```sql
select fistName, lastName from employee where salary>=35000;

```
- Select name ,last amd salary of the person who is a Intern
```sql
select fistName, lastName from employee where title='Intern';
```
- Select name ,last amd salary of the person who is a Cook


- Select first name whoes last name has a 'a'.
```sql
select fistName, lastName from employee where fistName like '%a%';

```

- Select all the details where last name starts with a 'T'.
```sql
select * from employee where lastName like 'T%';

```


# Extra 
- Now add a primary key emp id in this table
- print the details of emp getting more than avg salary of everyone


- problem statment
- concept
- coding part / algo and flow chart
- output
