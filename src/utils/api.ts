import { JENKINS_TOKEN, JENKINS_USER, JOB_BUILD_URI } from "./constants";
import { decodeApiResponse, getUrl } from "./helper";
import { DecodedAPIResponse } from "./interfaces";

const USER_AUTH: string = `Basic ${btoa(JENKINS_USER + ":" + JENKINS_TOKEN)}`
const API_HEADERS = {
	Authorization: USER_AUTH
}

const JOBS_API_TREE = "jobs[name,url,description,fullName,lastBuild[result],disabled,property[parameterDefinitions[name]]]"
const BUILDS_API_TREE = "builds[id,displayName,fullDisplayName,description,result,url]"
const USERS_API_TREE = "users[user[absoluteUrl,fullName,description]]"

const getJenkinsCrumbHeader = () => {
	const crumbResponse = getJenkinsCrumb();
	if (crumbResponse.status === 200 && crumbResponse.response) {
		const data = crumbResponse.response;
		return {
			[data.crumbRequestField]: data.crumb
		};
	}
	return {};
}

export const getJenkinsCrumb = (): DecodedAPIResponse => {
	return decodeApiResponse(
		httpGet(getUrl(`/crumbIssuer/api/json`), API_HEADERS)
	)
}

export const getJobs = (): DecodedAPIResponse => {
	return decodeApiResponse(
		httpGet(getUrl(`/view/All/api/json?tree=${JOBS_API_TREE}`), API_HEADERS)
	);
}

export const buildJob = (buildUrl: string): DecodedAPIResponse => {
	const crumbHeaders = getJenkinsCrumbHeader();
	return decodeApiResponse(
		httpPost(buildUrl, "{}", crumbHeaders)
	)
}

export const deleteJob = (deleteUrl: string): APIResponse => {
	const crumbHeaders = getJenkinsCrumbHeader();
	return httpPost(deleteUrl, JSON.stringify({}), crumbHeaders)
}

export const renameJob = (renameUrl: string, data: FormData): DecodedAPIResponse => {
	const crumbHeaders = getJenkinsCrumbHeader();
	return decodeApiResponse(
		httpPost(renameUrl, JSON.stringify(data), crumbHeaders)
	)
}

// this function will enable/disable job
export const updateJob = (updateJobUrl: string): APIResponse => {
	const crumbHeaders = getJenkinsCrumbHeader();
	return httpPost(updateJobUrl, JSON.stringify({}), crumbHeaders);
}

export const getBuilds = (jobUrl: string): DecodedAPIResponse => {
	return decodeApiResponse(
		httpGet(`${jobUrl}api/json?tree=${BUILDS_API_TREE}`, API_HEADERS)
	)
}

export const deleteBuild = (deleteBuildUrl: string): APIResponse => {
	const crumbHeaders = getJenkinsCrumbHeader();
	return httpPost(deleteBuildUrl, JSON.stringify({}), crumbHeaders);
}

export const getUsers = (): DecodedAPIResponse => {
	return decodeApiResponse(
		httpGet(getUrl(`/asynchPeople/api/json?tree=${USERS_API_TREE}`), API_HEADERS)
	)
}