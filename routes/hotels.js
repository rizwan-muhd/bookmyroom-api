const express = require("express");
const {
  addHotel,
  updateHotel,
  deleteHotel,
  getHotel,
} = require("../controllers/hotels");
const router = express();

router.post("/addhotel", addHotel);
router.put("/updatehotel", updateHotel);
router.delete("/deletehotel", deleteHotel);
router.get("/gethotel", getHotel);

module.exports = router;
