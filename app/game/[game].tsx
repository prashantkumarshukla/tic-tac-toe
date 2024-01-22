import { useEffect, useState } from "react";
import Dialog from "react-native-dialog";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  useInterstitialAd,
} from "react-native-google-mobile-ads";

import { View, Text } from "../../components/Themed";
import { Styles } from "../../styles/styles";
import { APP_CONSTANT } from "../../constants/AppConstant";
import { MarginStyles } from "../../styles/styles-margin";

import Board from "../../components/board/board";
import { PaddingStyles } from "../../styles/styles-padding";
import { useLocalSearchParams } from "expo-router";
import StrikeComp from "../../components/strike/strike";
import WhoseTurnComp from "../../components/whose-turm/whose-turn";
import ResetButton from "../../components/reset-button/reset-button";
import Winner from "../../components/winner/winner";
import Sounds from "../../components/sounds/sounds";
import Scores from "../../components/scores/scores";
import GameDraw from "../../components/game-draw/game-draw";
import AppLogo from "../../components/logo/logo";
import IconButton from "../../components/icon-button/icon-button";

const adUnitId = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-2714331057772144/5393988363";

const GamePage = () => {
  const { game } = useLocalSearchParams();
  const { isLoaded, isClosed, load, show } = useInterstitialAd(
    TestIds.INTERSTITIAL
  );
  const { x, o } = APP_CONSTANT;
  const {
    centerView,
    centerItemAlign,
    rowFormat,
    font50,
    alignRight,
    width20,
    width40,
    width30,
    width50,
    width60,
    width70,
  } = Styles;
  const { marginMDRight, marginMDTop, marginXSLeft, marginXSRight } =
    MarginStyles;
  const { paddingMDTop, paddingMDLeft, paddingMDBottom, paddingMDRight } =
    PaddingStyles;

  const [xIsNext, setXIsNext] = useState(false);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [singlePlayer, setSinglePlayer] = useState(false);
  const [strikeClass, setStrikeClass] = useState("");
  const [whoseTurn, setWhoseTurn] = useState("");
  const [score, setScore] = useState({ X: 0, O: 0, T: 0 });
  const [isGameDraw, setIsGameDraw] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  //Sounds
  const [playTouchSound, setPlayTouchSound] = useState(false);
  const [playGameOverSound, setPlayGameOverSound] = useState(false);

  const updateScore = (winnerName: string) => {
    if (winnerName === "X") {
      const newScore = score.X + 1;
      setScore({
        X: newScore,
        O: score.O,
        T: score.T,
      });
    }
    if (winnerName === "O") {
      const newScore = score.O + 1;
      setScore({
        X: score.X,
        O: newScore,
        T: score.T,
      });
    }
    if (winnerName === "T") {
      const newScore = score.T + 1;
      setScore({
        X: score.X,
        O: score.O,
        T: newScore,
      });
    }
  };

  const winningCombinations = [
    //Rows
    { combo: [0, 1, 2], strikeClass: "strikeRow1" },
    { combo: [3, 4, 5], strikeClass: "strikeRow2" },
    { combo: [6, 7, 8], strikeClass: "strikeRow3" },

    //Columns
    { combo: [0, 3, 6], strikeClass: "strikeColumn1" },
    { combo: [1, 4, 7], strikeClass: "strikeColumn2" },
    { combo: [2, 5, 8], strikeClass: "strikeColumn3" },

    //Diagonals
    { combo: [0, 4, 8], strikeClass: "strikeDiagonal1" },
    { combo: [2, 4, 6], strikeClass: "strikeDiagonal2" },
  ];

  const calculateWinner = (squares: any) => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i].combo;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        if (!gameOver) {
          setStrikeClass(winningCombinations[i].strikeClass);
          setGameOver(true);
          setWhoseTurn("");
          setPlayGameOverSound(true);
          updateScore(squares[a]);
        }
        return squares[a];
      }
    }
    return null;
  };

  const onSquarePress = (i: number) => {
    setPlayTouchSound(true);

    const value = xIsNext ? "X" : "O";
    const newSquares = [...squares];

    if (newSquares[i] || calculateWinner(squares)) {
      return;
    }

    newSquares[i] = value;

    setXIsNext(!xIsNext);
    setSquares(newSquares);
    setWhoseTurn(value === "X" ? "O" : "X");
  };

  const winner = calculateWinner(squares);

  const resetOrNewGame = () => {
    if (isLoaded) {
      show();
    }
    setPlayGameOverSound(true);
    setSquares(Array(9).fill(null));
    setStrikeClass("");
    setGameOver(false);
    setXIsNext(false);
    setIsGameDraw(false);
  };

  const gameStatus = () => {
    if (!winner) {
      updateScore("T");
      setIsGameDraw(true);
    }
  };

  useEffect(() => {
    if (game === "singlePlayer") {
      setSinglePlayer(true);
    }
    console.log("Ad unit id: ", adUnitId);
    console.log("Mode: ", __DEV__);
  }, [game]);

  useEffect(() => {
    if (!gameOver) {
      setWhoseTurn(xIsNext ? "X" : "O");
    }
  }, [gameOver, xIsNext]);

  useEffect(() => {
    // Start loading the interstitial straight away
    load();
  }, [load]);

  return (
    <View style={centerView}>
      <View
        style={[paddingMDLeft, paddingMDTop, paddingMDBottom, centerItemAlign]}
      >
        <AppLogo />
      </View>
      <View style={[paddingMDTop, paddingMDBottom, rowFormat]}>
        <View style={[width50]}>
          {winner ? (
            <Winner name={winner} />
          ) : isGameDraw ? (
            <GameDraw />
          ) : (
            <WhoseTurnComp whoseTurn={whoseTurn} />
          )}
        </View>
        <View style={[width20, marginXSLeft, marginXSRight]}>
          <ResetButton onPress={resetOrNewGame} />
        </View>
        <View style={[width20]}>
          <IconButton
            iconName="gear"
            iconSize={25}
            onPress={() => {
              setShowDialog(true);
            }}
          />
        </View>
      </View>

      <View style={[paddingMDTop, centerItemAlign]}>
        <Board
          squares={squares}
          onSquarePress={onSquarePress}
          singlePlayer={singlePlayer}
          onSpaceUnavailable={() => {
            gameStatus();
          }}
        />
      </View>
      {winner && <StrikeComp className={strikeClass} />}
      <Sounds
        touchedSound={playTouchSound}
        onTouchedSound={() => {
          setPlayTouchSound(false);
        }}
        gameOverSound={playGameOverSound}
        onGameOverSound={() => {
          setPlayGameOverSound(false);
        }}
      />
      <View style={[paddingMDLeft, marginMDTop, rowFormat]}>
        <View style={[marginMDRight]}>
          <Scores panelColor="yellow" name="O (YOU)" score={score.O} />
        </View>
        <View style={[marginMDRight]}>
          <Scores panelColor="default" name="TIES" score={score.T} />
        </View>
        <View>
          <Scores panelColor="blue" name="X (CPU)" score={score.X} />
        </View>
      </View>
      {adUnitId && (
        <View style={[paddingMDTop]}>
          <BannerAd
            //unitId={adUnitId}
            unitId={TestIds.BANNER}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      )}

      <Dialog.Container visible={showDialog}>
        <Dialog.Title>Change the game mode</Dialog.Title>
        <Dialog.Description>
          By clicking on the below buttons, game mode will Change.
        </Dialog.Description>
        <Dialog.Button
          label="Singel Player"
          onPress={() => {
            setSinglePlayer(true);
            resetOrNewGame();
            setShowDialog(false);
          }}
        />
        <Dialog.Button
          label="Multi Player"
          onPress={() => {
            setSinglePlayer(false);
            resetOrNewGame();
            setShowDialog(false);
          }}
        />
      </Dialog.Container>
    </View>
  );
};

export default GamePage;
