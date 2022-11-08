#include <FastLED.h>

#define SENSOR_PIN A0
#define NUM_LEDS 15
#define LED_DATA_PIN 2

CRGB leds[NUM_LEDS];

int sensorValue = 0;
int ledOn = 0;

void setup() {
  Serial.begin(9600);
  FastLED.addLeds<WS2812B, LED_DATA_PIN, RGB>(leds, NUM_LEDS);
  FastLED.setBrightness(50);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(SENSOR_PIN);

  leds[ledOn] = CRGB::Black;
  ledOn = (ledOn + 1) % NUM_LEDS;
  leds[ledOn] = CRGB::Green;
  FastLED.show();
  
  delay(sensorValue);
}
