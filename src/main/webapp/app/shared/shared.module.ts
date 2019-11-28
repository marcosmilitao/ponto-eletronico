import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PontoEletronicoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [PontoEletronicoSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [PontoEletronicoSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PontoEletronicoSharedModule {
  static forRoot() {
    return {
      ngModule: PontoEletronicoSharedModule
    };
  }
}
