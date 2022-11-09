drop table if exists classrooms cascade; 
drop table if exists students cascade; 
drop table if exists student_events cascade; 
drop table if exists classroom_events cascade; 

-- Create classrooms 
create table classrooms (
    id serial unique, 
    class_name varchar(255) not null unique, 
    class_color varchar(255) not null default '000000',
    class_emojis varchar(255), 
    class_image varchar(255),
    class_saying varchar(255),
    class_directions varchar(255),
    teacher_salutation varchar(255), 
    teacher_first_name varchar(255) not null, 
    teacher_last_name varchar(255) not null, 
    teacher_image varchar(255), 
    robot_offset smallint default 0, 
    is_deleted boolean default false, 
    "createdAt" timestamp default now(), 
    "updatedAt" timestamp default now(), 
    CONSTRAINT classrooms_pk primary key(id)
); 

-- Create students 
create table students (
    id serial unique, 
    class_name varchar(255) not null, 
    student_name varchar(255) not null, 
    student_birth_date date, 
    student_image varchar(255), 
    student_points smallint default 1,
    student_state boolean default true,
    student_emojis varchar(255), 
    robot_offset smallint default 0, 
    is_deleted boolean default false, 
    "createdAt" timestamp default now(), 
    "updatedAt" timestamp default now(), 
    CONSTRAINT students_pk primary key(id)
); 

-- Create class_events
create table classroom_events (
    id serial unique, 
    classroom_id integer, 
    event_type varchar(255) not null, 
    event_value varchar(255), 
    is_deleted boolean default false, 
    createdAt timestamp default now(), 
    updatedAt timestamp default now(), 
    CONSTRAINT class_events_pk primary key(id)
); 

-- Create student_events
create table student_events (
    id serial unique, 
    student_id integer, 
    event_type varchar(255) not null, 
    event_value varchar(255), 
    is_deleted boolean default false, 
    createdAt timestamp default now(), 
    updatedAt timestamp default now(), 
    CONSTRAINT student_events_pk primary key(id)
); 

alter table students
    add constraint fk_classroom
    foreign key (class_name)
    references classrooms (class_name)
; 

alter table classroom_events
    add constraint fk_class
    foreign key (classroom_id)
    references classrooms (id)
; 

alter table student_events
    add constraint fk_student
    foreign key (student_id)
    references students (id)
; 

-- Insert into classrooms 
insert into classrooms (class_name, class_color, class_emojis, class_image, class_saying, class_directions, teacher_salutation, teacher_first_name, teacher_last_name, teacher_image)
values 
    ('SHINE', '000000', '🥳🦖🎃', '', 'We will use kind words.', '', 'Mrs.', 'Treba', 'Hollowell', ''), 
    ('HAWKS', '00ffff', '🤖👨🏽‍🍳🍿', '', 'We aren''t afraid to make mistakes', '', 'Mr.', 'Jim', 'Moriarty', ''), 
    ('GRIZ', '0044ff', '🚦💰🎲', '', 'We will try our best!', '', 'Mrs.', 'Lisa', 'Simpson', ''), 
    ('BOBCATS', '44ff00', '🎨🎤🍦', '', 'We will listen to each other.', '', 'Mrs.', 'Juniper', 'Guthrie', '')
; 

-- Insert into students
insert into students (class_name, student_name, student_birth_date, student_image, student_emojis)
values 
    ('SHINE', 'Suzy Q', '2015-01-01', '', '🍧'), 
    ('SHINE', 'Johnny Good', '2015-01-02', '', '🥦'), 
    ('SHINE', 'Vicky Eileen', '2015-01-03', '', '⛄️'), 
    ('SHINE', 'Abdul Helena', '2015-01-04', '', '🐲'), 
    ('SHINE', 'Rashida Jones', '2015-01-05', '', '🐢'), 
    ('SHINE', 'Cindy Lou', '2015-01-06', '', '🦅'), 
    ('HAWKS', 'Mariah Bell', '2015-01-07', '', '💡')
; 

-- Insert into classroom_events
insert into classroom_events (classroom_id, event_type, event_value, createdat)
values 
    (1, 'timer_start', '', '2022-10-28 15:02:45.00000'), 
    (1, 'timer_end', '', '2022-10-28 15:10:45.00000')
; 

-- Insert into student_events
insert into student_events (student_id, event_type, event_value, createdat)
values 
    (1, 'focus_start', '', '2022-10-28 15:02:45.00000'), 
    (1, 'focus_end', '', '2022-10-28 15:08:45.00000'), 
    (2, 'focus_start', '', '2022-10-28 15:02:45.00000'), 
    (2, 'focus_end', '', '2022-10-28 15:10:45.00000'), 
    (1, 'praise', 'helping others', '2022-10-28 15:09:00.00000'), 
    (1, 'growth', 'raising your hand', '2022-10-28 15:09:30.00000'), 
    (2, 'praise', 'independent focus', '2022-10-28 15:10:00.00000'), 
    (2, 'growth', 'participation', '2022-10-28 15:10:30.00000')
; 