import express from 'express';

const router = express.Router();

router.get("/add", (req, res) => console.log(req,res));

export default router;