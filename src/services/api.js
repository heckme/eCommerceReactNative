import {BASE_URL} from "./../config/settings";
import {setLoader} from "./../actions";
import {persist} from "./../../App";

export const api = async (url, method, reqBody = {}, headers = {}) => {
    persist.store.dispatch(setLoader(true));
    try {
        const URL = BASE_URL.concat(url);
        const body = Object.keys(reqBody).length && JSON.stringify(reqBody);

        const fetchParams = {method, headers};

        if (method === "POST" || method === "PUT") {
            fetchParams.headers["Accept"] = "application/json";
            fetchParams.headers["Content-Type"] = "application/json";
            if(!body) {
                throw new Error("Request body required");
            } else {
                fetchParams["body"] = body;
            }
        }
        if(body) {
            fetchParams["body"] = body;
        }

        const fetchPromise = fetch(URL, fetchParams);
        const timerPromise = new Promise((resolve, reject) => {
            setTimeout(function() {
                reject("Request timeout");
            }, 10000);
        });

        const response = await Promise.race([fetchPromise, timerPromise]);
        persist.store.dispatch(setLoader(false));
        return response;
    } catch(err) {
        persist.store.dispatch(setLoader(false));
        return err;
    }
}
