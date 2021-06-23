import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

// ...: Spread operator
const myComponents = [CharacterListComponent, CharacterDetailsComponent]


@NgModule({
  declarations: [
    ...myComponents
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    ...myComponents
  ]
})
export class CharactersModule { }
