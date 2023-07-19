import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

//GET Products 
export async function GET(request) {
    const uri = "mongodb+srv://devnomanaslam:4aSRnWz2JwXSmiQ@nomanprogects.cshfktv.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        const database = client.db('stock');
        const allInventory = database.collection('inventory');
        const query = {};
        const inventories = await allInventory.find(query).toArray();
        return NextResponse.json(inventories);
    } finally {
        await client.close();
    }
}

//POST Products
export async function POST(request) {
    let { slug, quantity, price } = await request.json();
    console.log(slug, quantity, price)
    const uri = "mongodb+srv://devnomanaslam:4aSRnWz2JwXSmiQ@nomanprogects.cshfktv.mongodb.net/";
    const client = new MongoClient(uri);
    try {
        const database = client.db('stock');
        const Inventory = database.collection('inventory');
        const product = await Inventory.insertOne({ slug, quantity, price, ok: true });
        return NextResponse.json(product);
    } finally {
        await client.close();
    }
}
