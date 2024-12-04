import * as fileSystem from "expo-file-system"
const contactDirectory = `${fileSystem.documentDirectory}contacts`;

// Error handaling
const onException = (cb, errorHandler) => {
    try {
        return cb();
    } catch (err) {
        if (errorHandler) {
            return errorHandler(err);
        }
        console.error(err);
    }
}

/*
Directory
*/
// Clean
export const cleanDirectory = async () => {
    await fileSystem.deleteAsync(contactDirectory);
}

// Setup Directory
const setupDirectory = async () => {
    const dir = await fileSystem.getInfoAsync(contactDirectory);
    if (!dir.exists) {
        await fileSystem.makeDirectoryAsync(contactDirectory);
    }
}

export const remove = async name => {
    return await onException(() => fileSystem.deleteAsync(`${contactDirectory}/${name}`, { idempotent: true }));
}

/*
Images
*/

/*
Contacts
*/
//Add a new contact
export const addContact = async (contactInformation) =>{
    await setupDirectory();
    const fileUri = `${contactDirectory}/${contactInformation.name}-${contactInformation.id}.json`;
    const jsonContents = JSON.stringify(contactInformation);

    try {
        await fileSystem.writeAsStringAsync(fileUri, jsonContents);
    } catch (error) {
        console.log("Error saving contact:", error);
        throw error;
    }
}

export const getAllContacts = async () => {
    try {
        await setupDirectory();
      // Read all files in the contacts directory
      const files = await fileSystem.readDirectoryAsync(contactDirectory);
  
      // Read each files content and add it to a list
      const contacts = [];
      for (const file of files) {
        const fileUri = contactDirectory + "/" + file;
        const fileContents = await fileSystem.readAsStringAsync(fileUri);
        //reverse JSON.stringify
        const contact = JSON.parse(fileContents);
        contacts.push(contact);
      }
      return contacts
    } catch (error) {
      console.error("Error getting contacts:", error);
    }
  };


// Copy 
export const copyFile = async (file, newLocation) => {
    return await onException(() => fileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
}
