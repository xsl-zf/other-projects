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
(1,'ǰ��·���źŵ�����ʾʲô��˼��',
'A.׼��ͨ��','B.����ע��','C.·�ھ�ʾ','D.��ֹͨ��','p1.jpg','D'),
(2,'�����־�Ǻκ��壿',
'A.ʮ�ֽ���·��','B.���ν���·��','C.T�ͽ���·��','D.Y�ͽ���·��','p2.jpg','A'),
(3,'����Ǳ��Ǻκ��壿',
'A.������ת�ٱ�','B.��ʻ�ٶȱ�','C.������̱�','D.�ٹ����ͺı�','p3.jpg','A'),
(4,'�����������������ʻ��',
'A.�����������','B.���Ҽ�������','C.�����������','D.����ԭ��','p1.jpg','B');




