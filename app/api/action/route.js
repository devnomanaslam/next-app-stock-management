import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

//POST Products
export async function POST(request) {
    let { action, slug, initialQuantity } = await request.json();
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);
    try {
        const database = client.db('stock');
        const Inventory = database.collection('inventory');
        // const product = await Inventory.updateOne({ slug: slug, })
        const filter = { slug: slug };
        // const options = { upsert: true };
        let newQuantity = action === "plus" ? (parseInt(initialQuantity) + 1) : (parseInt(initialQuantity) - 1)
        const updateDoc = {
            $set: {
                quantity: newQuantity
            },
        };
        const result = await Inventory.updateOne(filter, updateDoc, {});


        return NextResponse.json({ success: true, message: `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)` });
    } finally {
        await client.close();
    }



}