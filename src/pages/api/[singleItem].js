import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

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
      const id = req.query.singleItem;
      const result = await itemsCollection.findOne({
        _id: id || new ObjectId(id),
      });
      res.send({ message: "success", status: 200, data: result });
    }

    console.log("Connected to MongoDB!");
  } finally {
  }
}
export default run;
