import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

var emailMarketing = {
    seriesId: '1',
    name: 'Email Marketing',
    image: '',
    description: 'Create & send gorgeous, business-boosting emails in minutes'
}
var seo = {
    seriesId: '2',
    name: 'Search Engine Visibility',
    image: '',
    description: 'Promote Your Business on the World\'s Top Search Engines.'
}
var websiteBuilder = {
    seriesId: '3',
    name: 'Website Builder',
    image: '',
    description: 'No skills? No time? - No problem.\n Build your professional website in a matter of minutes!'
}

var goDaddyProducts = [emailMarketing, seo, websiteBuilder];


class CourseApi {
    static getAllProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], goDaddyProducts));
            }, delay);
        });
    }
}

export default CourseApi;
