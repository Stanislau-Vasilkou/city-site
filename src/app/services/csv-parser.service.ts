import { Injectable } from '@angular/core';
import {User} from '../form/data/user';

@Injectable({
  providedIn: 'root'
})
export class CsvParserService {
    public parseCSVtoJSON( csv: string ) {
    const data: Array<string> = csv.replace(/\r/g, '').replace(/\n$/, '').split('\n');
    const result: Array<User> = [];
    const headers: Array<string> = data[0].split(';');

    for (let i = 1; i < data.length; i++) {
      const uniqueUser: User = new User;
      const currentLine: Array<string> = data[i].split(';');

      for (let j = 0; j < headers.length; j++) {
        if (currentLine[j] !== undefined || currentLine[j] !== '') {
          uniqueUser[headers[j]] = currentLine[j];
        } else {
          console.log(`property ${headers[j]} doesn't exist`);
        }
      }
      result.push(uniqueUser);
    }
    return result;
  }
}
