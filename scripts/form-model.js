const formId = '1FAIpQLSePlCkTNeGK3h8c9jywUWHcehDpIiOG8YbCYRrXvgMH8vLE2w'
const entry1 = 'entry.764306838';
const entry2 = 'entry.714470642';
const entry3 = 'entry.2061015732';
const entry4 = 'entry.668709424';

const getPath = formId => `https://docs.google.com/forms/d/e/${formId}/formResponse`;

const postToGoogleDB = function(data) {
    const path = getPath(formId);
    const url = getURL(path, data);
    sendRequest('POST', url)
        .then(responseEvent);
}

const getURL = function(path, params) {
    const url = new URL(path);
    for (let key in params) {
        url.searchParams.set(key, params[key]);
    }
    return url;    
}

const initRequest = function(verb, url) {
    const init = new Object();
    init.method = verb;
    init.mode = 'no-cors';
    return new Request(url, init);
}

const sendRequest = async function(verb, url) {
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
}

const responseEvent = response => alert('Success!')