create database Examination;
use Examination;
drop table testQuesion;
create table testQuesion(id int not null,
                         content varchar(200) character set gb2312,
                         a char(10),
                         b char(10),
                         c char(10),
                         d char(10),
                         pic varchar(30),
                         answer char(10),
                         primary key(id));
insert into testQuesion values 
(1,'前方路口信号灯亮表示什么意思？',
'A.准许通行','B.提醒注意','C.路口警示','D.禁止通行','p1.jpg','D'),
(2,'这个标志是何含义？',
'A.十字交叉路口','B.环形交叉路口','C.T型交叉路口','D.Y型交叉路口','p2.jpg','A'),
(3,'这个仪表是何含义？',
'A.发动机转速表','B.行驶速度表','C.区间里程表','D.百公里油耗表','p3.jpg','A'),
(4,'遇到这样情况怎样行驶？',
'A.靠左减速让行','B.靠右减速让行','C.靠左加速让行','D.保持原速','p1.jpg','B');




