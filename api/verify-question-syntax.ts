import { queryAssistanceClient } from "@dynatrace-sdk/client-query";

interface VerifyPayload {
  query: string;
}

export default async function (payload?: VerifyPayload) {
  
  if (!payload?.query) {
    return { isValid: false };
  }
  console.log(payload.query)
  

  try {
    const data = await queryAssistanceClient.queryVerify({
      body: {
        query: 'fetch logs',
        // payload.query,
      },
    });
    console.log(data)
    return {
      isValid: true,
      details: data
    };
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}