import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sarcasm'
})
export class SarcasmPipe implements PipeTransform {

  // Takes a string as input, returns the string with alternate capitalizations
  // Example input: This is a string
  // Example output: tHiS iS a StRiNg
  transform(value: string): string {

    //Strings are immutable, a lot of new String objects are going to be made in this function
    if(value == null || value.length == 0){
      return value
    }

    //Make two variations of input, which the code will pull from when it needs a lower/uppercase character
    var lowercase = value.toLowerCase();
    var uppercase = value.toUpperCase();


    // where i is even, take from lowercase, where i is odd, take from uppercase string
    //todo: Take into account spaces
    var outputString = "";
    for (var i = 0; i < value.length; i++){
      if(i % 2 == 0){ //Hello modulus operator, my old friend
        //even, lowercase
        outputString += lowercase.charAt(i);
      } else{
        //odd, uppercase
        outputString += uppercase.charAt(i);
      }
    }

    return outputString;
  }

}
