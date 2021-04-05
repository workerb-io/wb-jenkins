export const JENKINS_TOKEN = VARS['jenkinsToken'];
export const JENKINS_USER = VARS['jenkinsUser'];
export const JENKINS_URL = VARS['jenkinsUrl'];

// export const API_URL: string = `http://${JENKINS_USER}:${JENKINS_TOKEN}@${JENKINS_URL}`;
export const API_URL: string = `${JENKINS_URL}`;
export const JOB_BUILD_URI: string = "build";
export const JOB_CHANGES_URI: string = "changes";
export const JOB_DELETE_URI: string = "doDelete";
export const JOB_RENAME_URI: string = "confirmRename";
export const JOB_RENAME_REDIRECT_URI: string = "confirm-rename";

