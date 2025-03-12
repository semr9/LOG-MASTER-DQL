import React, { useState } from 'react';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Question } from '../components/Question';
import { verifyDql } from '../actions/questionActions';
import { Button } from '@dynatrace/strato-components/buttons';
import { analyzeQuestionGoodPractice } from '../actions/testActions';
import { Text } from '@dynatrace/strato-components/typography';
import { Heading } from '@dynatrace/strato-components/typography';

interface AnalysisResults {
  q1: boolean;
  q2: boolean;
  q3: boolean;
  score: number;
  totalPoints: number;
  passed: boolean;
  documentation: string | null;
}

export const Test = () => {
  const [questionValues, setQuestionValues] = useState({
    1: "fetch logs",
    2: "fetch logs",
    3: "fetch logs"
  });
  const [analysisResults, setAnalysisResults] = useState<AnalysisResults | null>(null);

  const handleQuestionChange = (questionNumber: number, value: string) => {
    setQuestionValues(prev => ({
      ...prev,
      [questionNumber]: value
    }));
  };

  const handleFinishExam = async () => {
    const results = await analyzeQuestionGoodPractice(Object.values(questionValues));
    setAnalysisResults(results);
  };

  return (
    <Flex flexDirection="column" gap={16}>
      {!analysisResults ? (
        <>
          <Question 
            questionNumber={1}
            questionText="Write a DQL query to fetch logs and filter by dt.system.bucket. (5 points)"
            initialDqlValue={questionValues[1]}
            onValueChange={(value) => handleQuestionChange(1, value)}
          />
          <Question 
            questionNumber={2}
            questionText="Create a DQL query that ends with a limit command. (5 points)"
            initialDqlValue={questionValues[2]}
            onValueChange={(value) => handleQuestionChange(2, value)}
          />
          <Question 
            questionNumber={3}
            questionText="Design a DQL query using samplingRatio in the fetch logs command. (5 points)"
            initialDqlValue={questionValues[3]}
            onValueChange={(value) => handleQuestionChange(3, value)}
          />
          <Flex justifyContent="center" padding={16}>
            <Button
              color="primary"
              variant="emphasized"
              onClick={handleFinishExam}
            >
              Finish Exam
            </Button>
          </Flex>
        </>
      ) : (
        <Flex flexDirection="column" gap={16} padding={32} width="100%">
          <Heading level={1}>Exam Results</Heading>
          <Text textStyle="base-emphasized">
            You got {analysisResults.score} out of {analysisResults.totalPoints} points on your exam.
          </Text>
          
          <Flex flexDirection="column" gap={8}>
            <Text color={analysisResults.q1 ? "success" : "critical"}>
              Question 1: {analysisResults.q1 ? "Correct (5 points) ✓" : "Incorrect (0 points) ✗"}
            </Text>
            <Text color={analysisResults.q2 ? "success" : "critical"}>
              Question 2: {analysisResults.q2 ? "Correct (5 points) ✓" : "Incorrect (0 points) ✗"}
            </Text>
            <Text color={analysisResults.q3 ? "success" : "critical"}>
              Question 3: {analysisResults.q3 ? "Correct (5 points) ✓" : "Incorrect (0 points) ✗"}
            </Text>
          </Flex>

          <Text color={analysisResults.passed ? "success" : "critical"} textStyle="base-emphasized">
            {analysisResults.passed 
              ? "Congratulations! You passed the exam!" 
              : "You need to learn more about DQL best practices to pass the exam."}
          </Text>

          {analysisResults.documentation && (
            <Flex justifyContent="center" padding={16}>
              <Button
                as="a"
                href={analysisResults.documentation}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More About DQL
              </Button>
            </Flex>
          )}
        </Flex>
      )}
    </Flex>
  );
};


// acciones:
//  1. a form where the user can enter the email so we know that the user that is taking the extname, or can we know the user
//  using the app ?

//  2. verify if the dql run so it is correct, so i need to connect to the api and get the result (done)
//  3. check if the user is using the correct dql commands : (done)
    // 3.1. using  bucket filter
    // 3.2 using scannbytes and sampling
    // 3.2  using limit
    // (check the documentation for the correct usage of the commands)

// show how many points the user get, and if pass the exam: (done)
    // give access to fetch logs
    // if fails than send the documentation so the user can learn how to use the dql

// if the results are successfull than we give access again to the user if not they need to learn more about dql



