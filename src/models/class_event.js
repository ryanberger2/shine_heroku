const getClassEventModel = (sequelize, { DataTypes }) => {
    const ClassEvent = sequelize.define('class_event', {
        class_id: {
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
    ClassEvent.associate = models => {
        ClassEvent.belongsTo(models.Classroom, {foreignKey: 'class_id'})
    }

    return ClassEvent; 
}; 

export default ClassEvent; 