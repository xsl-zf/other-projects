create database bookDatabase;
use  bookDatabase;
create table bookList(
      ISBN varchar(100) not null,
      name varchar(100) character set gb2312,
      price float,
      publishDate date,
      primary key(ISBN)
      );

insert into bookList values('988302084658','������',38.67,'2021-12-10'),
('129352914657','������ů',78,'1998-5-19'),
('297873022198048','C������ƻ���',29,'1999-5-16'),
('097873902488664','Java������ƻ���',32,'2018-1-10');
select * from bookList;



