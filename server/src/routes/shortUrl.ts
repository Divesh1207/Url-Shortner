import express from "express";
import { createUrl, deleteUrl, getallUrl, getUrl } from "../controllers/shortUrl.js";


const router = express.Router()

router.post('/shortUrl', createUrl)
router.get('/shortUrl', getallUrl)
router.get('/shortUrl:id', getUrl)
router.delete('/shortUrl:id', deleteUrl)

export default router;