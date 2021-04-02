import { JENKINS_TOKEN, JENKINS_USER } from "./constants";
import { btoa, decodeApiResponse, getUrl } from "./helper";
import { DecodedAPIResponse } from "./interfaces";

const USER_AUTH: string = `Basic ${btoa(JENKINS_USER + ":" + JENKINS_TOKEN)}`
const API_HEADERS = {
	Authorization: USER_AUTH
}

export const getJobs = (): DecodedAPIResponse => {
	return decodeApiResponse(
		httpGet(getUrl(`/view/All/api/json`), API_HEADERS)
	);
}

export const buildJob = (jobUrl: string): DecodedAPIResponse => {
	return decodeApiResponse(
		httpPost(jobUrl, {}, API_HEADERS)
	)
}