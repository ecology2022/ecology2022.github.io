$(document).ready(function () {
     let temp1, temp2, temp3;
     $('.cnvs').on('touchmove', function () {
          let num1 = Number($('#number').html().split(' ')[0]);
          let num2 = Number($('#number1').html().split(' ')[0]);
          let num3 = Number($('#number2').html().split(' ')[0]);
          let temperature;
          let waterLevel = 0.34;
          let x = 9;
          let y = 4;
          if (num1 >= 1.52) {
               temp1 = Math.round((1.8 / (5 - 1.52) * (num1 - 0.9)) * 100) / 100;
               temp3 = Math.round((3.5 / 100 * (num3 - 2050)) * 100) / 100;

          }
          if (num2 >= 2500) {
               temp2 = Math.round((2.5 / (5000 - 2500) * (num2 - 2500)) * 100) / 100;
               temp3 = Math.round((3.5 / 100 * (num3 - 2050)) * 100) / 100;

          }

          
          if(num1 < 1.52 || num2 < 2500) {
               temp3 = 0;
          }

          num1<1.52 ? temp1 = -0.01 : y=x;
          num1<1.42 ? temp1 = -0.03 : y=x;
          num1<1.32 ? temp1 = -0.05 : y=x;
          num1<1.22 ? temp1 = -0.07 : y=x;
          num1<1.12 ? temp1 = -0.09 : y=x;
          num1<1.02 ? temp1 = -0.11 : y=x;

          num2 < 2500 ? temp2 = -0.01: y=x;
          num2 < 2300 ? temp2 = -0.03: y=x;
          num2 < 2100 ? temp2 = -0.05: y=x;
          num2 < 1900 ? temp2 = -0.07: y=x;
          num2 < 1700 ? temp2 = -0.09: y=x;
          num2 < 1500 ? temp2 = -0.11: y=x;

          temperature = Math.round((temp1 + temp2 + temp3) * 100) / 100;
          $('#mainNumber').html(temperature + ' °C')

          waterLevel = Math.round((0.2 + (0.95 / 8 * temperature)) * 100) / 100;
          $('#meterRise').html(waterLevel)

          let fogMove;
          fogMove = 0 - ((102 - Math.round(((100 / 8.1) * temperature) * 100) / 100));
          fogMove > 0 ? fogMove = 0 : x=y;
          $('#fog').css({'left':fogMove + '%'});

     })
     $('.cnvs').on('touchstart', function () {
          let num1 = Number($('#number').html().split(' ')[0]);
          let num2 = Number($('#number1').html().split(' ')[0]);
          let num3 = Number($('#number2').html().split(' ')[0]);
          let temperature;
          let waterLevel = 0.34;
          let x = 9;
          let y = 4;
          if (num1 >= 1.52) {
               temp1 = Math.round((1.8 / (5 - 1.52) * (num1 - 0.9)) * 100) / 100;
               temp3 = Math.round((3.5 / 100 * (num3 - 2050)) * 100) / 100;
          }
          if (num2 >= 2500) {
               temp2 = Math.round((2.5 / (5000 - 2500) * (num2 - 2500)) * 100) / 100;
               temp3 = Math.round((3.5 / 100 * (num3 - 2050)) * 100) / 100;
          }

          if(num1 < 1.52 || num2 < 2500) {
               temp3 = 0;
          }

          num1<1.52 ? temp1 = -0.01 : y=x;
          num1<1.42 ? temp1 = -0.03 : y=x;
          num1<1.32 ? temp1 = -0.05 : y=x;
          num1<1.22 ? temp1 = -0.07 : y=x;
          num1<1.12 ? temp1 = -0.09 : y=x;
          num1<1.02 ? temp1 = -0.11 : y=x;

          num2 < 2500 ? temp2 = -0.01: y=x;
          num2 < 2300 ? temp2 = -0.03: y=x;
          num2 < 2100 ? temp2 = -0.05: y=x;
          num2 < 1900 ? temp2 = -0.07: y=x;
          num2 < 1700 ? temp2 = -0.09: y=x;
          num2 < 1500 ? temp2 = -0.11: y=x;
          
          temperature = Math.round((temp1 + temp2 + temp3) * 100) / 100;
          $('#mainNumber').html(temperature + ' °C');

          waterLevel = Math.round((0.2 + (0.95 / 8 * temperature)) * 100) / 100;
          $('#meterRise').html(waterLevel);

          let fogMove;
          fogMove = 0 - ((102 - Math.round(((100 / 8.1) * temperature) * 100) / 100));
          fogMove > 0 ? fogMove = 0 : x=y;
          $('#fog').css({'left':fogMove + '%'});

     })
})