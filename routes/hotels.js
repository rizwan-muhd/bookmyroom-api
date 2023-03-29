const express = require("express");
const {
  addHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
} = require("../controllers/hotels");
const checkToken = require("../middleware/auth");
const router = express();

router.post("/addhotel", addHotel);
router.put("/updatehotel", updateHotel);
router.delete("/deletehotel", deleteHotel);
router.get("/gethotel", getHotel);
router.get("/getAllhotel", checkToken, getAllHotels);

module.exports = router;
