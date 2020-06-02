export const ApiRouter ={
    getUrlForService,
    getUrlForRequest

}

const root = "https://localhost:4435/api";
const version = "v1";
const base = `${root}/${version}`;

function getUrlForService(apiController) {
    return `${base}/${apiController}`;
}

function getUrlForRequest(apiController, requestEndpoint = null) {
    if(requestEndpoint === null){
        return `${base}/${apiController}`;
    }
    return `${base}/${apiController}/${requestEndpoint}`;
}

export default ApiRouter;