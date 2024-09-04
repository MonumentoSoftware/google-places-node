import { GooglePlacesNearbySearcher } from "../src/controllers/nearbyPlaces";
import * as dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.GOOGLE_MAPS_API as string;
const searcher = new GooglePlacesNearbySearcher(apiKey);
const result = await searcher.makeSearch("48.8584,2.2945", 1500, 'restaurant');
console.log(result);