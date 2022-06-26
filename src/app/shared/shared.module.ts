import { NgModule } from '@angular/core';
import { ErrorMessageDirective } from './directives/error-message.directive';
import { CustomIfDirective } from './directives/custom-if.directive';



@NgModule({
  declarations: [
    ErrorMessageDirective,
    CustomIfDirective
  ],
  exports:[
    ErrorMessageDirective,
    CustomIfDirective
  ]
})
export class SharedModule { }
