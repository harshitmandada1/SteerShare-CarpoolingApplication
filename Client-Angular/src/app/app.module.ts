import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostComponent } from './rides/post/post.component';
import { SearchComponent } from './rides/search/search.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './users/register/register.component';
import { ConfirmbookingComponent } from './confirmbooking/confirmbooking.component';
import { HttpModule } from '@angular/http';
import { ChatComponent } from './chat/chat.component';
import { ChatService   } from './services/chat.service';
import { AutocompleteComponent } from './rides/search/google-places.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostComponent,
    SearchComponent,
    LoginComponent,
    HomeComponent,
    ResultComponent,
    RegisterComponent,
    ConfirmbookingComponent,
    ChatComponent,
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
