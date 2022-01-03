import storage from "./index";

export async function uploadImage(image) {
  try {
    const ref = storage.ref(`/images/${image}`);
    // const snapshot = await ref.put(image.uri);
    const uploadTask = ref.put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // console.log(snapshot);
      },
      console.error,
      () => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
}
