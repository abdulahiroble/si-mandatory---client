import express from 'express';
import router from './routes/router.js';
import connectDB from './startup/mongoDB.js';
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use(router)

connectDB()

const PORT = 8080;

app.listen(PORT, () => console.log("Server is running on port", PORT));



