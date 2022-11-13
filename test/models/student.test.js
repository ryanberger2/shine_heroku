const Student  = require("../../src/models/student.js");

test('should default some params', async () => {
    let student = new Student({
        "class_name": "shine",
        "student_name": "ryan",
    });     
    student.validate()
    // Expecting both of these values to have been defaulted to 0
    await expect(student.robot_offset).toBe(0);
    expect(student.is_deleted).not.toBeTruthy();
})

test('student should require a student_name', async ()=> {
    let student = new Student({
        "class_name": "shine",
    });
    await expect(async () => { await student.validate() })
    .rejects
    .toThrow(/students\.student_name cannot be null/); 
})

test('student should require a class_name', async ()=> {
    let student = new Student({
        "student_name": "ryan",
    });
    await expect(async () => { await student.validate() })
    .rejects
    .toThrow(/students\.class_name cannot be null/); 
})

/* ----- Tests to create: ----- 
* 1. Catch if someone tries to add a dupe student 
* 2. Catch if someone tries to update a student and nullify name 
* 3. Catch if 
* 4. 
* 5. 
* 
*/
// 3. Write tests to validate creating / updating (fields filled out, 
// data validation with datatypes, with classroom exists, etc. )

