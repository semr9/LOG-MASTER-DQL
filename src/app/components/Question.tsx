import React, { useState } from 'react';
import { DQLEditor } from '@dynatrace/strato-components-preview/editors';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';
import { Button } from '@dynatrace/strato-components/buttons';
import { verifyDql } from '../actions/questionActions';

interface QuestionProps {
  questionNumber: number;
  questionText: string;
  initialDqlValue?: string;
  onValueChange: (value: string) => void;
}

export const Question: React.FC<QuestionProps> = ({
  questionNumber,
  questionText,
  initialDqlValue = '',
  onValueChange,
}) => {
  const [currentValue, setCurrentValue] = useState(initialDqlValue);
  const [verifyResult, setVerifyResult] = useState<any>(null);
  

  const handleEditorChange = (value: string) => {
    setCurrentValue(value);
    onValueChange(value);
  };

  const handleRunClick = () => {
    verifyDql(currentValue).then((result) => {
      setVerifyResult(result);
    });
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

      {verifyResult && (
          <Text textStyle="base-emphasized" color={verifyResult.valid ? "success" : "critical"}>
            {verifyResult.valid ? "Syntax is valid" : "Syntax error"}
          </Text>
        )}
        
        <Button 
          color="primary" 
          variant="emphasized"
          onClick={handleRunClick}
        >
          Run
        </Button>
        
      </Flex>
    </Flex>
  );
}; 