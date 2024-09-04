import { Fields } from "../fields";

/**
 * Interface for the parameters of the Google Places API details request.
 */
interface PlaceDetailsParams {
    place_id: string;
    fields: string[];
    key: string;
}


/**
 * Class to search for details of a place using the Google Places API.
 * It returns detailed information about a single place.
 */
class GooglePlacesDetailSearcher {
    private static readonly baseUrl = 'https://maps.googleapis.com/maps/api/place/details/json';

    constructor(private apiKey: string) {
        this.apiKey = apiKey;
    }

    /**
     * Makes a request to the Google Places API to get details of a place.
     * @param placeId - The ID of the place to retrieve details for.
     * @returns A promise that resolves to the place details.
     */
    async makeSearch(placeId: string, fields:Fields=[]): Promise<Record<string, unknown>> {
        const params: PlaceDetailsParams = {
            place_id: placeId,
            fields: [...fields],
            key: this.apiKey
        };

        const url = new URL(GooglePlacesDetailSearcher.baseUrl);
        url.search = new URLSearchParams(params as any).toString();

        const response = await fetch(url.toString());
        if (response.status !== 200) {
            console.log(`Error ${response.status}: ${await response.text()}`);
        }
        return await response.json();
    }
}

export { GooglePlacesDetailSearcher };