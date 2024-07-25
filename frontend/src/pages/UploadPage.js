// src/pages/UploadPage.js
import React from 'react';

function UploadPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">生成新測驗題目</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">上傳文件</span>
        </label>
        <input type="file" className="input input-bordered" />
      </div>
      <div className="divider">或</div>
      <button className="btn btn-primary">從 Google Drive 導入</button>
    </div>
  );
}

export default UploadPage;
