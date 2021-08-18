# dbms notes md

# how to create a table

create table \*name
example

```
create table employees (emp_id number (3),
                      first_name varchar2(10),
                      last_name varchar2(10),
                      email varchar2(20),
                      phone_number number (10),
                      hire_date date,
                      dep_id number,
                      salary number)
```

# How to view structure of a table

DESC \*table name

```
desc employees

```

# how to insert in table

```
insert into  employees(emp_id,first_name,last_name,email,phone_number,hire_date,dep_id,salary) values (2,'data','data','dd@gmail.com',1234567890,TO_DATE('01.12.2013','DD-MM-YYYY'),234343,90000)

```

# How to search particular data from a feild

select \* from employees where dep_id=50

- example 1

```
select * from employees where dep_id=50

```

- example 2

```
select * from employees where salary>25000 and salary<32000

```

merge two column into one :)

```
select first_name||' '||last_name as full_name from employees
```

searching the last characters

```
select first_name,last_name,dep_id from employees where first_name like '%t'
```

adding new feilds and listing them into decending order

```
select emp_id , first_name, salary,(salary*12) as Annual_Salary from employees order by (Annual_Salary) DESC
```

find null value in table

```
select first_name,phone_number from employees where phone_number = NULL
```

```
select * from employees where salary>3000 and dep_id=12
```

using system date

```
select first_name,email,salary,round((sysdate-hire_date)/365) as Year_of_experience from employees
```

get hire date of employees

```
select first_name,email,phone_number,to_char(hire_Date,'day') as hire_day from employees order by (hire_date) ASC

```

get date and time from system

```
select first_name,email,phone_number,to_char(hire_Date,'day') as hire_day from employees order by (hire_date) ASC

```

using the \$ format

```
select first_name,email,phone_number,to_char(hire_Date,'day') as hire_day from employees order by (hire_date) ASC

```

replace null values

```
Select first_name,email,hire_Date,nvl(last_name,0) from employees

```

- how to do multiplication ?

```
select (3*4) as product from employees

```

- Make a single column and searching

```
select first_name||''||last_name as full_name from employees where salary >5000
```

- Print first 3 letters of a substring queries

```
select substr(first_name,0,3) from employees

```

- Writing hello world in sql

```
select 'Hello World' as string from dual

```

- Display three numbers in a column

```
select 1,2,3 from dual
```

- solving a expression in sql

```
select (3+7*3-2) as solution from dual

```

- extra hard search example
