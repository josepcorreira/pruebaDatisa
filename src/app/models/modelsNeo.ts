export interface ResponseApi {
    element_count: number;
    links: any;
    near_earth_objects: any;
}
export interface NeoObject {
    day:string;
    absolute_magnitude_h: number;
    close_approach_data: Array<any>;
    estimated_diameter: any;
    id: string;
    is_potentially_hazardous_asteroid: boolean;
    is_sentry_object: boolean;
    links: any;
    name: string;
    nasa_jpl_url: string;
    neo_reference_id: string;
    orbital_data:any
}
