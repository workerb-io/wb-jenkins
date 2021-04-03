import { Job } from "../../../utils/interfaces";

const hasParameters = (props: Array<any>): boolean => {
	let hasParams = false;
	props.forEach((prop: any) => {
		if ("parameterDefinitions" in prop && prop["parameterDefinitions"].length > 0) {
			hasParams = true
		}
	});
	return hasParams
}

const returnOptions = () => {
	const removeAction: string[] = []
	if (options.jobs) {
		const job = options.jobs as Job;
		if (job && job.property && job.property.length > 0 && hasParameters(job.property)) {
			// parameterized job
			removeAction.push('build') // removing build without params action
		} else {
			// job without parameters
			removeAction.push('parameter_build') // removing build with params action
		}
	}
	return JSON.stringify({
		remove: removeAction
	});
}

export default returnOptions;
