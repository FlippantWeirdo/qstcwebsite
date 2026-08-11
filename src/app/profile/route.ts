import { readFile } from "node:fs/promises";
import path from "node:path";

const FILE_NAME = "QSTC-Corporate-Profile.pdf";
const FILE_PATH = path.join(process.cwd(), "public", "document", FILE_NAME);

// Short, shareable link that forces a download instead of opening the PDF
// inline the way /document/QSTC-Corporate-Profile.pdf does.
export async function GET() {
  const file = await readFile(FILE_PATH);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${FILE_NAME}"`,
      "Content-Length": String(file.byteLength),
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
