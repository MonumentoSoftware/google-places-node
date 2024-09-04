import { GooglePlacesDetailSearcher } from "../src/controllers/placeDetail";
import * as dotenv from 'dotenv';

dotenv.config();    
const apiKey = process.env.GOOGLE_MAPS_API as string;
const searcher = new GooglePlacesDetailSearcher(apiKey);
const result = await searcher.makeSearch("ChIJjVT2MNlv5kcR4QtneAsLSdU");
console.log(result);