import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { environment } from '@environment/environment';
import { Character } from '@shared/interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  
  // page: Filtar por paginas
  // query: Podemos filtrar por todos los personajes o filtrar por el que el usuario inserte
  // Character: Es la interface que se creo donde se tienen cada uno de los campos
  // environment: Es alli donde tenemos alojada la URL de la API que estamos usando

  searchCharacters(query = '', page = 1) {
    
    const filter = `${environment.baseUrlAPI}/?name=${query}&${page}`;

    return this.http.get<Character[]>(filter);

  }
  
  
  // id: Nos sirve para realizar la consulta de cada uno de los personajes
  getDetails(id: number){

    const oneCharacter = `${environment.baseUrlAPI}/${id}`;

    return this.http.get<Character>(oneCharacter);

  }


}