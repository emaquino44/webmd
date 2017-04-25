'use strict';
module.exports = function(sequelize, DataTypes) {
    var symptoms = sequelize.define('symptoms', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        afffectedsystems: DataTypes.STRING,
        severity: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.symptoms.belongsToMany(models.disease, { through: models.disease_symptom });
            }
        }
    });
    return symptoms;
};
