const HotelSchema = require("../models/Hotels");

exports.addHotel = async (req, res) => {
  try {
    // console.log("enter in hotel add route");
    // console.log(req.body);
    const newHotel = await HotelSchema.create({
      ...req.body,
    });
    res.status(200).json({
      success: true,
      newHotel,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    console.log("enter in update");
    const id = req.query.id;
    console.log(id);
    const res1 = await HotelSchema.findByIdAndUpdate(id, {
      $set: req.body,
    });

    res.status(200).json({
      success: true,
      res1,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      success: false,
      message: "something went wrong",
    });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const id = req.query.id;
    const res1 = await HotelSchema.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      res1,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.getHotel = async (req, res) => {
  try {
    console.log("enter in get hotel");
    const id = req.query.id;
    const hotel = await HotelSchema.findById(id);
    res.status(200).json({
      success: true,
      hotel,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};

exports.getAllHotels = async (req, res) => {
  try {
    const allHotels = await HotelSchema.find({});
    res.status(200).json({
      success: true,
      allHotels,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: error,
    });
  }
};
