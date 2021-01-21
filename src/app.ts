import express from 'express';
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const routes = require('./routes');
const app = express();


app.use("/", routes)

app.listen(5000, () => {
	console.log("Server has started!")
})


async function main() {
	const uri = process.env.DB_CONNECTION;
	const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
	try {
        // Connect to the MongoDB cluster
		await client.connect();
        // Make the appropriate DB calls
		await  listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
		console.log('closing db')
		await client.close();
    }
}

async function listDatabases(client: any){
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach((db: any) => console.log(` - ${db.name}`));
};

main().catch(console.error);
