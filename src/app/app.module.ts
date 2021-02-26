import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { DetailModule } from './detail/detail.module';

import { AppComponent } from './app.component';

import { ElectronService } from './core/services';

import { SearchComponent } from './search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SpinnerComponent } from './spinner/spinner.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, SearchComponent, SpinnerComponent],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    //MatButtonModule, MatCheckboxModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    //MatProgressSpinnerModule,
    DetailModule,
    AppRoutingModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {}
