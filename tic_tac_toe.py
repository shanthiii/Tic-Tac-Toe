#Tic-Tac-Toe Game in python!

import os
matrix = []        
gameOver = 0                    

def startGame():
    i = 0
    j = 0
    for i in range(3): 
        a = []
        for j in range(3) :
            a.append(' ')
        matrix.append(a)
            

def display():
    
    #system("cls");
    os.system('clear')
    
    print("===========")
    print("Tic-Tac-Toe")
    print("===========")
    
    for i in range(3):
        
        print("", matrix[i][0], "|", matrix[i][1], "|", matrix[i][2])
        
        if (i != 2):
            
            print("---|---|---")

    print("\n")
    



def p1():
    
    x = int(input("P1) Enter x coordinate: "))
    y = int(input("P1) Enter y coordinate: "))

    x-=1
    y-=1
    
    
    if (matrix[x][y] != ' '):
        
        print("\nInvalid entry, try again.\n\n")
        p1()
    else:
        
        matrix[x][y] = 'X'
        
 
def p2() :
    x = int(input("P1) Enter x coordinate: "))
    y = int(input("P1) Enter y coordinate: "))
    
    
    x-=1
    y-=1
    
    
    if (matrix[x][y] != ' '):
        
        print("\nInvalid entry, try again.\n\n")
        p1()
    else:
        matrix[x][y] = 'O'

def check():
    
    
    for i in range(3):

        if (matrix[i][0] == matrix[i][1]):
            if matrix[i][0] == matrix[i][2]:
                return matrix[i][0]
    
        if (matrix[0][i] == matrix[1][i]):
            if matrix[0][i] == matrix[2][i]:
                return matrix[0][i]
    

    if (matrix[0][0] == matrix[1][1]):
        if(matrix[1][1] == matrix[2][2]):
            return matrix[0][0]
        
    
    if (matrix[0][2] == matrix[1][1]): 
        if(matrix[1][1] == matrix[2][0]):
            return matrix[0][2]
    
    
    return ' '



def main():
    moves = 0 
           
    rematch = ' '        
    result = ' '
    
    startGame()

    os.system('clear')
    print("===========")
    print("Tic-Tac-Toe")
    print("===========")
    
    print("Player 1) X")
    print("Player 2) O")
    
    enter = input("Press [Enter] to begin!")

    os.system('clear')
   
    while (gameOver == 0):
        
        display();              
        p1();                   
        moves += 1
        if moves==9:
            break

        result = check()
        
        if (result != ' '):
            break
        
        display()
        p2()
        moves+=1
        
        if (moves == 9):
            break
        
        result = check()
        
        if (result != ' '):
            break
    
    ans = check()

    display()
    
    if (ans == 'X'):
        print("Player 1: X won!\n\n")
        
    elif (ans == 'O'):
        print("Player 2: O won!\n\n")

    else:
        print("It's a Tie Game!\n\n")
        
        rematch = input("Want a rematch (y/n)? ")
        if (rematch == 'y') :
            main()
        elif rematch == 'Y':
            main()
        else:
            print("\n")
        
    
    print("Thanks for playing!\n\n")
    
    

main()

