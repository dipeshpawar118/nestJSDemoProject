import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {

    getType() : string {
        // throw Error(" error ")  // "Dog"
        return "Dog"
    }

     checkNumber(num : number ) : string{
        if( num%2 == 0 ){
            return "Number is even"
        }else {
            return "Number is odd"
        }
     }


   
}
