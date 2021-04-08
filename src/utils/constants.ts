export const JENKINS_TOKEN = VARS['jenkinsToken'];
export const JENKINS_USER = VARS['jenkinsUser'];
export const JENKINS_URL = VARS['jenkinsUrl'];

// export const API_URL: string = `http://${JENKINS_USER}:${JENKINS_TOKEN}@${JENKINS_URL}`;
export const API_URL: string = `${JENKINS_URL}`;
export const CREATE_NEW_JOB_URI: string = "view/all/newJob";
export const ACCOUNT_MANAGE_URI: string = "manage";
export const CREATE_NEW_USER_URI: string = "securityRealm/addUser";
export const JOB_BUILD_URI: string = "build";
export const JOB_CHANGES_URI: string = "changes";
export const JOB_DELETE_URI: string = "doDelete";
export const JOB_ENABLE_URI: string = "enable";
export const JOB_DISABLE_URI: string = "disable";
export const JOB_RENAME_URI: string = "confirmRename";
export const JOB_RENAME_REDIRECT_URI: string = "confirm-rename";
export const BUILD_CONSOLE_URI: string = "console";
export const BUILD_CHANGES_URI: string = "changes";
export const BUILD_TESTREPORTS_URI: string = "testReports";
export const BUILD_CONFIGURE_URI: string = "configure";
export const BUILD_DELETE_URI: string = "doDelete";
export const BUILD_PARAMETERS_URI: string = "parameters";

