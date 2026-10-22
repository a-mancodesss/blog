import { put } from "@vercel/blob";

// Uploads a post image to Vercel Blob and returns its public URL.
// Requires BLOB_READ_WRITE_TOKEN (set automatically when a Blob store is
// connected to the Vercel project).
export const uploadImage = async (file) => {
  if (!file || typeof file === "string" || file.size === 0) {
    return null;
  }

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");

  const blob = await put(`images/${safeName}`, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return blob.url;
};
