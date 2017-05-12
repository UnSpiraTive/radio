import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SafeUrlPipe } from './services/safe-url.service';

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
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
