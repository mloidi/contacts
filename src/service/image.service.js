import { POST } from './service.util.js';

export const ImageService = {
  uploadFile: async files => {
    const data = new FormData();
    data.append('file', files);
    data.append('upload_preset', 'contacts');

    const response = await fetch(process.env.REACT_APP_CLOUDINARY_URL, {
      method: POST,
      body: data
    });
    const file = await response.json();
    return file.secure_url;
  }
};
