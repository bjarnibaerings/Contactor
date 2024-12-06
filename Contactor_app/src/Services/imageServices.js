import * as ImagePicker from 'expo-image-picker';

const CAMERA_ROLL = 'CAMERA_ROLL';
const CAMERA = 'CAMERA';

const getPermission = async (permissionTypes) => {
    if (permissionTypes.includes(CAMERA)) {
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
        if (!cameraPermission.granted) {
            Alert.alert("Permission Required!");
        }
    } //only happens when permission is cancelled

    if (permissionTypes.includes(CAMERA_ROLL)) {
        const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!mediaPermission.granted) {
            Alert.alert("Permission Required!");
        }
    }
};

export const openCamera = async () => {
    await getPermission([CAMERA]); //permission

    const result = await ImagePicker.launchCameraAsync({ //open function from imagepicker required to open camera
        allowsEditing: true,
        quality: 0.8,
    });
    if (result.canceled) return null; //return null if nothing is selected
    
    return result.assets ? result.assets[0].uri : result.uri; //simplified so we can send the right uri back to be used
};


//repeated steps for gallery
export const openGallery = async () => {
    await getPermission([CAMERA_ROLL]);
    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 0.7,
    });

    if (result.canceled) return null;
    return result.assets ? result.assets[0].uri : result.uri;
};