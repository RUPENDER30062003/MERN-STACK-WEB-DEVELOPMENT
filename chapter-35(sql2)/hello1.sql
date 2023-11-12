create database if not exists collagepractice;
use collagepractice;
create table teacher (id int primary key ,name varchar(30),subject varchar(50),salary int);
insert into teacher (id ,name ,subject,salary)
 values(23,"ajay","math",50000),(47,"bharat","english",60000),(18,"chetan","chemistry",75000),
 (9,"divya","physics","70000");
 
 select * from teacher;
 
 select * from teacher
 where salary>55000;
 
 alter table teacher 
 change column salary ctc int;
 
 update teacher 
 set ctc=ctc+ctc*0.25;
 
 
 alter table teacher
 add column city varchar(50) default "gurgaon";
 
 alter table teacher 
 drop column ctc;
 
 create table student(
 rollno int primary key,
 name varchar(30),
 city varchar(30),
 marks int
 );
 
INSERT INTO student
(rollno, name, city, marks)
VALUES
 (110,"adam","Delhi",76),
 (108,"bob","Mumbai",65),
 (124, "casey","Pune",94),
 (112,"duke","Pune",80);

 
 SELECT * FROM student
WHERE marks > 75;


select distinct city from student;

select city from student group by city;

select city, max(marks) from student group by city;

select avg(marks) from student;

alter table student add column grade varchar(2);

update student set grade="O" where marks>=80;

update student set grade="A" where marks>=70 and marks<80;

update student set grade="B" where marks>=60 and marks<70;