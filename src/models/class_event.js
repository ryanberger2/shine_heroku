const sequelize = require('./../configs/sequelize'); 
const Sequelize = require('sequelize'); 

module.exports = sequelize.define('class_event', {
        class_id: {
            type: Sequelize.INTEGER, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        event_type: {
            type: Sequelize.STRING, 
            allowNull: false, 
            validate: {
                notEmpty: true,
            }
        }, 
        event_value: {
            type: Sequelize.STRING, 
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