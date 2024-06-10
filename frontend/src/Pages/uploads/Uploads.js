import React from 'react';
import axios from 'axios';

import './Uploads.css';

const Uploads = () => {
  const postFile = async (file) => {
    const formdata = new FormData();
    formdata.append('file', file);

    try {
      const result = await axios.post('/api/upload', formdata);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="upload-style">
      <input
        type="file"
        onChange={(event) => {
          const file = event.target.files[0];
          postFile(file);
        }}></input>

      <button type="submit" className="center">
        Upload
      </button>
    </div>
  );
};

export default Uploads;
