import express from 'express';
import Url from '../models/urlModel';

const router = express.Router();

//fetch Urls from db
router.get('/urls', async (req, res) => {
  try {
    const urls = await Url.find();
    res.json(urls);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;