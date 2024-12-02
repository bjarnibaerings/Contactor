import * as fileSystem from "expo-file-system"
const contactDirectory = "${FileSystem.documentDirectory}contacts";

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
    await FileSystem.deleteAsync(contactDirectory);
}

// Setup Directory
const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(contactDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(contactDirectory);
    }
}
export const remove = async name => {
    return await onException(() => FileSystem.deleteAsync(`${contactDirectory}/${name}`, { idempotent: true }));
}

/*
Images
*/

/*
Contacts
*/
//Add a new contact
export const addContact = async (contactInformation) =>{
    const fileUri = contactDirectory +"/"+contactInformation.name + "-" + contactInformation.id +".json";
    const jsonContents = JSON.stringify(contactInformation);
    fileSystem.writeAsStringAsync(fileUri,jsonContents);
}

export const getAllContacts = async () => {
    try {
      // Read all files in the contacts directory
      const files = await FileSystem.readDirectoryAsync(contactDirectory);
  
      // Read each files content and add it to a list
      const contacts = [];
      for (const file of files) {
        const fileUri = contactDirectory + "/" + file;
        const fileContents = await FileSystem.readAsStringAsync(fileUri);
        //reverse JSON.stringify
        const contact = JSON.parse(fileContents);
        contacts.push(contact);
      }
  
      console.log("All contacts:", contacts);
    } catch (error) {
      console.error("Error getting contacts:", error);
    }
  };


// Copy 
export const copyFile = async (file, newLocation) => {
    return await onException(() => FileSystem.copyAsync({
        from: file,
        to: newLocation
    }));
}
/*Todo:
    getAllContacts
    getAllImages
    addImage
    loadImage
    addContact
    loadContact

    updateContact
        updateImage
    deleteContact
    deleteImage

*/