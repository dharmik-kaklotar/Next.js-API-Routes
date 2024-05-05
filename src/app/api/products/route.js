import { connectionString } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = [];
    try {
        await mongoose.connect(connectionString);

        data = await Product.find();
        return NextResponse.json({ result: data, success: true }, { status: 200 });
    } catch (error) {
        data = { result: "something went wrong", success: false }
            // return new Error(error);
    }

}

export async function POST(req, res) {

    const payload = await req.json();

    await mongoose.connect(connectionString);

    // let product = new Product({
    //     name: "iphone 14 pro mex",
    //     price: "130000",
    //     company: "Apple",
    //     color: "White",
    //     category: "mobile"
    // });


    if (!payload.name || !payload.price || !payload.company || !payload.color || !payload.category || payload.name == "" || payload.price == "" || payload.company == "" || payload.color == "" || payload.category == "") {
        return NextResponse.json({ result: "All Feields are required", success: false }, { status: 500 });
    } else {
        let product = new Product(payload);
        const result = await product.save();
        return NextResponse.json({ result: "Product inserted Successfully", data: result, success: true }, { status: 201 });
    }
}