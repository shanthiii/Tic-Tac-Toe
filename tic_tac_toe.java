//Tic-Tac-Toe Game in Java!

import java.util.Scanner;

class gamePlay{

    static char play[][] = new char[3][3];
    static int gameOver = 0;
    static int moves = 0;

    static char input;
    static Scanner scan = new Scanner(System.in);
    public static void main(String args[]){
        
        
        //char rematch = ' ';
        char result = ' ';

        startGame();
        System.out.flush();
        System.out.print("\033[H\033[2J");
        //system("cls");

        System.out.println("===========");
        System.out.println("Tic-Tac-Toe");
        System.out.println("===========");      
        
        System.out.println("Player 1) X");
        System.out.println("Player 2) O");

        System.out.println("Press any key to begin");
        scan.next().charAt(0);

        //system("cls");
        System.out.flush();
        System.out.print("\033[H\033[2J");

        while(gameOver == 0){
            display();
            player_1();
            moves++;

            if(moves==9){
                break;
            }
            result = check();
            if (result != ' '){
                break;
            }

            display();
            player_2();
            moves++;

            if(moves == 9){
                break;
            }
            result = check();
            if(result!= ' '){
                break;
            }

        }

        char ans = check();
        display();

        if(ans == 'X'){
            System.out.println("Player 1: X won");
        }
        else if(ans == 'O'){
            System.out.println("Player 2: O won");
        }
        else{
            System.out.println("Ooppssss!!! It's a Tie Game!");
            
            System.out.println("Want a rematch (y/n)? ");
            char rematch = scan.next().charAt(0);

            if(rematch == 'y' || rematch == 'Y'){
                main(null);
            }
            else{
                System.out.println();
            }

        }
        System.out.println("Thanks for Playing!");        

    }
    public static void startGame(){
        int i,j;
        for(i=0;i<3;i++){
            for(j=0;j<3;j++){
                play[i][j] = ' ';
            }
        }
    }

    public static void display(){
        int i;
        //system("cls");
        System.out.flush();
        System.out.print("\033[H\033[2J");
        System.out.println("===========");
        System.out.println("Tic-Tac-Toe");
        System.out.println("===========");

        for (i=0;i<3;i++){
            System.out.println(" " + play[i][0] + " | " + play[i][1] + " | " + play[i][2]);
            if(i!=2){
                System.out.println("---|---|---");
            }
        }
        System.out.println();
    }
    public static void player_1(){
        int x,y;
        System.out.println("P1) Enter Coordinates: ");
        x = scan.nextInt();
        y = scan.nextInt();
        x--;
        y--;
        if(play[x][y] != ' '){
            System.out.println("Invalid entry, try again!");
            player_1();
        }
        else {
            play[x][y] = 'X';
        }
    }
    public static void player_2(){
        int x,y;
        System.out.println("P2) Enter Coordinates: ");
        x = scan.nextInt();
        y = scan.nextInt();
        x--;
        y--;
        if(play[x][y] != ' '){
            System.out.println("Invalid entry, try again!");
            player_1();
        }
        else {
            play[x][y] = 'O';
        }
    }

    public static char check(){
        int i;
        for(i=0;i<3;i++){
            if(play[i][0] == play[i][1] && play[i][0] == play[i][2]){
                return play[i][0];
            }
            if(play[0][i] == play[1][i] && play[0][i] == play[2][i]){
                return play[0][i];
            }
        }
        if(play[0][0] == play[1][1] && play[1][1] == play[2][2]){
            return play[0][0];
        }
        if(play[0][2] == play[1][1] && play[1][1] == play[2][0]){
            return play[i][0];
        }

        return ' ';
    }


}
