def enc(message, key):
    l1 = ['a', 'q', 'z', '`', '~', '!', 'A', 'Q', 'Z']
    l2 = ['s', 'w', 'x', '@', '#', 'S', 'W', 'X', 'H']
    l3 = ['d', 'e', '$', 'D', 'E', 'B', 'C', 'F', 'G']
    l4 = ['b', 'c', 'f', 'g', 'r', 't', 'v', '%', 'T']
    l5 = ['h', 'j', 'm', 'n', 'u', 'y', 'V', 'N', 'M']
    l6 = ['i', 'k', '*', ',', '<', 'I', 'K', 'U', 'Y']
    l7 = ['l', 'o', '.', '>', '(', ')', 'L', 'O', ':']
    l8 = ['p', '-', '=', '[', ']', 'R', ';', 'P', 'J']
    l9 = [' ', '_', '+', '{', '}', '|', '?', '/', '"']
    a = []
    coded = []
    for i in list(message):
            if (i in l1) == True:
                a.append(int((str(1)+str(l1.index(i)+1)))+key)
            if (i in l2) == True:
                a.append(int((str(2)+str(l2.index(i)+1)))+key)
            if (i in l3) == True:
                a.append(int((str(3)+str(l3.index(i)+1)))+key)
            if (i in l4) == True:
                a.append(int((str(4)+str(l4.index(i)+1)))+key)
            if (i in l5) == True:
                a.append(int((str(5)+str(l5.index(i)+1)))+key)
            if (i in l6) == True:
                a.append(int((str(6)+str(l6.index(i)+1)))+key)
            if (i in l7) == True:
                a.append(int((str(7)+str(l7.index(i)+1)))+key)
            if (i in l8) == True:
                a.append(int((str(8)+str(l8.index(i)+1)))+key)
            if (i in l9):
                a.append(int((str(9)+str(l9.index(i)+1)))+key)
    for char in a:
            print(chr(char), end='')

def dec(message, key):
    l1 = ['a', 'q', 'z', '`', '~', '!', 'A', 'Q', 'Z']
    l2 = ['s', 'w', 'x', '@', '#', 'S', 'W', 'X', 'H']
    l3 = ['d', 'e', '$', 'D', 'E', 'B', 'C', 'F', 'G']
    l4 = ['b', 'c', 'f', 'g', 'r', 't', 'v', '%', 'T']
    l5 = ['h', 'j', 'm', 'n', 'u', 'y', 'V', 'N', 'M']
    l6 = ['i', 'k', '*', ',', '<', 'I', 'K', 'U', 'Y']
    l7 = ['l', 'o', '.', '>', '(', ')', 'L', 'O', ':']
    l8 = ['p', '-', '=', '[', ']', 'R', ';', 'P', 'J']
    l9 = [' ', '_', '+', '{', '}', '|', '?', '/', '"']
    for i in list(message):
        i = str(ord(i)-key)
        lst = int(i[:1])
        index = int(i[1]) - 1
        if lst == 1:
            print(l1.pop(index), end='')
            l1 = ['a', 'q', 'z', '`', '~', '!', 'A', 'Q', 'Z']
        if lst == 2:
            print(l2.pop(index), end='')
            l2 = ['s', 'w', 'x', '@', '#', 'S', 'W', 'X', 'H']
        if lst == 3:
            print(l3.pop(index), end='')
            l3 = ['d', 'e', '$', 'D', 'E', 'B', 'C', 'F', 'G']
        if lst == 4:
            print(l4.pop(index), end='')
            l4 = ['b', 'c', 'f', 'g', 'r', 't', 'v', '%', 'T']
        if lst == 5:
            print(l5.pop(index), end='')
            l5 = ['h', 'j', 'm', 'n', 'u', 'y', 'V', 'N', 'M']
        if lst == 6:
            print(l6.pop(index), end='')
            l6 = ['i', 'k', '*', ',', '<', 'I', 'K', 'U', 'Y']
        if lst == 7:
            print(l7.pop(index), end='')
            l7 = ['l', 'o', '.', '>', '(', ')', 'L', 'O', ':']
        if lst == 8:
            print(l8.pop(index), end='')
            l8 = ['p', '-', '=', '[', ']', 'R', ';', 'P', 'J']
        if lst == 9:
            print(l9.pop(index), end='')
            l9 = [' ', '_', '+', '{', '}', '|', '?', '/', '"']
            
def qwerty():
    print(''''Matrix Cypher Developed And Coded By: Kyle Hovey a.k.a Speleo\n
         Numbers Are Not Currently Supported In The Used Matrix''')
    print('Please enter either decrypt or encrypt below:')
    ed = str(input('Would you like to encrypt or decrypt a message? '))
    if ed == 'encrypt':
        message = input(str('''Please input the message to be encrypted:'''))
        message = list(message)
        key = int(input('Please enter a number as the key: '))
        print("Encoded message:\n")
        enc(message, key)
        print('\n')
        print('-'*60)
    if ed == 'decrypt':
        message = input(str('''Please input the message to be decrypted:'''))
        message = list(message)
        key = int(input('Please enter the decypher key: '))
        print('Decoded Message:\n')
        dec(message, key)
        print('\n')
        print('-'*60)

def matrix():
    print('''The matrix currently in use is:
    ['a', 'q', 'z', '`', '~', '!', 'A', 'Q', 'Z']
    ['s', 'w', 'x', '@', '#', 'S', 'W', 'X', 'H']
    ['d', 'e', '$', 'D', 'E', 'B', 'C', 'F', 'G']
    ['b', 'c', 'f', 'g', 'r', 't', 'v', '%', 'T']
    ['h', 'j', 'm', 'n', 'u', 'y', 'V', 'N', 'M']
    ['i', 'k', '*', ',', '<', 'I', 'K', 'U', 'Y']
    ['l', 'o', '.', '>', '(', ')', 'L', 'O', ':']
    ['p', '-', '=', '[', ']', 'R', ';', 'P', 'J']
    [' ', '_', '+', '{', '}', '|', '?', '/', '"']''')
