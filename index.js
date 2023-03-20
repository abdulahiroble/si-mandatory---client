import express from 'express';
const app = express();

app.use(express.json());

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// const webhookUrl = 'http://b7fe-188-182-154-173.ngrok.io/registered/webhook';

// fetch('http://b7fe-188-182-154-173.ngrok.io/registered/webhook', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     // body: JSON.stringify({
//     //     event: 'payment_received',
//     //     webhook_url: webhookUrl
//     // })
//     // body: JSON.stringify({
//     //     title: 'foo',
//     //     body: 'bar',
//     //     userId: 1,
//     // }),
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error registering webhook:', error);
//     });


const PORT = 3000;

app.listen(PORT, () => console.log("Server is running on port", PORT));



