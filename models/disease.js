'use strict';
module.exports = function(sequelize, DataTypes) {
    var disease = sequelize.define('disease', {
        name: DataTypes.TEXT,
        description: DataTypes.TEXT,
        terminal: DataTypes.BOOLEAN,
        severity: DataTypes.INTEGER,
        transmission: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                models.disease.belongsToMany(models.symptoms, { through: models.disease_symptom });
            }
        }
    });
    return disease;
};
