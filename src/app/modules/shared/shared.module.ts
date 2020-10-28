import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { HamburgerComponent } from './components/hamburger/hamburger.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, HamburgerComponent],
  imports: [
    CommonModule,
    ToastrModule.forRoot(),
  ],
  exports: [HeaderComponent, FooterComponent, ToastrModule, HamburgerComponent]
})
export class SharedModule { }
