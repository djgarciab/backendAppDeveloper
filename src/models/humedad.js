module.exports = (sequelize, DataType) => {
    const Humedades = sequelize.define('humedad', {
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

    return Humedades;
};