const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
app.use(cors());
const access_key = process.env.ACCESS_KEY;

app.get("/detail/:city", async (req, res) => {

    const city = req?.params?.city;
    //console.log(city)
	try {
		const response = await axios({
			url:   `http://api.weatherstack.com/current?access_key=${access_key}&query=${city}`,
			method: "get",
		});
		res.status(200).json(response.data);
	} catch (err) {
		res.status(500).json({ message: err });
	}
});



app.listen(2400, () => {
	console.log("Server started at port 2400");
});


