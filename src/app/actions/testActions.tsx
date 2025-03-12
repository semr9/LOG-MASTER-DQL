import { queryAssistanceClient } from "@dynatrace-sdk/client-query";


async function parseDql(dql: string) {

  const data = await queryAssistanceClient.queryParse({
    body: {
      query: dql,
    },
  });
  return data;
}

async function analyzeQuestionGoodPractice(questions: string[]) {
    const results = {
        q1: false,
        q2: false,
        q3: false
    };

    const POINTS_PER_QUESTION = 5;

    // Check first question for dt.system.bucket in a filter
    if (questions[0].includes('| filter') && questions[0].includes('dt.system.bucket')) {
        results.q1 = true;
    }
    const data = await parseDql(questions[0]);
    console.log("example question::",data);
    
    // Check second question for limit at the end
    const q2Lines = questions[1].split('\n');
    const lastLine = q2Lines[q2Lines.length - 1].trim();
    if (lastLine.startsWith('| limit')) {
        results.q2 = true;
    }

    // Check third question for samplingRatio and scanLimitGBytes in fetch logs
    const q3Match = questions[2].match(/fetch logs,.*samplingRatio:\s*\d+/i);
    if (q3Match) {
        results.q3 = true;
    }

    // Calculate total score
    const correctAnswers = Object.values(results).filter(Boolean).length;
    const score = correctAnswers * POINTS_PER_QUESTION;
    const totalPoints = Object.keys(results).length * POINTS_PER_QUESTION;
    const passed = score >= (totalPoints / 2); // Pass if score is 50% or higher

    return {
        ...results,
        score,
        totalPoints,
        passed,
        documentation: !passed ? "https://www.dynatrace.com/support/help/platform-modules/grail/grail-dql" : null
    };
}

export { parseDql, analyzeQuestionGoodPractice };