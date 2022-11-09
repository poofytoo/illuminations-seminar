#define SENSOR_PIN A0

int sensorValue = 0;

float dark = 630;
float light = 1024;
float value = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  // read the value from the sensor:
  sensorValue = analogRead(SENSOR_PIN);
  value = constrain((sensorValue - dark)/(light - dark), 0, 1);
  
  Serial.println(value);
  delay(100);
}
