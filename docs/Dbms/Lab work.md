## SQL

DDL: create, alter, drop, truncate, rename
DML: select, insert, update, delete,
DCL: grant, revoke
TCL: commit, rollback

char() - Fixed Space Allocation
varchar() - Dynamic Space Allocation (ANSI Standard)
varchar2() - Dynamic Space Allocation (Oracle Standard) [Mostly Used]

tuples: rows

Student(roll number, sname, address)

# CREATE TABLE

```
create table student(rollnumber int, sname varchar2(15), address varchar2(25));

DESC student
```

# INSERT

```
insert into student values (101, 'Harsh', 'Dehradun')

insert into student values (101, 'Abhi', 'Delhi')
```

# DISPLAY

```
select \* from student

select rollnumber, sname, address from student
```

# SEARCH

```
select \* from student where address='Dehradun'
```

# DELETE ALL

```
delete form student
```

# DELETE SPECIFIC

```
delete from student where address='Delhi'

Employee (name, email, phone_number, hire_date, dep_id, salary)
```

# CREATE TABLE

```
create table employee (name varchar2(10),
email varchar2(20),
phone_number number(10),
hire_date date,
dep_id number,
salary number,
primary key(name, email,phone_number));

desc employee
```

# INSERT

```
insert into employee values('aman','aman@gmail.com',757573,'10-07-2009',105,60000)
```

# DISPLAY

```

select \* from employee

select \* from employee where dep_id=104 or dep_id=105

select \* from employee where salary between 25000 and 26000

/_ STARTING WITH 'a' _/

select \* from employee where name like 'a%'

/_ SECOND LAST CHARACTER WITH 'u' _/

select \* from employee where name like '%u\_'
```
