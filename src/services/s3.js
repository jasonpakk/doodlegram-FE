import axios from 'axios';
import { ROOT_URL } from '../actions';

function getSignedRequest(file) {
  const fileName = encodeURIComponent(file.name);
  // hit our own server to get a signed s3 url
  return axios.get(`${ROOT_URL}/sign-s3?file-name=${fileName}&file-type=${file.type}`);
}

// return a promise that uploads file directly to S3
// note how we return the passed in url here rather than any return value
// since we already know what the url will be - just not that it has been uploaded
function uploadFileToS3(signedRequest, file, url, base64) {
  let config = {};
  let toUpload = file;
  if (base64) {
    toUpload = file.buffer;
    config = {
      headers: { 'x-amz-acl': 'public-read', 'Content-Encoding': 'base64', 'Content-Type': file.type },
    };
  } else {
    config = { headers: { 'Content-Type': file.type } };
  }

  return new Promise((fulfill, reject) => {
    axios.put(signedRequest, toUpload, config).then((response) => {
      fulfill(url);
    }).catch((error) => {
      reject(error);
    });
  });
}

export function uploadDoodle(file) {
  // returns a promise so you can handle error and completion in your component
  return getSignedRequest(file).then((response) => {
    return uploadFileToS3(response.data.signedRequest, file, response.data.url, true);
  });
}

export function uploadImage(file) {
  // returns a promise so you can handle error and completion in your component
  return getSignedRequest(file).then((response) => {
    return uploadFileToS3(response.data.signedRequest, file, response.data.url, false);
  });
}
