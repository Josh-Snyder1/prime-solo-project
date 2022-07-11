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

router.post('/', (req,res) => {
    
    const sqlQuery = `INSERT INTO "favorites"
                        ("routeId", "userId")
                        VALUES ($1, $2);`;
    const SqlParams = [
        req.body.routeId,
        req.user.id
    ];
    console.log('in favorites router post', req.body)
    pool.query(sqlQuery,SqlParams)
        .then(dbRes => {
            res.sendStatus(201);
        })
        .catch(err => {
            // if (err.detail === `Key ("routeId", "userId")=
            // (${req.body.routeId}, ${req.user.id}) already exists.`) {
            //     const sqlQuery = `DELETE FROM "favorites"
            //                 WHERE "userId" = $1 AND "routeId" = $2;`;
            //     const sqlParams = [req.body.routeId, req.user.id]

            //     pool.query(sqlQuery, sqlParams)
            //     .then(() => {
            //         res.sendStatus(201)
            //     })
            // }
            console.error(err);
            res.sendStatus(500);
        });
});

module.exports = router;