// an example of a custom api route that returns a json response of the name passed in the request body

export default function handler(req, res) {
	// get the name from the request body
	const { name } = req.body;

	// return a json response with the name
	res.status(200).json({ text: `Hello ${name}` });
}