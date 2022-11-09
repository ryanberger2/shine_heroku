const getClassroomModel = (sequelize, { DataTypes }) => {
    const Classroom = sequelize.define('classroom', {
        class_name: {
            type: DataTypes.STRING, 
            unique: true, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        class_color: {
            type: DataTypes.STRING, 
            defaultValue: "000000", 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        class_emojis: {
            type: DataTypes.STRING, 
        }, 
        class_image: {
            type: DataTypes.STRING, 
        }, 
        class_saying: {
            type: DataTypes.STRING, 
        }, 
        class_directions: {
            type: DataTypes.STRING, 
        }, 
        teacher_salutation: {
            type: DataTypes.STRING, 
        }, 
        teacher_first_name: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        teacher_last_name: {
            type: DataTypes.STRING, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        teacher_image: {
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
    Classroom.associate = models => {
        Classroom.hasMany(models.Student)
    }

    return Classroom; 
}; 

module.exports = getClassroomModel; 