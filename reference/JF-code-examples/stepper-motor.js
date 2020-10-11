const {Board, Stepper} = require("johnny-five");
const board = new Board();

board.on("ready", () => {

  /**
   * In order to use the Stepper class, your board must be flashed with
   * either of the following:
   *
   * - AdvancedFirmata https://github.com/soundanalogous/AdvancedFirmata
   * - ConfigurableFirmata https://github.com/firmata/arduino/releases/tag/v2.6.2
   *
   */

  const stepper = new Stepper({
    type: Stepper.TYPE.DRIVER,
    stepsPerRev: 200,
    pins: {
      step: 12,
      dir: 11
    }
  });

  // Set stepper to 180 RPM, counter-clockwise with acceleration and deceleration
  stepper.rpm(180).ccw().accel(1600).decel(1600);
  
  // Make 10 full revolutions
  stepper.step(2000, () => {

    console.log("Done moving CCW");

    // once first movement is done, make 10 revolutions clockwise at previously
    //      defined speed, accel, and decel by passing an object into stepper.step
    stepper.step({
      steps: 2000,
      direction: Stepper.DIRECTION.CW
    }, () => console.log("Done moving CW"));
  });
});