// src/pages/UploadPage.js
import React from 'react';
import q4 from '../assets/img/q4.png';

function UploadPage() {
  return (
    <div className="container mx-auto p-4 bg-blue-50 min-h-screen">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-4">生成新測驗題目</h1>
        <p className="text-lg mb-8">您可以在下方上傳文件，讓我們幫助您生成測驗題目。</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="form-control w-full max-w-md mb-8">
         
          <div className="relative">
            <input type="file" className="custom-file-input absolute inset-0 opacity-0 w-full h-full" />
            <div className="btn btn-outline w-full">選擇文件</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <img src={q4} alt="Upload Illustration" style={{ width: '600px' }} />
      </div>
    </div>
  );
}

export default UploadPage;
