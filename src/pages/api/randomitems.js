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
      const totalProducts = await itemsCollection.countDocuments();
      const randomProducts = [];

      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * totalProducts);
        const randomProduct = await itemsCollection.findOne(
          {},
          { skip: randomIndex }
        );
        randomProducts.push(randomProduct);
      }
      function removeDuplicates(arr) {
        const uniqueArray = [];

        for (let i = 0; i < arr.length; i++) {
          let isDuplicate = false;

          for (let j = 0; j < uniqueArray.length; j++) {
            if (arr[i]._id.toString() === uniqueArray[j]._id.toString()) {
              isDuplicate = true;
              break;
            }
          }

          if (!isDuplicate) {
            uniqueArray.push(arr[i]);
          }
        }

        return uniqueArray;
      }
      const newArray = removeDuplicates(randomProducts);
      res.send({
        message: "success",
        status: 200,
        data: newArray,
      });
    }

    console.log("Connected to MongoDB!");
  } finally {
  }
}
export default run;
