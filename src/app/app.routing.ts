import  { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
import { contactList } from './contactlist/contactlist.component';
// import { Contact } from './contact/contact';
import { Routes,RouterModule } from '@angular/router';
import { newContactComponent } from './contact/new-contact.component';

const routes:Routes = [
    {path:'',pathMatch:'full',redirectTo:'contacts'},
    {path:'contacts', component: contactList},
    {path:'new-contacts', component: newContactComponent},
    {path:'new-contacts/:lastName', component: newContactComponent}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [contactList,newContactComponent]
