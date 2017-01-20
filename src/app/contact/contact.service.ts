import { Contact } from './contact';
import { CONTACTS } from './mock-contact';
import{Injectable} from '@angular/core';

@Injectable()
export class ContactService {
    getContacts() {
      return Promise.resolve(CONTACTS);
    }
    insertContact(contact:Contact){
      Promise.resolve(CONTACTS).then((contacts:Contact[])=>contacts.push(contact));
    }
}
