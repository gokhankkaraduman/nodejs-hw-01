import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
    let contacts = await readContacts();
    contacts = [];
    await writeContacts(contacts);
};

removeAllContacts();
