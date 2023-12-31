import fs from "fs";
import https from "https";

async function downloadSchema(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let rawData = "";

        response.on("data", (chunk) => {
          rawData += chunk;
        });

        response.on("end", () => {
          resolve(rawData);
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

export async function downloadFile(fileUrlOrPath) {
  if (fs.existsSync(fileUrlOrPath)) {
    // File exists locally, read it
    return fs.readFileSync(fileUrlOrPath, { encoding: "utf8" });
  } else {
    return await downloadSchema(fileUrlOrPath);
  }
}
