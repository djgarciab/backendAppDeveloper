module.exports = (sequelize, DataType) => {
    const Niveles = sequelize.define('nivel', {
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

    return Niveles;
};