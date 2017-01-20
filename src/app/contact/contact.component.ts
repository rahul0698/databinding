import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'contactDetails',
    templateUrl: './contact-component.html',
  
    styles:[`
       label{
           display:inline-block;
           width:140px;
       } 
       input {
           width:220px;
       }
       button {
           margin-top:15px;
       }
    `]
})

export class Contact {
    @Input() detail=null;
    public LastName="";

    constructor(private _router:Router,
               private _route: ActivatedRoute){}
    onCreateNew(){
        console.log(this.detail.lastName);
        this._router.navigate(['new-contacts/'+this.detail.lastName]);
    }
}