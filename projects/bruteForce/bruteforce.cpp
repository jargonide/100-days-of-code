#include <iostream>
#include <cstdlib>
#include <string>

std::string chars = "abcdefghijklmnopqrstuvwxyz";
std::string iterateStr(std::string s, std::string guess, int pos);
std::string crack(std::string s);
std::string iterateChar(std::string s, std::string guess, int pos);

int main() {

    crack("bb");

    return EXIT_SUCCESS;
}

// this function iterates through the letters of the alphabet
std::string iterateChar(std::string s, std::string guess, int pos) {
    for(int i = 0; i < chars.length(); i++) {
        // sets the char to a certain letter from the chars variable
        guess[pos] = chars[i];
        // if the position reaches the end of the string
        if(pos == s.length()) {
            if(guess.compare(s) == 0) {
                break;
            } 
        } else {
            // else, recursively call the function
            std::cout << guess << " : " << s << std::endl;
            iterateChar(s, guess, pos+1);
        }
    }
    return guess;
}

// this function iterates through the characters in the string
std::string iterateStr(std::string s, std::string guess, int pos) {
    for(int i = 0; i < s.length(); i++) {
        guess = iterateChar(s, guess, i);
        if(s.compare(guess) == 0) {
            return guess;
        }
    }
    return guess;
}

std::string crack(std::string s) {
    int len = s.length();
    std::string newS(len, 'a');
    std::string newGuess;
    newGuess = iterateStr(s, newS, 0);
    return newGuess;
}

