import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { WasteCollectorTracerSharedModule } from 'app/shared/shared.module';
import { WasteCollectorTracerCoreModule } from 'app/core/core.module';
import { WasteCollectorTracerAppRoutingModule } from './app-routing.module';
import { WasteCollectorTracerHomeModule } from './home/home.module';
import { WasteCollectorTracerEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    WasteCollectorTracerSharedModule,
    WasteCollectorTracerCoreModule,
    WasteCollectorTracerHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WasteCollectorTracerEntityModule,
    WasteCollectorTracerAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class WasteCollectorTracerAppModule {}
