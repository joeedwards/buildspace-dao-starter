import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x3dbDdE522f5f29d6cC473631c22d2DE4399bFEF8");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Dos Pizza",
        description: "This NFT has Pizza inside!",
        image: readFileSync("scripts/assets/pizza.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();