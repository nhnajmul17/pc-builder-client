import { MongoClient, ServerApiVersion } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3zfz5.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
    const itemsCollection = client.db("pc-builder").collection("items");
    if (req.method === "GET") {
      if (req.query.category === undefined) {
        const result = await itemsCollection.find({}).toArray();
        res.send({ message: "success", status: 200, data: result });
      } else {
        const items = await itemsCollection
          .find({
            category: req.query.category,
          })
          .toArray();
        res.send({ message: "success", status: 200, data: items });
      }
    }

    console.log("Connected to MongoDB!");
  } finally {
  }
}
export default run;
