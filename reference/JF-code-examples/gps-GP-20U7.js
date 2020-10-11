const { Board, GPS } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const gps = new GPS({
    pins: {
      rx: 11,
      tx: 10,
    }
  });

  // If latitude, longitude data log it.
  // This will output zero until a valid
  // GPS position is detected.
  gps.on("data", position => {
    const {altitude, latitude, longitude} = position;
    console.log("GPS Position:");
    console.log("  altitude   : ", altitude);
    console.log("  latitude   : ", latitude);
    console.log("  longitude  : ", longitude);
    console.log("--------------------------------------");
  });
});