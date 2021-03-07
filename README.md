# RespecTube

RespecTube is a React app that is imitating a video streaming website but with an abuse-detection system that blocks toxic/inappropriate comments. <br>
The purpose of the app is for me to demonstrate my ability to work with APIs within a well designed App.

## Youtube API
I used the Youtube Data v3 API to get the video details (Description, number of views, video title, etc...)
<br> API Documentation: https://developers.google.com/youtube/v3/guides/implementation/videos

## ParallelDots API
ParallelDots API enables the detection of abusive or hateful terms. I am using a POST axios request and get an object response with the detection results.
<br> Explore more: https://www.paralleldots.com/abusive-content
<br> API Documentation: https://apis.paralleldots.com/text_docs/index.html?shell#abuse

## Comment Section
The comments are purpusefully hard-coded to keep a level of control on what is being displayed when the app is being explored. I do not want bad surprise and it enables to add a touch of humor. <br>
If I would have wanted to add real comments, I could have got the data using the same Youtube API.

