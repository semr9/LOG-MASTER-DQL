import React, { useState } from 'react';
import { DQLEditor } from '@dynatrace/strato-components-preview/editors';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';
import { Button } from '@dynatrace/strato-components/buttons';
import { useAppFunction } from '@dynatrace-sdk/react-hooks';

interface QuestionProps {
  questionNumber: number;
  questionText: string;
  initialDqlValue?: string;
}

export const Question: React.FC<QuestionProps> = ({
  questionNumber,
  questionText,
  initialDqlValue = '',
}) => {
  const [currentValue, setCurrentValue] = useState(initialDqlValue);
  
  const verifyResult = useAppFunction<{ isValid: boolean }>({
    name: 'verify-question-syntax',
    data: { query: currentValue },
  });

  const handleEditorChange = (value: string) => {
    setCurrentValue(value);
  };

  const handleRunClick = () => {
    verifyResult.refetch();
  };

  return (
    <Flex flexDirection="column" gap={16} padding={16}>
      <Text textStyle="base-emphasized">Question {questionNumber}</Text>
      <Text>{questionText}</Text>
      <DQLEditor 
        value={currentValue}
        onChange={handleEditorChange}
      />
      <Flex justifyContent="flex-end" gap={8}>
        <Button 
          color="primary" 
          variant="emphasized"
          onClick={handleRunClick}
          loading={verifyResult.isLoading}
        >
          Run
        </Button>
        {verifyResult.data && (
          <Text textStyle="base-emphasized" color={verifyResult.data.isValid ? "success" : "critical"}>
            {verifyResult.data.isValid ? "Syntax is valid" : "Syntax error"}
          </Text>
        )}
      </Flex>
    </Flex>
  );
}; 