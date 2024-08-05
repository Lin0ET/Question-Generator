const axios = require('axios');
const dotenv = require('dotenv');

// 加載 .env 文件
dotenv.config();

// 環境變量設置
const endpoint = 'https://wulab1121017openai.openai.azure.com';
const apiKey = '3b452f29c1aa47ce9279b42177a5ea58';
const apiVersion = "2024-07-18"; // 確認您的 API 版本
const deployment = "gpt-4o-mini"; // 確認您的部署名稱

async function main() {
  // 檢查環境變量是否正確加載
  if (!endpoint || !apiKey) {
    console.error("環境變量加載失敗，請檢查您的 .env 文件");
    return;
  }``

  // 構建完整的 API URL
  const apiUrl = `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

  try {
    const response = await axios.post(
      apiUrl,
      {
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: "Does Azure OpenAI support customer managed keys?" },
          { role: "assistant", content: "Yes, customer managed keys are supported by Azure OpenAI." },
          { role: "user", content: "Do other Azure AI services support this too?" },
        ],
        max_tokens: 50,
      },
      {
        headers: {
          'api-key': apiKey,
          'Content-Type': 'application/json',
        }
      }
    );

    for (const choice of response.data.choices) {
      console.log(choice.message);
    }
  } catch (err) {
    console.error("The sample encountered an error:", err.response ? err.response.data : err.message);
  }
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
