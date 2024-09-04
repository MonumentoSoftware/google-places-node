import { Fields } from "../fields";




/**
 * Interface for the parameters of the Google Places API search request.
 */
interface PlaceSearchParams {
    input: string;
    inputtype: string;
    fields: string[];
    key: string;
}


/**
 * Class to search for a place using the Google Places API.
 * It returns a single place based on the query.
 */
class GooglePlaceSearcher {
    private static readonly baseUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json';

    constructor(private apiKey: string) {
        this.apiKey = apiKey;
    }

    /**
     * Makes a request to the Google Places API to find a place based on the input query.
     * @param query - The search query.
     * @returns A promise that resolves to the search result.
     */
    async makeSearch(query: string, fields: Fields = []): Promise<Record<string, unknown>> {
        const params: PlaceSearchParams = {
            input: query,
            inputtype: 'textquery',
            fields: ['name','formatted_address', 'place_id',...fields],
            key: this.apiKey
        };

        const url = new URL(GooglePlaceSearcher.baseUrl);
        url.search = new URLSearchParams(params as any).toString();

        const response = await fetch(url.toString());
        if (response.status !== 200) {
            console.log(`Error ${response.status}: ${await response.text()}`);
        }
        return await response.json();
    }
}




export { GooglePlaceSearcher };
