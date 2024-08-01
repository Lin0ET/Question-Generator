
import React from 'react';
import home1 from '../assets/img/home1.png';
import t1 from '../assets/img/t1.png';
import t2 from '../assets/img/t2.png';
import t3 from '../assets/img/t3.png';
import t4 from '../assets/img/t4.png';
import icon1 from '../assets/icons/icon1.svg';
import icon2 from '../assets/icons/icon2.svg';
import icon3 from '../assets/icons/icon3.svg';
import icon4 from '../assets/icons/icon4.svg';

function HomePage() {
  return (
    <div className="container mx-auto p-4 bg-blue-50">
      <div className="text-center my-16 flex flex-col md:flex-row items-center justify-center">
        <img src={home1} alt="Home" className="w-3/4 md:w-1/2 lg:w-1/3 mb-8 md:mb-0 md:mr-8   border-gray-300 " />
        <div>
          <h1 className="text-4xl font-bold mb-4">無論任何課程，<br />都交給AI自動生成題目</h1>
          <button className="btn btn-accent">開始使用</button>
        </div>
      </div>
      <div className="text-center my-16">
        <h2 className="text-2xl font-bold mb-8 mt-16">為何選擇AI題目生產器？</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={t1} alt="簡易快速的生成" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">簡易快速的生成</h2>
              <p>不必花費大量時間來設計問題，AI可以在幾秒鐘內自動生成問題。</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={t2} alt="自動生成答案" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">自動生成答案</h2>
              <p>AI不僅生成問題，還會自動生成答案，讓您的工作變得更簡單。</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={t3} alt="針對性生成" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">針對性生成</h2>
              <p>針對您選擇的課程內容，AI可以生成最相關的問題。</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={t4} alt="即時生成" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">即時生成</h2>
              <p>AI能夠即時生成問題，您可以立即使用。</p>
            </div>
          </div>
        </div>
        <div className="mt-8 mb-16 ">
          <h2 className="text-2xl font-bold mb-8 mt-16">如何使用</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card bg-base-100 shadow-xl">
              <figure className="p-4">
                <img src={icon1} alt="Step 1" className="w-12 h-12 mx-auto" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">Step 1: 生成問題</h2>
                <p>上傳教學資料或手動輸入題目，我們的AI會自動生成問題。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="p-4">
                <img src={icon2} alt="Step 2" className="w-12 h-12 mx-auto" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Step 2: 審核和編輯</h2>
                <p>您可以審核和編輯生成的問題，確保其符合要求。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="p-4">
                <img src={icon3} alt="Step 3" className="w-12 h-12 mx-auto" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Step 3: 生成測驗</h2>
                <p>將問題匯集成測驗，並可選擇添加更多問題。</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="p-4">
                <img src={icon4} alt="Step 4" className="w-12 h-12 mx-auto" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Step 4: 分享測驗</h2>
                <p>將生成的測驗分享給學生或同事，立即開始使用。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
