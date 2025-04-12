import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
// Create OpenAI client - will be initialized with proper API key
let openai: OpenAI;

// Initialize on demand to ensure proper key loading
const initializeOpenAIClient = () => {
  console.log("Initializing OpenAI client with API key", 
    import.meta.env.VITE_OPENAI_API_KEY ? "available" : "not available");
  
  openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true // Enable client-side usage
  });
};

// Export initialization function
export async function initOpenAI() {
  try {
    // Check if API key is available
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      console.error("OpenAI API key not found in environment variables");
      return false;
    }
    
    // Initialize the client
    initializeOpenAIClient();
    console.log("OpenAI client initialized successfully");
    return true;
  } catch (error) {
    console.error("Error initializing OpenAI client:", error);
    return false;
  }
}

// Define the response format for bill analysis
interface BillAnalysisResponse {
  provider: string | null;
  amount: string | null;
  date: string | null;
  accountNumber: string | null;
  customerName: string | null;
  servicePeriod: string | null;
  dueDate: string | null;
  lineItems: Array<{
    description: string;
    amount: number;
    isHiddenFee?: boolean;
  }>;
}

/**
 * Analyzes a telecom bill using OpenAI vision capabilities
 * @param imageBase64 Base64-encoded image of the bill
 * @returns Structured bill data
 */
export async function analyzeBillWithAI(imageBase64: string): Promise<BillAnalysisResponse> {
  try {
    // Initialize OpenAI if needed
    await initOpenAI();
    
    console.log("Starting bill analysis with OpenAI API...");
    
    // Define the prompt for bill analysis
    const systemPrompt = `You are a telecommunications bill analysis expert. Extract key information from telecom bills accurately.
    You MUST identify and extract ALL of the following information if present:
    1. Provider name (e.g., Xfinity, Spectrum, AT&T, Optimum)
    2. Bill amount (total amount due)
    3. Bill date
    4. Account number
    5. Customer name
    6. Service period 
    7. Due date
    8. Line items (each service or charge on the bill and its amount)
    9. Flag any hidden fees or unexpected charges

    Format your response as valid JSON with these fields:
    {
      "provider": "provider name",
      "amount": "total amount as number",
      "date": "bill date",
      "accountNumber": "account number",
      "customerName": "customer name",
      "servicePeriod": "service period",
      "dueDate": "due date",
      "lineItems": [
        {
          "description": "item description",
          "amount": number,
          "isHiddenFee": boolean
        }
      ]
    }`;
    
    // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze this telecom bill image and extract all information in JSON format. IMPORTANT: Include EVERY field in the output - bill amount, dates, account numbers, and line items are critical."
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${imageBase64}`
              }
            }
          ],
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 2000,
      temperature: 0.1, // Use a lower temperature for more deterministic results
    });

    // Parse the response content
    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error("No content in OpenAI response");
    }
    
    console.log("OpenAI response received:", content.substring(0, 200) + "...");
    
    const result = JSON.parse(content);
    console.log("Parsed JSON result:", result);
    
    // Map the response to our expected format
    const billData: BillAnalysisResponse = {
      provider: result.provider || null,
      amount: result.amount ? result.amount.toString().replace(/^\$/, '') : null,
      date: result.date || null,
      accountNumber: result.accountNumber || null,
      customerName: result.customerName || null,
      servicePeriod: result.servicePeriod || null,
      dueDate: result.dueDate || null,
      lineItems: Array.isArray(result.lineItems) ? result.lineItems : []
    };
    
    return billData;
  } catch (error) {
    console.error("Error analyzing bill with AI:", error);
    return {
      provider: null,
      amount: null,
      date: null,
      accountNumber: null,
      customerName: null,
      servicePeriod: null,
      dueDate: null,
      lineItems: []
    };
  }
}

/**
 * Detects the telecom provider from a bill image
 * @param imageBase64 Base64-encoded image of the bill
 * @returns Provider name or null if not detected
 */
export async function detectProviderFromImage(imageBase64: string): Promise<string | null> {
  try {
    // Initialize OpenAI if needed
    await initOpenAI();
    
    // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are a telecommunications bill analysis expert focused on provider identification."
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Look at this telecom bill and identify the provider. Return ONLY the provider name as a lowercase string with no punctuation, spaces, or explanations. For example: 'xfinity', 'spectrum', 'att', 'verizon', 'tmobile', 'optimum', etc. If you cannot determine the provider, return 'unknown'."
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${imageBase64}`
              }
            }
          ],
        },
      ],
      max_tokens: 50,
    });

    const providerName = response.choices[0].message.content?.trim().toLowerCase();
    return providerName || null;
  } catch (error) {
    console.error("Error detecting provider with AI:", error);
    return null;
  }
}