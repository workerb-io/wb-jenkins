import { API_URL } from './constants';
import { DecodedAPIResponse, ErrorResponse } from './interfaces';

export const getUrl = (endPoint: string): string => {
	return API_URL + endPoint;
}

export const decodeApiResponse = (result: APIResponse): DecodedAPIResponse => {
	if (!result.response) {
		return {
			response: {},
			status: result.status
		};
	}

	return {
		response: JSON.parse(result.response),
		status: result.status
	};
}

// check if the job is parameterized or not
export const hasParameters = (props: Array<any>): boolean => {
	let hasParams = false;
	if (props && props.length > 0) {
		props.forEach((prop: any) => {
			if ("parameterDefinitions" in prop && prop["parameterDefinitions"].length > 0) {
				hasParams = true
			}
		});
	}
	return hasParams
}

export const truncate = (str: string, maxLength: number): string => {
	return (str && str.length > maxLength) ? str.substr(0, maxLength - 1) + '...' : str;
};
