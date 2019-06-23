import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import Icon from './Icon';

const blobToFile = (theBlob, fileName) => {
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
};

const FileDropzone = ({ avatar, uploadFile }) => {
  const [files, setFiles] = useState([]);
  const [isImage, setIsImage] = useState(false);

  if (avatar) {
    fetch(avatar).then(async res => {
      const blob = await res.blob();
      const blobA = [blobToFile(blob, avatar)];
      if (files.length === 0) {
        setFiles(blobA);
        setIsImage(true);
      }
    });
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: acceptedFiles => {
      if (acceptedFiles.length > 0) {
        setFiles(
          acceptedFiles.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file)
            })
          )
        );
        setIsImage(true);
        acceptedFiles.map(file => {
          uploadFile(file);
          return true;
        });
      }
    }
  });

  const thumbs = files.map(file => {
    return (
      <div key={file}>
        <div>
          <img
            className="App-Dropzone-image"
            src={file.preview}
            alt={file.name}
          />
        </div>
      </div>
    );
  });

  useEffect(
    () => () => {
      files.forEach(file => {
        URL.revokeObjectURL(file.preview);
      });
    },
    [files]
  );

  return (
    <React.Fragment>
      {!isImage ? (
        <div className="App-Dropzone-Section">
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <div className="App-Dropzone-text">
              <Icon icon="faUser" />
            </div>
          </div>
        </div>
      ) : (
        <div className="App-Dropzone-show">
          <aside>{thumbs}</aside>
          <button
            className="App-Dropzone-button"
            onClick={() => setIsImage(false)}
            fontSize="1.5rem"
          >
            <Icon icon="faTimes" />
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

export default FileDropzone;
