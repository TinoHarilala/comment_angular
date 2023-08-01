import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'printName'
})
export class PrintName implements PipeTransform{
    transform( fullName : { firstName : string, lastName : string }, locale : 'en' | 'fr' = 'fr' ) : string {
        return locale === 'fr' ? 
            `${fullName.lastName.toUpperCase()} ${fullName.firstName.toLowerCase()}` :
            `${fullName.firstName} ${fullName.lastName}` 
            
    }
}