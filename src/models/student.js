const sequelize = require('./../configs/sequelize'); 
const Sequelize = require('sequelize'); 

module.exports = sequelize.define('students', {
        class_name: {
            type: Sequelize.STRING, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        student_name: {
            type: Sequelize.STRING, 
            unique: true,
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        student_birth_date: {
            type: Sequelize.DATEONLY, 
        }, 
        student_image: {
            type: Sequelize.STRING, 
        }, 
        student_points: {
            type: Sequelize.INTEGER, 
            defaultValue: 1,
        }, 
        student_state: {
            type: Sequelize.BOOLEAN, 
            defaultValue: 1,
        }, 
        student_emojis: {
            type: Sequelize.STRING, 
        }, 
        robot_offset: {
            type: Sequelize.INTEGER, 
            defaultValue: 0,
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        is_deleted: {
            type: Sequelize.BOOLEAN, 
            defaultValue: 0, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
    }); 
    
//     Student.associate = (models) => {
//         Student.belongsTo(models.Classroom, {foreignKey: 'class_name'})
//     }; 
    
//     return Student; 
// }; 