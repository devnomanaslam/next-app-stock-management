// const { MongoClient } = require("mongodb");

import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {

    // Replace the uri string with your connection string.
    const uri = "mongodb+srv://devnomanaslam:4aSRnWz2JwXSmiQ@nomanprogects.cshfktv.mongodb.net/";

    const client = new MongoClient(uri);

    // async function run() {
    try {
        const database = client.db('Noman');
        const allInventory = database.collection('inventory');

        // Query for a movie that has the title 'Back to the Future'
        const query = {};
        const inventories = await allInventory.find(query).toArray();

        //console.log(inventories);
        return NextResponse.json(inventories);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
    // }
    // run().catch(console.dir);

}
