const Sequelize = require('sequelize')
const sequelize = require('./../configs/sequelize'); 

module.exports = sequelize.define('classrooms', {
        class_name: {
            type: Sequelize.STRING, 
            unique: true, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        class_color: {
            type: Sequelize.STRING, 
            defaultValue: "000000", 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        class_emojis: {
            type: Sequelize.STRING, 
        }, 
        class_image: {
            type: Sequelize.STRING, 
        }, 
        class_saying: {
            type: Sequelize.STRING, 
        }, 
        class_directions: {
            type: Sequelize.STRING, 
        }, 
        teacher_salutation: {
            type: Sequelize.STRING, 
        }, 
        teacher_first_name: {
            type: Sequelize.STRING, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        teacher_last_name: {
            type: Sequelize.STRING, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        teacher_image: {
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

//     Classroom.associate = models => {
//         Classroom.hasMany(models.Student)
//     }

//     return Classroom; 
// }; 