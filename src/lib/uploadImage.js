// Firebase is only needed when a post image is actually uploaded. Loading it
// lazily keeps the login/register server actions (and their cold starts) small.
export const uploadImage = async (file) => {
  if (!file || typeof file === "string" || file.size === 0) {
    return null;
  }

  const [{ ref, uploadBytes, getDownloadURL }, { storage }] = await Promise.all([
    import("firebase/storage"),
    import("@/config/firebaseConfig"),
  ]);

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
  const storageRef = ref(storage, `images/${Date.now()}-${safeName}`);

  await uploadBytes(storageRef, file);

  return getDownloadURL(storageRef);
};
