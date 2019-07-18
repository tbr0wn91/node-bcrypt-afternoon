module.exports = {
    dragonTreasure: async (req, res) => {
        const db = req.app.set('db');

        const result = await db.get_dragon_treasure(1);
        res.status(200).send(result)
    }
}