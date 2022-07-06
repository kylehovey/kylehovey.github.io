# Matrix multiplication algorithm by spel3o

import random
print 'Module coded by Kyle Hovey'

def show_tell(a,b):
	display(matrix_multiply(a,b))

def display(matrix):
	for i in range(len(matrix)):
		print matrix[i]

def maketrix(m,n):
	result = [[0 for row in range(n)] for col in range(m)]
	return result
	
def randomtrix(m,n,limits=100):
	result = [[random.choice(range(limits)) for nope in range(n)] for murk in range(m)]
	return result

def matrix_multiply(a,b):
	if len(a[0]) != len(b):
		print 'Matrix multiplication not possible'
	else:
		n = len(a)
		m = len(a[0])
		p = len(b[0])
		result = maketrix(n,p)
		for perd in range(p):
			for murk in range(m):
				for nope in range(n):
					result[nope][perd] += a[nope][murk]*b[murk][perd]
		return result
        	

