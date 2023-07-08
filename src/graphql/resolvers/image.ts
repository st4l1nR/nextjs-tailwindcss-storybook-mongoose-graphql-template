import AWS from 'aws-sdk';
import { v4 as uuid } from 'uuid';
import path from 'path';
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
});
export const imageMutations = {
  singleUpload: async (parent: any, { file }: any, { user }: any) => {
    const { createReadStream, filename } = await file;
    const stream = createReadStream();
    const uploadedImage = await s3
      .upload({
        Bucket: process.env.AWS_S3_BUCKET_NAME as string,
        Body: stream,
        Key: String(uuid()) + path.extname(filename),
      })
      .promise();

    return {
      url: uploadedImage.Location,
    };
  },
  multipleUpload: async (parent: any, { files }: any, { user }: any) => {
    const uploadedImages = await Promise.all(
      files.map(async (file: any) => {
        const { createReadStream, filename } = await file;
        const stream = createReadStream();
        const uploadedImage = await s3
          .upload({
            Bucket: process.env.AWS_S3_BUCKET_NAME as string,
            Body: stream,
            Key: String(uuid()) + path.extname(filename),
          })
          .promise();
        return uploadedImage.Location;
      })
    );
    return {
      urls: uploadedImages,
    };
  },
};
