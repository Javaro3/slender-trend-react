import queryParams from "./QueryParams";

export default class TagService {
    static async getAll(){
        const url = "https://slender-trend-ea27cf7a21fe.herokuapp.com/tags-report"
        const urlWithParams = new URL(url);

        const appendSearchParams = (params, prefix) => {
            Object.keys(params).forEach(key => {
            const paramName = prefix ? `${prefix}.${key}` : key;
            if (typeof params[key] === 'object') {
                appendSearchParams(params[key], paramName);
            } else {
                urlWithParams.searchParams.append(paramName, params[key]);
            }
            });
        };

        appendSearchParams(queryParams);

        const response = await fetch(urlWithParams)
        const result = await response.json()
        return await result;
    }
}