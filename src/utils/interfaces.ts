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

export interface LastBuildResult {
    _class: string;
    result: string;
}
export interface Job {
    _class: string;
    name: string;
    url: string;
    description: string;
    fullName: string;
    property: Array<object>;
    lastBuild: LastBuildResult | null;
}

export interface Build {
    _class: string;
    description: string | null;
    name?: string;
    displayName: string;
    fullDisplayName: string;
    id: string;
    result: string;
    url: string;
}