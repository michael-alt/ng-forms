import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlainFormComponent } from './pages/plain-form/plain-form.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';
import { ApiService } from './services/api.service';
import { FakeApiService } from './services/fake-api.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Route, RouterModule } from '@angular/router';

const appRoutes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'plain', component: PlainFormComponent },
  { path: 'template', component: TemplateFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlainFormComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, NgbModule, RouterModule.forRoot(appRoutes)],
  providers: [{ provide: ApiService, useClass: FakeApiService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
