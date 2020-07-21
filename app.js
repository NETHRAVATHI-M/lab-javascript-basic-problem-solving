// Progression 1: Names and Input
function print() {
    var ProGrad1 = "The driver's name is Nethravthi";
    console.log(ProGrad1);
    var ProGrad2 = "The navigator's name is jithin";
    console.log(ProGrad2);
}


// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

// Progression 2: Control Statements - 1

function char() {
    const str = ' Nethravthi';
    const str1 = 'jithin';

    let a = str.length;
    let b = str1.length;

    if (a > b) {
        console.log(str);
    } else {
        console.log(str1)
    }
}
char();

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.



function getVowels(str) {
    var vowelsCount = 0;
    //turn the input into a string
    var string = str.toString();
    //  var str = "ArchanaReddy";
    //loop through the string
    for (var i = 0; i <= string.length - 1; i++) {
        //if a vowel, add to vowel count
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
            console.log(string.charAt(i));
            // console.log(str);
        }
    }
    return vowelsCount;
}
console.log(getVowels("Nethravathi")); // 2 a e

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5. 

function Case() {
    let name = "Jithin";
    //let len;
    var uppercase = 0;
    var lowercase = 0;
    for (var i = 0; i < name.length; i++) {
        if (name[i] >= "a" && name[i] <= "z")
            lowercase++;
        else
            uppercase++;
    }

    console.log("uppercase in " + name + "  " + uppercase);
    console.log("lowercase in " + name + " " + lowercase);
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters



// Progression 3: Control Statements - 2
function printchar() {
    var ProGrad1 = "ArchanaReddy";
    var ProGrad2 = "Nikhil"
    //  3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

    var input = ProGrad1.split("");
    var str = " ";
    for (let i = 0; i < input.length; i++) {
        str = str + input[i].toUpperCase() + " ";
    }
    console.log(str);

    // 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
    function strcmp(ProGrad1, ProGrad2) {
        if (ProGrad1 === ProGrad2) {
            return 0;
        }

        if (ProGrad1 > ProGrad2) {
            return 1;
        }

        return -1;
    }

    console.log(strcmp("Nethravathi", "jathin")); // -1


   // console.log(ProGrad1);
   // console.log(ProGrad2);

    var input = ProGrad1.split("");
    var str = " ";
    for (let i = 0; i < input.length; i++) {
        str = str + input[i].toUpperCase() + " ";
        // str.split("").reverse().log();
    }
    console.log(str);

    // 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
    // - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
    console.log(ProGrad1.concat(" ", ProGrad2));
    console.log(ProGrad2.concat(" ", ProGrad1));
}
