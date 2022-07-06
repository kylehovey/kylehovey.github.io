def fct(n):
	lst = []
	if n % 2 == 0:
		a = range(2, n, 2)
		lst = []
		for i in a:
			if n % i == 0:
				lst.append(i)
			else:
				pass
	else:
		a = range(1, n, 2)
		for i in a:
			if n % i == 0:
				lst.append(i)
			else:
				pass
	lst.append(n)
	return lst

def fact(n):
    a = fct(n)
    if a == [1,n]:
        print(n, 'is a prime number, factors are 1 and', n)
    else:
        return a
