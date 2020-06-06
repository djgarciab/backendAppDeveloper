module.exports = app => {
    const Temperaturas = app.db.models.temperatura;
    console.log(Temperaturas);
    app.route('/temperaturas')
        .get((req, res) => {
            console.log('en get de Temperaturas');

            Temperaturas.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });

        });
};