create database Student;
use Student;
drop table scoreReport;
create table scoreReport(id char(20) not null,
                         name char(30) character set gb2312,
                         mathScore int,
                         englishScore int,
                         primary key(id));
insert into scoreReport values 
('A10001','����',89,67),
('A10002','����',70,97),
('A10003','����',82,85),
('A10004','�����',69,76),
('A10005','��С��',80,92),
('A10006','����',65,71);
