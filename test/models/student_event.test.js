const Student_Event  = require("../../src/models/student_event.js");

test('Student_event is_deleted defaults to false', async () => {
    let student_event = new Student_Event({
        "student_id": 1, 
        "event_type": "focus_start",
    });     
    student_event.validate(); 
    // Expecting both of these values to have been defaulted to 0
    await expect(student_event.is_deleted).toBeFalsy();
})

test('Student event student_id cannot be null', async () => {
    let student_event = new Student_Event({
        "event_type": "focus_start",
    }); 
    await expect(async () => { await student_event.validate() })
    .rejects
    .toThrow(/student_event\.student_id cannot be null/); 
})

test('Student event event_type cannot be null', async ( )=> {
    let student_event = new Student_Event({
        "student_id": 1, 
    }); 
    await expect(async () => { await student_event.validate() })
    .rejects
    .toThrow(/student_event\.event_type cannot be null/); 
})