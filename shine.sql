drop table if exists classrooms cascade; 
drop table if exists students cascade; 
drop table if exists events cascade; 

-- Create classrooms 
create table classrooms (
    class_id serial, 
    class_name varchar(255) not null, 
    teacher_first_name varchar(255) not null, 
    teacher_last_name varchar(255) not null, 
    is_deleted boolean default false, 
    create_timestamp timestamp default now(), 
    CONSTRAINT classrooms_pk primary key(class_id)
); 

-- Create students 
create table students (
    student_id serial, 
    class_name varchar(255) not null, 
    student_number smallint not null, 
    student_first_name varchar(255) not null, 
    student_last_name varchar(255) not null, 
    student_birth_date date, 
    is_deleted boolean default false, 
    create_timestamp timestamp default now(), 
    CONSTRAINT students_pk primary key(student_id)
); 

-- Create events
create table events (
    event_id serial, 
    event_name varchar(255) not null, 
    create_timestamp timestamp default now(), 
    is_deleted boolean default false, 
    student_id integer, 
    CONSTRAINT events_pk primary key(event_id)
); 

alter table students
    add constraint fk_classroom
    foreign key (class_name)
    references classrooms (class_name)
; 

alter table events
    add constraint fk_student
    foreign key (student_id)
    references students (student_id)
; 

-- Insert into classrooms 
insert into classrooms (class_name, teacher_first_name, teacher_last_name)
values 
    ('SHINE', 'Treba', 'Hollowell'), 
    ('HAWKS', 'Jim', 'Moriarty'), 
    ('GRIZ', 'Lisa', 'Simpson'), 
    ('BOBCAT', 'Juniper', 'Guthrie')
; 

-- Insert into students 
insert into students (class_name, student_number, student_first_name, student_last_name, student_birth_date)
values 
    ('SHINE', 1, 'Suzy', 'Q', '2015-01-01'), 
    ('SHINE', 2, 'Johnny', 'Good', '2015-01-02'), 
    ('SHINE', 3, 'Vicky', 'Jones', '2015-01-03'), 
    ('SHINE', 4, 'Abdul', 'Helena', '2015-01-04'), 
    ('SHINE', 5, 'Jenny', 'Jacobs', '2015-01-05'), 
    ('SHINE', 6, 'Cindy', 'Lou', '2015-01-06'), 
    ('HAWKS', 7, 'Mary', 'Bell', '2015-01-07')
; 

-- Insert into events
insert into events (event_name, student_id)
values 
    ('focus_start', 1), 
    ('focus_end', 1), 
    ('focus_start', 2), 
    ('focus_end', 2)
; 