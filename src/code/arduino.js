var robot = Cylon.robot({
    // change the port to the correct one for your Arduino
    connections: {
      arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
    },
   
    devices: {
      led: { driver: 'led', pin: 13 }
    },
   
    work: function(my) {
      every((1).second(), my.led.toggle);
    }
  });
   
  // connect to the Arduino and start working
  robot.start();