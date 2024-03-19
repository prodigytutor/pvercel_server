import { S3 } from "aws-sdk";
import fs from "fs";

const s3 = new S3({
    accessKeyId: process.env.ACCESSKEY,
    secretAccessKey: process.env.SECRETACCESSKEY,
    endpoint: "https://s3.us-east-2.amazonaws.com"
})

// fileName => output/12312/src/App.jsx
// filePath => /Users/harkiratsingh/vercel/dist/output/12312/src/App.jsx
export const uploadFile = async (fileName: string, localFilePath: string) => {
    const fileContent = fs.readFileSync(localFilePath);
    const response = await s3.upload({
        Body: fileContent,
        Bucket: "pvercel",
        Key: fileName,
    }).promise();
    console.log(response);
}