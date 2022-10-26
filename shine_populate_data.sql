-- Insert into classrooms 
insert into classrooms (class_name, teacher_first_name, teacher_last_name)
values 
    ('SHINE', 'Treba', 'Hollowell'), 
    ('HAWKS', 'Jim', 'Moriarty'), 
    ('GRIZ', 'Lisa', 'Simpson'), 
    ('BOBCAT', 'Juniper', 'Guthrie')
; 

-- Insert into students 
insert into students (class_id, student_number, student_first_name, student_last_name, student_birth_date)
values 
    (1, 1, 'Suzy', 'Q', '2015-01-01'), 
    (1, 2, 'Johnny', 'Good', '2015-01-02'), 
    (1, 3, 'Vicky', 'Jones', '2015-01-03'), 
    (1, 4, 'Abdul', 'Helena', '2015-01-04'), 
    (1, 5, 'Jenny', 'Jacobs', '2015-01-05'), 
    (1, 6, 'Cindy', 'Lou', '2015-01-06'), 
    (1, 7, 'Mary', 'Bell', '2015-01-07')
; 

-- Insert into events
insert into events (event_name, student_id)
values 
    ('focus_start', 1), 
    ('focus_end', 1), 
    ('focus_start', 2), 
    ('focus_end', 2)
; 