create database Student;
use Student;
drop table scoreReport;
create table scoreReport(id char(20) not null,
                         name char(30) character set gb2312,
                         mathScore int,
                         englishScore int,
                         primary key(id));
insert into scoreReport values 
('A10001','张三',89,67),
('A10002','李四',70,97),
('A10003','刘二',82,85),
('A10004','孙大三',69,76),
('A10005','林小军',80,92),
('A10006','吴大进',65,71);
