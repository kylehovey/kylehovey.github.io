import math # Math module python

def fct(n):
	actual = n
	n = abs(n)
	a = list(range(-(n+1), n+1))
	lst = []
	for i in a:
		if i == 0:
			pass
		elif n % i == 0:
			lst.append(i)
		else:
			pass
	return lst

def cfact(a, b):
	cfactors = []
	last = 0
	for i in range(1, (a+b+1)):
            if (i in fct(a)) and (i in fct(b)) == True:
                cfactors.append(i)
            else:
                pass
            return cfactors

def GCF2(a, b):
    GCF = cfact(a, b)
    last = 0
    for i in GCF:
            if i > last:
                    final, last = i, i
            else:
                    pass
    return final

def poly(a,b,c,d=0):
    c = c - d
    if a == 1: # If the leading coeficcient is one, quadratic formula can be used
        x1 = (-b+math.sqrt(b**2-4*a*c))/2*a # The quadratic formula where negative b plus
        x2 = (-b-math.sqrt(b**2-4*a*c))/2*a # or minus b squared minus 4 times a and c divided by 2 times a is x
        if (x1 == int(x1)) and (x2 == int(x2)):
            print('Function: '+ str(a)+ 'x^2+'+ str(b)+ 'x+'+ str(c)+ '='+ str(d)+ ' factors to: (x+'+ str(int(x1))+ ')(x+'+ str(int(x2))+ ') = 0')
        elif (x1 != int(x1)) or (x2 != int(x2)):
            print('Function does not factor, but x equals ' + str(x1) + ' ' + 'and ' + str(x2))
    elif a == -1:
        c = -c
        x1 = (-b+math.sqrt(b**2-4*a*c))/2*a # The quadratic formula where negative b plus
        x2 = (-b-math.sqrt(b**2-4*a*c))/2*a # or minus b squared minus 4 times a and c divided by 2 times a is x
        if (x1 == int(x1)) and (x2 == int(x2)):
            print('Function: ', str(a), 'x^2+', str(b), 'x+', str(c), '=', str(d), ' factors to: (x', str(int(x1)), ')(x', str(int(x2)), ') = 0')
        elif (x1 != int(x1)) or (x2 != int(x2)):
            print('Function does not factor, but x equals ' + str(x1) + ' ' + 'and ' + str(x2))
    # Okay, now for some harder programming, lets do some monohans diamond method, or as I like to call it, the circle method ;)
    elif abs(a) > 1:
        c = a*c
        pos1 = range(-(abs(c)+1), abs(c)+1)
        pos2 = pos1
        for i in pos1:
            for j in pos2:
                if (i*j == c) and (i+j == b): # Finds the two numbers that multiply to get c and add to get b
                    f1 = i
                    f2 = j
                    break
        if (f1%a == 0) or (a%f1 == 0):
            pass
        elif (f1%a != 0) or (a%f1 != 0): # Sets variables to their corresponding sides according to common factors
            f1, f2 = f2, f1
        GCF0 = GCF2(a, f1)
        GCF1 = GCF2(f2, c)
        print('Function: ' + str(a) + 'x^2+' + str(b) + 'x+' + str(c) + '=' + str(d) + ' factors to: ' + '(' + str(GCF0) + 'x+' + str(f2) + ')(' + str(f2/GCF1) + 'x+' + str(f1/GCF0) + ')')

