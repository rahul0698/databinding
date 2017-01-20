import { ContactService } from './../contact/contact.service';
import { Contact } from './../contact/contact.component';
import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
@Component({
  selector: 'mylist',
  styleUrls:['./contactlist.css'],
  templateUrl: './contact-listComponent.html'
})
export class contactList implements OnInit{
  public contacts:Contact[];
  constructor(private _contactservice:ContactService){}
  public selectedContact = null;
  onSelect(contact) {
    this.selectedContact = contact;
  }
  getContacts(){
    this._contactservice.getContacts().then((detail:any) => this.contacts=detail);
  }
  ngOnInit():any{
    this.getContacts();
  }
  
}