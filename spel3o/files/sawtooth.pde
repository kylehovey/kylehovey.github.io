/*
     ::::::::  :::::::::  :::::::::: :::        ::::::::   ::::::::
    :+:    :+: :+:    :+: :+:        :+:       :+:    :+: :+:    :+:
   +:+        +:+    +:+ +:+        +:+              +:+ +:+    +:+
  +#++:++#++ +#++:++#+  +#++:++#   +#+           +#++:  +#+    +:+
        +#+ +#+        +#+        +#+              +#+ +#+    +#+
#+#    #+# #+#        #+#        #+#       #+#    #+# #+#    #+#
########  ###        ########## ########## ########   ########

Sawtooth wave generator. Make sure that if you are using this code for the 
modulation of a light to frequency chip, or to modulate any other external
circuit, make sure that it stays that way. in other words, make sure that
the frequency that you are modulating runs off of it's own power source. Now
go make some noise!
*/
int sawPin = 9; //OUTPUT PIN
int fadeValue = 0; //Initial value of output

void setup()
{
}

void loop()
{
  for(fadeValue =0 ; fadeValue <=255 ; fadeValue +=5)
  {
    analogWrite(sawPin, fadeValue);
    delay(10); //Time to wait before next increment, set higher for more Hz
  }
  for(fadeValue = 255 ; fadeValue >= 0 ; fadeValue -=5)
  {
    analogWrite(sawPin, fadeValue);
    delay(10); //Time to wait before next reduction, set higher for more Hz
  }
}


