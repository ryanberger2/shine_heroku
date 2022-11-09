const getStudentEventModel = (sequelize, { DataTypes }) => {
    const StudentEvent = sequelize.define('student_event', {
        student_id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        event_type: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        event_value: {
            type: DataTypes.STRING, 
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
    StudentEvent.associate = models => {
        StudentEvent.belongsTo(models.Student, {foreignKey: 'student_id'})
    }

    return StudentEvent; 
}; 

export default StudentEvent; 