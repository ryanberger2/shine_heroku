const Sequelize = require('sequelize')
const sequelize = require('./../configs/sequelize'); 

const getStudentModel = (sequelize, { DataTypes }) => {
    const Student = sequelize.define('student', {
        class_name: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        sstudent_name: {
            type: DataTypes.STRING, 
            unique: true,
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        student_birth_date: {
            type: DataTypes.DATEONLY, 
        }, 
        student_image: {
            type: DataTypes.STRING, 
        }, 
        student_points: {
            type: DataTypes.INTEGER, 
            defaultValue: 1,
        }, 
        student_state: {
            type: DataTypes.BOOLEAN, 
            defaultValue: 1,
        }, 
        student_emojis: {
            type: DataTypes.STRING, 
        }, 
        robot_offset: {
            type: DataTypes.INTEGER, 
            defaultValue: 0,
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        is_deleted: {
            type: DataTypes.BOOLEAN, 
            defaultValue: 0, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
    }); 
    
    Student.associate = (models) => {
        Student.belongsTo(models.Classroom, {foreignKey: 'class_name'})
    }; 
    
    return Student; 
}; 

module.exports = getStudentModel; 