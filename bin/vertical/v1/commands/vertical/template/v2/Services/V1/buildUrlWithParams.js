export const buildUrlWithParams = ({ baseUrl, params = {} }) => {
    const url = new URL(baseUrl, window.location.origin);

    Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            url.searchParams.set(key, value);
        }
    });

    return url.toString();
};