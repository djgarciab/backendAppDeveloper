module.exports = (sequelize, DataType) => {
    const Temperaturas = sequelize.define('temperatura', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ENG: {
            type: DataType.TEXT,
            allowNull: false
        }
    }, { freezeTableName: true, timestamps: false });

    return Temperaturas;
};