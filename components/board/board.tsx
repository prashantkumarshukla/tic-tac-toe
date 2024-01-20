import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';

import { View, Text } from "../Themed";
import { Shadows } from '../../styles/styles-shadow';
import { TextColors } from '../../styles/styles-text-color';

interface IBoardProps {
    onSquarePress: (val: number) => void;
    squares: number[];
    singlePlayer: boolean;
    onSpaceUnavailable: () => void;
}

const screen = Dimensions.get('window');
const SQUARE_SIZE = Math.floor(screen.width * 0.27);

const Board = (props: IBoardProps) => {
    const { onSquarePress, squares, singlePlayer, onSpaceUnavailable} = props;
    const [ player1Turn, setPlayer1Turn ] = useState(true);

    //const combination = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6]];
    const scenarios = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const getAvailableSpace = () => {
        const availableSquare: any = [];
        squares.forEach((square, index) => {
            if (square === null) {
                availableSquare.push(index);
            }
        });
        return availableSquare;
    }

    const min2ValuesOnBoard = (): number => {
        let counter = 0;

        for (let i=0; i< squares.length; i++) {
            if (squares[i] !== null) {
                counter++;
            }
        }
        return counter;
    }

    const possibleCombinationOfPlayer1 = (): number[] => {
        const valuePresentAtLevel = [];
        const minValOnBoard = min2ValuesOnBoard();
        const emptySlots: number[] = [];

        if (minValOnBoard > 1) {
            for(let i=0; i< scenarios.length; i++) {
                const level = scenarios[i];
                for (let j=0; j< level.length; j++) {
                    const item = level[j];
                    if (squares[item] === 'O') {
                        valuePresentAtLevel.push(level);
                        break;
                    }
                }
            }
            if (valuePresentAtLevel.length > 0) {
                valuePresentAtLevel.forEach((valueArray : number[]) => {
                    
                    if (squares[valueArray[0]] === 'O' && squares[valueArray[1]] === 'O' && squares[valueArray[2]] === null) {
                        emptySlots.push(valueArray[2]);
                    }
                    if (squares[valueArray[0]] === 'O' && squares[valueArray[1]] === null && squares[valueArray[2]] === 'O') {
                        emptySlots.push(valueArray[1]);
                    }
                    if (squares[valueArray[0]] === null && squares[valueArray[1]] === 'O' && squares[valueArray[2]] === 'O') {
                        emptySlots.push(valueArray[0]);
                    }
                })
            }
        }
        return emptySlots;
    }

    const systemTurn = () => {
        setPlayer1Turn(true);
        const getEmptySlots = possibleCombinationOfPlayer1();
        const availableSquare: [] = getAvailableSpace();
        console.log("getEmptySlots: ", getEmptySlots);
        console.log("availableSquare: ", availableSquare);
        if (availableSquare.length > 0) {
            const random = Math.floor(Math.random() * availableSquare.length);
            onSquarePress(availableSquare[random]);
        } else {
            onSpaceUnavailable();
        }
    }

    if (!player1Turn) {
        systemTurn();
    }

    const singleVsMultiPlayer = (val: number) => {
        onSquarePress(val);
        if (singlePlayer) {
            setPlayer1Turn(false);
        } else {
            const availableSquare: [] = getAvailableSpace();
            console.log("availableSquare: ", availableSquare);
            if (availableSquare.length === 0) {
                onSpaceUnavailable();
            }
        }
    }

    const Square = ({onPress, value}) => {
        const { shadowBox, shadowText } = Shadows;
        const {blueText, yellowText} = TextColors;
        return (
            <TouchableOpacity style={[styles.square, shadowBox]} onPress={onPress}>
                {
                    value && value === 'X' && (
                        <Text style={[shadowText, styles.squareText, blueText]}>{value}</Text>
                    )
                }
                {
                    value && value === 'O' && (
                        <Text style={[shadowText, styles.squareText, yellowText]}>{value}</Text>
                    )
                }
            </TouchableOpacity>
        );
    }
    
    const renderSquare = (i: number) => {
      return <Square value={squares[i]} onPress={() => singleVsMultiPlayer(i)} />;
    };
  
    return (
      <View style={styles.board}>
        <View style={styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3ba2bf',
      alignItems: 'center',
      justifyContent: 'center',
    },
    board: {
    //   borderWidth: 1,
    //   borderColor: '#fff',
    },
    row: {
      flexDirection: 'row',
    },
    square: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#8f7900',
        alignItems: 'center',
        justifyContent: 'center',
        width: SQUARE_SIZE,
        height: SQUARE_SIZE,
        backgroundColor: '#330259',
        margin: 10
    },
    squareText: {
      fontSize: 70,
      fontWeight: 'bold'
    },
    text: {
      textAlign: 'center',
    },
    yellowText: {
        color: '#fad000'
    },
    blueText: {
        color: '#02aabd'
    }
  });

  export default Board;