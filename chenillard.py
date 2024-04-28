from machine import Pin # importe dans le code la lib qui permet de gerer les Pins de sortie
import utime # importe dans le code la lib qui permet de gerer le temps


pinNumber1 = 1 # declaration d'une variable pinNumber à 17
pinNumber2 = 5
pinNumber3 = 9
pinNumber4 = 13
led1 = Pin(pinNumber1, mode=Pin.OUT) # declaration d'une variable de type pin ici la 17 
                                   #et on prescise que c'est une pin de sortie de courant (OUT)
led2 = Pin(pinNumber2, mode=Pin.OUT)
led3 = Pin(pinNumber3, mode=Pin.OUT)
led4 = Pin(pinNumber4, mode=Pin.OUT)
while True:          # boucle infini
    led1.on()
    utime.sleep(0.1)
    led1.off()
    led2.on()
    utime.sleep(0.1)
    led2.off()
    led3.on()
    utime.sleep(0.1)
    led3.off()
    led4.on()
    utime.sleep(0.1)
    led4.off()
    #led.on()        allume la led 
    #led.off()       eteind la led
