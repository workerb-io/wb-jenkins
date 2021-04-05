import { JENKINS_TOKEN, JENKINS_USER } from "./constants";
import { btoa, decodeApiResponse, getUrl } from "./helper";
import { DecodedAPIResponse } from "./interfaces";

const USER_AUTH: string = `Basic ${btoa(JENKINS_USER + ":" + JENKINS_TOKEN)}`
const API_HEADERS = {
	Authorization: USER_AUTH
}
const JOBS_API_TREE = "jobs[name,url,description,fullName,lastBuild[result],property[parameterDefinitions[name]]]"

export const getJobs = (): DecodedAPIResponse => {
	return decodeApiResponse(
		httpGet(getUrl(`/view/All/api/json?tree=${JOBS_API_TREE}`), API_HEADERS)
	);
}

export const buildJob = (buildUrl: string): DecodedAPIResponse => {
	return decodeApiResponse(
		httpPost(buildUrl, "{}", API_HEADERS)
	)
}

export const deleteJob = (deleteUrl: string): DecodedAPIResponse => {
	return decodeApiResponse(
		httpPost(deleteUrl, JSON.stringify({}), API_HEADERS)
	)
}

export const renameJob = (renameUrl: string, data: FormData): DecodedAPIResponse => {
	return decodeApiResponse(
		httpPost(renameUrl, JSON.stringify(data), API_HEADERS)
	)
}