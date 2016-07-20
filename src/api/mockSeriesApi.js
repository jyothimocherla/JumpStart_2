import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
var video1 = {
    url: '',
    title: 'What is Email Marketing?',
    blurb: 'This video discusses the ins and outs of email marketing, which is the process of promoting your business through emails to clients. It is one of the most important ways to retain your current customer base and grow your business by winning new clients.'
}
var video2 = {
    url: 'www.video.com',
    title: 'Why should you use it?',
    blurb: 'In this video, we illuminate the true power of email marketing, which yields an average 4,300% return on investment for businesses in the United States. Compared to social media marketing, a message is 5 times more likely to be seen through email than on social platforms like Facebook or Twitter.'
}
var video3 = {
    url: 'www.video.com',
    title: 'Do’s and Don’ts of Email Marketing',
    blurb: 'Composing an eye-catching, compelling email to customers can be tricky. In this video we discuss the importance of powerful imagery, first impressions, sales message, and customer feedback, and give tips on succeeding in these areas. Examples of ineffectual email marketing are also included. After understanding the principles introduced in this video, you’re well on your way to becoming an email marketing master!'
}
var video4 = {
    url: 'www.video.com',
    title: 'How does GoDaddy Email Marketing Work?',
    blurb: 'This video details how to use Godaddy email marketing, which is based on email templates that can be personalized with simple drag-and-drop. The service can be customized to send welcome emails, happy birthday emails and coupons to loyal customers automatically. It also provides statistics on how many emails were opened, so that you can see what your clients like to read.'
}
var video5 = {
    url: 'www.video.com',
    title: 'Why choose GoDaddy Email Marketing?',
    blurb: 'In this video, we talk about why GoDaddy email marketing is the most cost-effective and easy-to-use email marketing service. All you need is a computer, an internet connection and a web browser, no installation or expertise is required. Even if you get stuck, our experts are always available, and are just one phone call away.'
}


var emailMarketingSeries = {
    id: 1,
    seriesName: 'Email Marketing',
    description: 'Keeping a current client costs less than winning a new one',
    videos: [video1, video2, video3, video4, video4]
}



class CourseApi {
    static getEmailMarketingSeries() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, emailMarketingSeries));
            }, delay);
        });
    }
}

export default CourseApi;