import express from 'express';
import bodyParser from 'body-parser';

// setting up express
const app = express();

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
