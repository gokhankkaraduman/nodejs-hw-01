import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => {
    const contacts = await readContacts();
    for( let i = 0 ; i < number; i++) {
        const newContact = createFakeContact();
        contacts.push(newContact);
    }
    try {
        await writeContacts(contacts);
        console.log('Contacts have been generated successfully!');
    } catch (error) {
        console.error('Error generating contacts:', error);
        return null;
    }
};

generateContacts(5);
// This function is a placeholder for generating contacts.
