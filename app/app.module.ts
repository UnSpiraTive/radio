import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SafeUrlPipe } from './services/safe-url.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';



import { AppComponent } from './components/app.component';
import { ChatComponent } from './components/chat/chat.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { routing } from './app.routing';
import { MainComponent } from './components/main/main.component';
import { PresentersComponent } from './components/presenters/presenters.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { ContactComponent } from './components/contact/contact.component';
import { FootComponent } from './components/foot/foot.component';
import { AdminComponent } from './components/admin/admin.component';
import { SlaidshowComponent } from './components/slaidshow/slaidshow.component';
import { NewsComponent } from './components/news/news.component';
import { SlaidComponent } from './components/slaid/slaid.component';
import { AdminPrezenterzyComponent } from './components/admin-prezenterzy/admin-prezenterzy.component';
import { AdminPropozycjeComponent } from './components/admin-propozycje/admin-propozycje.component';
import { AdminRamowkaComponent } from './components/admin-ramowka/admin-ramowka.component';
import { AdminNewsComponent } from './components/admin-news/admin-news.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    PresentersComponent,
    PropositionComponent,
    ContactComponent,
    FootComponent,
    AdminComponent,
    NewsComponent,
    SlaidshowComponent,
    NewsComponent,
    SlaidComponent,
    SafeUrlPipe,
    AdminPrezenterzyComponent,
    AdminPropozycjeComponent,
    AdminRamowkaComponent,
    AdminNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
