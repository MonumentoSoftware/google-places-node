// Based on the information available here: https://developers.google.com/maps/documentation/places/web-service/search-find-place?hl=pt-br

export type BasicFields =
    | "business_status"
    | "formatted_address"
    | "geometry"
    | "icon"
    | "icon_mask_base_uri"
    | "icon_background_color"
    | "name"
    | "photo"
    | "place_id"
    | "plus_code"
    | "type"


export type Field = BasicFields
export type Fields = Field[];

export const basicFields = [
    "address_components",
    "adr_address",
    "business_status",
    "formatted_address",
    "geometry",
    "icon",
    "icon_mask_base_uri",
    "icon_background_color",
    "name",
    "photo",
    "place_id",
    "plus_code",
    "type",
    "url",
    "utc_offset",
    "vicinity",
    "wheelchair_accessible_entrance"
] as const;