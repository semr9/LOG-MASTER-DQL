import React from 'react';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Question } from '../components/Question';

export const Test = () => {
  return (
    <Flex flexDirection="column" gap={16}>
      <Question 
        questionNumber={1}
        questionText="Write a DQL query to fetch metrics and limit the results to 100 records."
        initialDqlValue="fetch logs"
      />
      <Question 
        questionNumber={2}
        questionText="Create a DQL query to analyze system performance metrics."
        initialDqlValue="fetch logs"
      />
      <Question 
        questionNumber={3}
        questionText="Design a DQL query to monitor application errors."
        initialDqlValue="fetch logs"
      />
    </Flex>
  );
};


// acciones:
//  1. a form where the user can enter the email so we know that the user that is taking the extname, or can we know the user
//  using the app ?

//  2. verify if the dql run so it is correct, so i need to connect to the api and get the result
//  3. check if the user is using the correct dql commands :
    // 3.1. using  bucket filter
    // 3.2 using scannbytes and sampling
    // 3.2  using limit
    // (check the documentation for the correct usage of the commands)
// show how many points the user get, and if pass the exam:
    // give access to fetch logs
    // if fails than send the documentation so the user can learn how to use the dql



