module.exports = app => {
    const Humedades = app.db.models.humedad;
    console.log(Humedades);
    app.route('/humedades')
        .get((req, res) => {
            console.log('en get de Humedades');

            Humedades.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });

        });
};