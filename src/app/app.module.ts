import { AppRoutingModule,routingComponents } from './app.routing';
import { Contact } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { contactList } from './contactlist/contactlist.component';
import { ContactService } from './contact/contact.service';
import { newContactComponent } from './contact/new-contact.component';

@NgModule({
  declarations: [
    AppComponent,contactList,Contact,routingComponents,newContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
