#include <FastLED.h>

// How many leds in your strip?
#define NUM_LEDS 10
#define DATA_PIN 2

// Define the array of leds
CRGB leds[NUM_LEDS];

void setup() { 
	FastLED.addLeds<WS2812B,DATA_PIN,RGB>(leds,NUM_LEDS);
	FastLED.setBrightness(60);
}

void loop() { 
  FastLED.clear();
  FastLED.show();
  delay(2000);
  
	for(int i = 0; i < NUM_LEDS; i++) {
		leds[i] = CRGB(255, 255, 255);
		// Show the leds
		FastLED.show(); 
		delay(100);
	}
}
