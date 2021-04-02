/**
 * Add all the interfaces that are going to be used for the development
 * of this package
 */

export interface ErrorResponse {
    message: string;
    phrase: string;
}

export interface DecodedAPIResponse {
    response: any;
    status: number;
}
export interface Job {
    _class?: string;
    name: string;
    url: string;
    color?: string;
    description?: string;
    displayName?: string;
    fullName?: string;
    buildable?: boolean;
    property?: Array<object>;
}