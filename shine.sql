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
    class_id integer not null, 
    student_first_name varchar(255) not null , 
    student_last_name varchar(255) not null , 
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
    foreign key (class_id)
    references classrooms (class_id); 

alter table events
    add constraint fk_student
    foreign key (student_id)
    references students (student_id); 

