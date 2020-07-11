const express = require("express");
const router = express.Router();

var barCode128 = require("../barcodeGenerator");

router.post("/api/v1", (req, res) => {
  const { flightNumber, passengerPassport } = req.body;

  if (flightNumber && passengerPassport) {
    barCode128
      .barcode(flightNumber + "-" + passengerPassport)
      .then((data) => {
        if (data) {
          res.status(200).json({
            message: "sucess!",
            image64: { data },
          });
        }
      })
      .catch((err) => {
        res.status(404).json(err);
      });
  } else {
    res.json(res);
  }
});

module.exports = router;
