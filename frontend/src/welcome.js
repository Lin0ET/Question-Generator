import React from 'react';

function WelcomePage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">歡迎使用AI自動產生問題</h1>
            <p className="mb-4">我們提供一流的服務，確保您的測試製作過程簡單快速。 </p>
            <div className="grid grid-cols-2 gap-4">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">步驟1: 準備材料</h2>
                        <p>上傳您的材料文檔，確保格式正確。 </p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">步驟2: 選擇知識點數</h2>
                        <p>選擇您希望出現在題目中的關鍵知識點。 </p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">步驟3: 產生問題</h2>
                        <p>我們將使用AI技術幫助您產生問題。 </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;