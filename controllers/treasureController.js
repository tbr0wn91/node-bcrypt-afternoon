module.exports = {
    dragonTreasure: async (req, res) => {
        const db = req.app.set('db');

        const result = await db.get_dragon_treasure(1);
        res.status(200).send(result)
    },
    getUserTreasure: async (req, res) => {
        console.log(req.session)
        const userTreasure = await req.app.get('db').get_user_treasure([req.session.user.id]);
         res.status(200).send(userTreasure);
    }
}