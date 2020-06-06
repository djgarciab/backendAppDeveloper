module.exports = app => {
    const Niveles = app.db.models.nivel;
    console.log(Niveles);
    app.route('/niveles')
        .get((req, res) => {
            console.log('en get de Niveles');

            Niveles.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });

        });
};