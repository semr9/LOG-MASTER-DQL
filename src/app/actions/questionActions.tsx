import { queryAssistanceClient } from "@dynatrace-sdk/client-query";

async function verifyDql(dql: string) {
    const data = await queryAssistanceClient.queryVerify({
      body: {
        query: dql,
      },
    });
    return data;
  }



export { verifyDql };