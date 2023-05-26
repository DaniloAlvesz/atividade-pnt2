import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import './Tab1.css'

const Calculator: React.FC = () => {
  const [result, setResult] = useState<number | undefined>(undefined);
  const [currentValue, setCurrentValue] = useState<string>('');

  const handleNumberClick = (number: string) => {
    setCurrentValue(currentValue + number);
  };

  const handleOperationClick = (operator: string) => {
    setCurrentValue(currentValue + operator);
  };

  const handleClear = () => {
    setCurrentValue('');
    setResult(undefined);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(currentValue));
    } catch (error) {
      setResult(undefined);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const { key } = event;

    if (key === 'Enter') {
      handleCalculate();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="calculator">
          <input
            className="result-panel"
            type="text"
            value={result !== undefined ? result : currentValue}
            readOnly
          />
          <IonGrid className="keypad">
            <IonRow>
              <IonCol>
                <IonButton expand="full" onClick={() => handleNumberClick('1')}>
                  1
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleNumberClick('2')}>
                  2
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleNumberClick('3')}>
                  3
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleOperationClick('/')}>
                  ÷
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand="full" onClick={() => handleNumberClick('4')}>
                  4
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleNumberClick('5')}>
                  5
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleNumberClick('6')}>
                  6
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleOperationClick('*')}>
                  ×
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand="full" onClick={() => handleNumberClick('7')}>
                  7
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleNumberClick('8')}>
                  8
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleNumberClick('9')}>
                  9
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleOperationClick('-')}>
                  -
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton expand="full" onClick={handleClear}>
                  C
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleNumberClick('0')}>
                  0
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={handleCalculate}>
                  =
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="full" onClick={() => handleOperationClick('+')}>
                  +
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;
