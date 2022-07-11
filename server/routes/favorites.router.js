const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', (req, res) => {
    console.log('in route.get for comments', req.params)
    const sqlQuery = `SELECT *
                    FROM "favorites"
                    JOIN "routes" 
                        ON "favorites"."routeId" = "routes"."id"
                        WHERE "userId" = $1;`
    const sqlParams = [req.user.id]
                    
    pool.query(sqlQuery, sqlParams).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in get favorites', error);
        res.sendStatus(500);
    })
});

router.post('/:id', (req,res) => {
    
    const sqlQuery = `INSERT INTO "favorites"
                        ("routeId", "userId")
                        VALUES ($1, $2);`;
    const SqlParams = [
        req.params.id,
        req.user.id
    ];
    console.log('in favorites router post', req.params.id)
    pool.query(sqlQuery,SqlParams)
        .then(dbRes => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req,res) => {

    const sqlQuery = `DELETE FROM "favorites"
                    WHERE "favorites"."routeId" = $1 AND "favorites"."userId" = $2;`;
    const sqlParams = [req.params.id, req.user.id];
    console.log('in router.delete', sqlParams)
    pool.query(sqlQuery,sqlParams)
        .then(dbRes => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.error('error in router.delete', err);
            res.sendStatus(500);
        });
});

module.exports = router;