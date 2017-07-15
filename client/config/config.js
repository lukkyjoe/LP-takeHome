const config = {
	port: process.env.PORT || 2000,
	db: process.env.MONGOLAB_URI || "mongodb://localhost/eventapi",
	test_port: 2001,
	test_db: "mongodb://localhost/eventapi_test"
}
module.exports = config;