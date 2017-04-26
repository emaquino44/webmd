'use strict';
module.exports = function(sequelize, DataTypes) {
    var symptoms = sequelize.define('symptom', {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        afffectedsystems: DataTypes.STRING,
        severity: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.symptom.belongsToMany(models.disease, { through: models.disease_symptom });
            }
        }
    });
    return symptoms;
};
