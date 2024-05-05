import { NextResponse } from "next/server";
import { users } from "@/utils/users";

export function GET(req, res) {
    try {
        const data = users;
        const singleUserData = data.filter((item) => item.id == res.params.id);
        return NextResponse.json(singleUserData.length == 0 ? { result: "user Not found", success: false } : { result: singleUserData[0], success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "something went wrong on server" }, { status: 500 });
    }
}



export async function PUT(req, res) {
    try {
        let payload = await req.json();
        payload.id = res.params.id;

        // console.log(id);
        // console.log(payload);
        if (!payload.id || !payload.name || !payload.age || !payload.email) {
            return NextResponse.json({ result: "Not Valid", success: false }, { status: 200 })
        } else {
            if (payload.age <= 10) {
                console.log(payload);
                return NextResponse.json({ result: "Invalid Age", success: false }, { status: 500 });
            } else {
                return NextResponse.json({ result: payload, success: true }, { status: 200 })
            }

        }
    } catch (error) {
        console.log(error);
    }

}

export function DELETE(req, res) {
    try {
        let id = res.params.id;
        if (id) {
            return NextResponse.json({ result: "User Deleted Successfully", success: true }, { status: 200 });
        } else {
            return NextResponse.json({ result: "Something went wrong", success: false }, { status: 500 });
        }

    } catch (error) {
        throw new error(error);
    }

}