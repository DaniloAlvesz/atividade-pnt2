import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [board, setBoard] = useState<Array<string>>(Array(9).fill(''));
  const [player, setPlayer] = useState<string>('X');
  const [winner, setWinner] = useState<string | null>(null);

  const handleCellClick = (index: number) => {
    if (board[index] === '' && !winner) {
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);

      if (checkWinner(newBoard, player)) {
        setWinner(player);
      } else {
        setPlayer(player === 'X' ? 'O' : 'X');
      }
    }
  };

  const checkWinner = (currentBoard: Array<string>, currentPlayer: string) => {
    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (
        currentBoard[a] === currentPlayer &&
        currentBoard[b] === currentPlayer &&
        currentBoard[c] === currentPlayer
      ) {
        return true;
      }
    }

    return false;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setPlayer('X');
    setWinner(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jogo da Velha</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid className="game-board">
          {board.map((cell, index) => (
            <IonRow key={index} className="game-row">
              <IonCol size="4" className="game-cell">
                <IonButton expand="full" onClick={() => handleCellClick(index)}>
                  {cell}
                </IonButton>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
        {winner && (
          <div className="winner-message">
            <p>Jogador {winner} Ganhouu!</p>
            <button onClick={resetGame}>Jogar dinovo</button>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
