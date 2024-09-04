/**
 * Interface for the parameters of the Google Places API nearby search request.
 */
interface NearbySearchParams {
    keyword?: string;
    location: string;
    radius: number;
    type?: string;
    key: string;
}


/**
 * Class to search for nearby places using the Google Places API.
 * It returns an array of places instead of a single place.
 */
class GooglePlacesNearbySearcher {
    private static readonly baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    constructor(private apiKey: string) {
        this.apiKey = apiKey;
    }
    /**
     * Constructs the parameters for a nearby search request.
     * @param location - The location around which to search for places (latitude,longitude).
     * @param radius - The radius (in meters) within which to search for places.
     * @param keyword - (Optional) A term to be matched against all content that Google has indexed for this place.
     * @param type_ - (Optional) Restricts the results to places matching the specified type.
     * @returns The constructed search parameters.
     */
    private constructParams(location: string, radius: number, keyword?: string, type_?: string): NearbySearchParams {
        const params: NearbySearchParams = {
            location,
            radius,
            key: this.apiKey
        };
        if (keyword) {
            params.keyword = keyword;
        }
        if (type_) {
            params.type = type_;
        }
        return params;
    }

    /**
     * Makes a request to the Google Places API to search for nearby places.
     * @param location - The location around which to search for places (latitude,longitude).
     * @param radius - The radius (in meters) within which to search for places.
     * @param keyword - (Optional) A term to be matched against all content that Google has indexed for this place.
     * @param type_ - (Optional) Restricts the results to places matching the specified type.
     * @returns A promise that resolves to the search results.
     */
    async makeSearch(location: string, radius: number, keyword?: string, type_?: string): Promise<Record<string, unknown>> {
        const params = this.constructParams(location, radius, keyword, type_);

        const url = new URL(GooglePlacesNearbySearcher.baseUrl);
        url.search = new URLSearchParams(params as any).toString();

        const response = await fetch(url.toString());
        if (response.status === 200) {
            return await response.json();
        } else {
            console.log(`Failed to fetch data: ${response.status}, ${await response.text()}`);
            return await response.json();
        }
    }
}

export { GooglePlacesNearbySearcher };