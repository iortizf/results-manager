import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent],
  exports:[CommonModule, HeaderComponent]
})
export class SharedModule { }
