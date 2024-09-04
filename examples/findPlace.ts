//
import {config} from 'dotenv';
import { readJsonFile, writeJsonFile } from "../src/utils/fileHelper";
import { GooglePlaceSearcher } from '../src/controllers/searchPlace';

config();
const apiKey = process.env.GOOGLE_MAPS_API as string;
const searcher = new GooglePlaceSearcher(apiKey);
const result = await searcher.makeSearch("Eiffel Tower", ['name', 'formatted_address', 'geometry', 'photo'],);
await writeJsonFile('eiffelTower.json', result);
const file = await readJsonFile('eiffelTower.json');
console.log('_________');
console.log(file);