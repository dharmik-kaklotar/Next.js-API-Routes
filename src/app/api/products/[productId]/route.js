import { connectionString } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req, res) {
    let id = res.params.productId;
    let product_id = { _id: id };
    const Data = await req.json();

    await mongoose.connect(connectionString);
    const result = await Product.findByIdAndUpdate(product_id, Data);

    return NextResponse.json({ result, success: true }, { status: 200 });
}
export async function GET(req, res) {
    let id = res.params.productId;
    let product_id = { _id: id };

    await mongoose.connect(connectionString);
    const result = await Product.findById(product_id);

    return NextResponse.json({ result, success: true }, { status: 200 });
}

export async function DELETE(req, res) {
    const id = res.params.productId;
    const product_id = { _id: id }
    await mongoose.connect(connectionString);
    const result = await Product.deleteOne(product_id);
    if (!result || result.deletedCount != 0) {
        return NextResponse.json({ result, success: true }, { status: 200 })
    } else {
        return NextResponse.json({ result: "Something went wrong", success: false }, { status: 400 })
    }

}