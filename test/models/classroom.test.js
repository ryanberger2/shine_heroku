const Classroom  = require("../../src/models/classroom.js");

test('New classroom should default some params', async () => {
    let classroom = new Classroom({
        "class_name": "SHINE",
        "teacher_first_name": "treba",
        "teacher_last_name": "hollowell",
    });     
    classroom.validate(); 
    // Expecting both of these values to have been defaulted to 0
    await expect(classroom.robot_offset).toBe(0);
    expect(classroom.is_deleted).toBeFalsy();
})

test('class_name should not be empty', async () => {
    let classroom = new Classroom({
        "teacher_first_name": "treba",
        "teacher_last_name": "hollowell",
    }); 
    await expect(async () => { await classroom.validate() })
    .rejects
    .toThrow(/classrooms\.class_name cannot be null/); 
})

test('teacher first_name should not be empty', async ( )=> {
    let classroom = new Classroom({
        "class_name": "SHINE",
        "teacher_last_name": "hollowell",
    }); 
    await expect(async () => { await classroom.validate() })
    .rejects
    .toThrow(/classrooms\.teacher_first_name cannot be null/); 
})

test('teacher last_name should not be empty', async ( )=> {
    let classroom = new Classroom({
        "class_name": "SHINE",
        "teacher_first_name": "treba",
    }); 
    await expect(async () => { await classroom.validate() })
    .rejects
    .toThrow(/classrooms\.teacher_last_name cannot be null/); 
})