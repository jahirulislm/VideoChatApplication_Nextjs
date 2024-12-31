"use server"
import { StreamClient } from "@stream-io/node-sdk";
import { currentUser } from "@clerk/nextjs/server";

const apiKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokerProvider = async () => {
    const user = await currentUser()

    if (!user) throw new Error("User not found or not logged in")
    if (!apiKey) throw new Error("Stream API key is missing");
    if (!apiSecret) throw new Error("Stream API secret key is missing");


    const client = new StreamClient(apiKey, apiSecret);

    // validity is optional (by default the token is valid for an hour)
    const validity = 60 * 60;

    const issued = Math.floor(Date.now() / 1000 - 60);

    const token = client.generateUserToken({ user_id: user.id, validity_in_seconds: validity });

    return token;
}