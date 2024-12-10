require('dotenv').config(); // Load environment variables
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const OpenAI = require("openai");

// Initialize OpenAI with environment variables
const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
  baseURL: process.env.OPEN_API_URL,
});

async function getChatCompletion(systemMessage, userMessage,auto=true) {
  try {
    

    console.log(systemMessage);
    console.log(userMessage);
    console.log(auto);
    const completion = await openai.chat.completions.create({
      model: process.env.OPEN_API_MODEL,
      messages: [
        { role: "system", content: systemMessage },
        { role: "user", content: userMessage },
      ],
    });
    console.log(completion.choices[0].message);
    if(auto===true)
    {
    let responseContent = completion.choices[0].message.content;
    console.log(responseContent);
    return formatReviewedContent(responseContent);
    }
    else
    {
      
     return completion.choices[0].message;
    }

  } catch (error) {
    console.error("Error with OpenAI API:", error);
    throw error;
  }
}
function formatReviewedContent(reviewedContent) {
  const parts = reviewedContent.split(/```[a-zA-Z0-9- ]*/);
  
  // Return the second part if it exists, otherwise return the first part
  return parts[1] || parts[0] || null; // Fallback to null if both parts don't exist
}

module.exports = { getChatCompletion };
