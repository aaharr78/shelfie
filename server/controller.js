module.exports = {
    get_inventory: (req, res, next) => {
        let db = req.app.get('db');
        db.get_inventory().then(response => {
            res.send(response)
        })
    },

    create_product: (req, res) => {
        let db = req.app.get('db');
        let { name, price, image_url } = req.body
        db.create_product([name, price, image_url]).then(response => {
            res.send(response)
        })
    },

    update: (req, res) => {
        let { name, price,} = req.body
        let db = req.app.get('db');
        db.update_product([name, price, id]).then(response => {
            res.send(response)
        })
    },
    remove: (req, res) => {
        let { id } = req.params
        let db = req.app.get('db');
        db.remove_product(id).then(response => res.send(response)
        )
    }
}