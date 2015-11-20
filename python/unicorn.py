import os
import subprocess
import sys
import pysimpledmx
import math 
import random

channelNumber = 24
mydmx = pysimpledmx.DMXConnection("/dev/ttyUSB0")


for i in range(1,channelNumber):
  choice = random.randint(0,1)
  if(choice==0):
    value=0
  else: 
    value=255
  mydmx.setChannel(i, value)
mydmx.render()
