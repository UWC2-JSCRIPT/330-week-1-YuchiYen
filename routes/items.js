const { Router, json } = require("express");
const router = Router();

const itemDao = require('../daos/items');

router.get("/", (req, res, next) => {
  res.json(itemDao.getAll())
});

router.get("/:id", (req, res, next) => {
  // TODO: complete this route
  const itemId = req.params.id
  let item = itemDao.getById(itemId);
  if (item)
    res.json(item);  

  res.sendStatus(404);
});

router.post("/", (req, res, next) => {
  itemDao.create(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res, next) => {
  // TODO: complete this route
  const itemId = req.params.id;
  const newObj = req.body;

  if (itemDao.updateById(itemId, newObj))
    res.sendStatus(200);
  else
    res.sendStatus(404);
});

router.delete("/:id", (req, res, next) => {
  // TODO: complete this route
  const itemId = req.params.id;
  if (itemDao.deleteById(itemId)){
    res.sendStatus(200);
  }else
    res.sendStatus(404); //did not find the item to delete. return 404?
});

module.exports = router;
