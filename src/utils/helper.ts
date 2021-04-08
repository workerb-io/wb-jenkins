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
	return (str.length > maxLength) ? str.substr(0, maxLength - 1) + '...' : str;
};

// base64 character set, plus padding character (=)
let b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
// Regular expression to check formal correctness of base64 encoded strings
let b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;

export const btoa = (str: string) => {
	str = String(str);
	var bitmap, a, b, c,
		result = "", i = 0,
		rest = str.length % 3; // To determine the final padding

	for (; i < str.length;) {
		if ((a = str.charCodeAt(i++)) > 255
			|| (b = str.charCodeAt(i++)) > 255
			|| (c = str.charCodeAt(i++)) > 255)
			throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");

		bitmap = (a << 16) | (b << 8) | c;
		result += b64.charAt(bitmap >> 18 & 63) + b64.charAt(bitmap >> 12 & 63)
			+ b64.charAt(bitmap >> 6 & 63) + b64.charAt(bitmap & 63);
	}

	// If there's need of padding, replace the last 'A's with equal signs
	return rest ? result.slice(0, rest - 3) + "===".substring(rest) : result;
};

export const atob = (str: string) => {
	// atob can work with strings with whitespaces, even inside the encoded part,
	// but only \t, \n, \f, \r and ' ', which can be stripped.
	str = String(str).replace(/[\t\n\f\r ]+/g, "");
	if (!b64re.test(str))
		throw new TypeError("Failed to execute 'atob' on 'Window': The str to be decoded is not correctly encoded.");

	// Adding the padding if missing, for semplicity
	str += "==".slice(2 - (str.length & 3));
	var bitmap, result = "", r1, r2, i = 0;
	for (; i < str.length;) {
		bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12
			| (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

		result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255)
			: r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255)
				: String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
	}
	return result;
};
