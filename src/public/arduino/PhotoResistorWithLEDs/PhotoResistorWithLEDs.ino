#include <FastLED.h>

#define SENSOR_PIN A0
#define NUM_LEDS 15
#define LED_DATA_PIN 2

int sensorValue = 0;

float dark = 350;
float light = 1000;
float value = 0;

CRGB leds[NUM_LEDS];

void setup() {
  Serial.begin(9600);
  FastLED.addLeds<WS2812B, LED_DATA_PIN, RGB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(SENSOR_PIN);
  value = constrain((sensorValue - dark)/(light - dark), 0, 1);

  int numLedsOn = round(value * NUM_LEDS);
  
  for (int i = 0; i < 15; i ++) {
    if (i < numLedsOn) {
      leds[i] = CRGB::Red;
    } else {
      leds[i] = CRGB::Black;
    }
  }
  
  FastLED.show();
  delay(10);
}
