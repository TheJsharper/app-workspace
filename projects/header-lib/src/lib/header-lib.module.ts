import { HeaderLibService } from './header-lib.service';
import { NgModule } from '@angular/core';
import { HeaderLibComponent } from './header-lib.component';



@NgModule({
  declarations: [HeaderLibComponent],
  imports: [
  ],
  exports: [HeaderLibComponent],
  providers:[HeaderLibService]

})
export class HeaderLibModule { }
