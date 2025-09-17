import axios from "axios";
import { GOOGLE_MAP_API } from "./config";
import { updateUserLocation } from "./authService";

export const reverseGeocode = async (latitude: number, longitude: number, setUser: any) => {
    try {
        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${"AIzaSyBqR8ck9A02QRP7RIIJ1daV93XNRUDt-Mk"}`
        )

        if (response.data.status == 'OK') {
            const address = response.data.results[0].formatted_address;
    
            updateUserLocation({ liveLocation: { latitude, longitude }, address }, setUser)
        } else {
            console.error("Geo Code Failded",response.data)
        }

    } catch (error) {
        console.error("Geo Code Failded",error)
    }
}
