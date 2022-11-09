// const test = require('tape');
const Student  = require("../../src/models/student.js");

// test('requires name to be not null', (t) => {
//     t.plan(1);

    
//     t.throws(async function() {
//             let student = new Student();
//             await student.validate();
//     }, { 
//         message: 'students.class_name cannot be null'
//     });
// });

// separate things into controllers 
// Apply Sequelize to creating / updating records
// Test validation that the creating / updating works (fields filled out, 
// data validation with datatypes, with classroom exists, etc. )
// At least one test where 


test('should throw with no info', async ()=> {
    let student = new Student();
    await expect(() => { student.validate() })
    .rejects
    .toThrow('fail'); 
})
; 