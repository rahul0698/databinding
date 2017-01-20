import { Contact } from './contact.component';
import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component ({
    templateUrl: './new-component.html',
    styles:[`
       label{
           display:inline-block;
           width:140px;
       } 
       input {
           width:220px;
       }
       button {
           margin-top:20px;
           margin-left:140px;
       }
    `]
})

export class newContactComponent {
     private firstName:string;
     private lastName:string;
     private teleNo:string;
     private email:string;

    constructor(private _contactservice:ContactService,
                private _router:Router,
                private _route:ActivatedRoute){}

    ngOnInit(){
        this._route.params.subscribe((params) => {
        let userId = params['lastName'];
        this.lastName = userId;

      });
    }

    onAddContact() {
        let newContact:any ={firstName:this.firstName, lastName:this.lastName, teleNo:this.teleNo, email:this.email};
        this. _contactservice.insertContact(newContact);
        this._router.navigate(['contacts']);
    }
}