import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

//Search Products 
// db.collection.createIndex({slug:"text", quantity:"text", price:"text"})
export async function GET(request) {
    // console.log(request);
    // const query = request.nextUrl.searchParams.get("query");
    const query = new URL(request.nextUrl.href).searchParams.get("query");

    const uri = "mongodb+srv://devnomanaslam:4aSRnWz2JwXSmiQ@nomanprogects.cshfktv.mongodb.net/";
    const client = new MongoClient(uri);
    try {
        const database = client.db('stock');
        const inventory = database.collection('inventory');

        const products = await inventory.aggregate([{
            $match: {
                $or: [
                    { "slug": { $regex: query, $options: "i" } }
                ]
            }
        }]).toArray()
        return NextResponse.json({ success: true, products });
    } finally {
        await client.close();
    }
}
