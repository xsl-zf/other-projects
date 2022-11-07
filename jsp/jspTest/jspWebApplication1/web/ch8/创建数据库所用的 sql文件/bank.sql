create database bank;
use  bank;
create table user(
      id char(20),
      name varchar(100),
      userMoney double,
      primary key(id)
      );
insert into user values('0001','geng',950),
('0002','zhang',1000);
select * from user;



