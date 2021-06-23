import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Character } from '@app/shared/interfaces/character.interface';
import { CharacterService } from '@app/shared/services/character.service';

import { take } from 'rxjs/operators';

type RequestInfo = {
  next: string;
};

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  // Character[]: Esta es la interface que creamos
  characters: Character[] = [];

  info: RequestInfo = {
    next: '',
  };


  private pageNum = 1;
  private query: string = '';
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(
    private CharacterSvc: CharacterService, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getDataFromService();
  }
  

  private getDataFromService(): void {
    
    // take: El operador lo tomamos del modulo rxjs en la parte superior
    // ...: Spread Operator para agregar valores de una array en otro
    // info: Es si existe otra pagina para hacer la paginacion
    // results: Son los datos de los personajes
    // ?. : Optional chaining para asegurar de que las propiedades existan antes de leerlas
    this.CharacterSvc
      .searchCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {

        if(res ?.results?.length) {
          const {info, results} = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
        } else {
          this.characters = [];
        }

      });

  }

}
