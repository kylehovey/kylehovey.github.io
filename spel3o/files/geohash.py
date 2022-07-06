import webbrowser
import math
ImTheMap = input("would you like a map site to look up your coordinates? ")
if ImTheMap == "yes":
    print('look up your current location on this website')
    webbrowser.open("https://csel.cs.colorado.edu/~nishimot/point.html")
else:
    print('''okay then, let's continue''')
Lat = input('''Please input your current LATITUDE with spaces inbetween,
and zeros as placeholders. (ex: 32 05 12.20) ''')
if len(Lat) != 11:
    print("entered incorrectly, quitting")
    raise IOError('Wrong coordinate format')
else:
    LatDeg = float(Lat[:2])
    LatMin = float(Lat[3:5])
    LatSec = float(Lat[6:])
Long = input('''Please input your current LONGITUDE with spaces inbetween,
and zeros as placeholders. (ex: 120 05 12.20) ''')
if len(Long) == 11:
    LongDeg = float(Long[:2])
    LongMin = float(Long[3:5])
    LongSec = float(Long[7:])
elif len(Long) == 12:
    LongDeg = float(Long[:3])
    LongMin = float(Long[4:6])
    LongSec = float(Long[6:])
else:
    print("entered incorrectly, quitting")
    raise IOError('Wrong coordinate format')
Cal = input("please enter the current date in MM/DD/YY format (ex: 03/06/11) ")
mm = int(Cal[:2])
dd = int(Cal[3:5])
yy = int(Cal[6:])
Prank = input("please confess yourself of all mortal sins ")
Prank = input('''oh come on, be honest ;) ''')
print('''haha.. just joking ;) Now, let's continue.''')
Prank = 0
val = (dd - mm) * yy
if val <= 48:
    val = (val/60)*10
elif val >= 48:
    val = (val/60)*4
if dd % 2 == 0:
    val = -val
else:
    val = val
longval = val * 0.18526362353047317310282957646406309593963452838196423660508102562977229905562196608078556292556795045922591488273554788881298750625
longval = round(longval, 1)
if val >= 8:
    val = 8;
else:
    val = val
lad = LatDeg
lam = LatMin + round(val, 1)
las = LatSec + val * 10
lod = LongDeg
lom = LongMin + round(val, 1)
los = LongSec + val*10
jumpthegun = 0
jumpthegunlong = 0
if las >= 60:
    jumpthegun = 1
    las = 59
else:
    las = las
if los >= 60:
    jumpthegunlong = 1
    los = 59
else:
    los = los
lam = round(lam, 1) + jumpthegun
lom = round(lom, 1) + jumpthegunlong
lom = lom - 5
las = round(las, 2)
los = round(los, 2)
final = input('''hit enter to see results ''')
print('''Your local geohash of the day is:''')
print('Latitude:')
print(lad, lam, las)
print('Longitude:')
print(lod, lom, los)
