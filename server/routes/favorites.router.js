const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:id', (req, res) => {
    console.log('in route.get for comments', req.params)
    const sqlQuery = `SELECT
                        comments.id AS "comment_id",
                        comments."routeId",
                        comments."userId",
                        comments."comment",
                        comments."timeDate",
                        "user".username
                    FROM "comments"
                    JOIN "user" 
                        ON "comments"."userId" = "user"."id"
                        WHERE "routeId" = $1;`
    const sqlParams = [req.params.id]
                    
                

    pool.query(sqlQuery, sqlParams).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in get', error);
        res.sendStatus(500);
    })
});

router.post('/', (req,res) => {
    
    const sqlQuery = `INSERT INTO "comments"
                        ("routeId", "userId", "comment")
                        VALUES ($1, $2, $3);`;
    const SqlParams = [
        req.body.routeId,
        req.user.id,
        req.body.newComment
    ];
    console.log('in comments router post', req.body)
    pool.query(sqlQuery,SqlParams)
        .then(dbRes => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
});

module.exports = router;