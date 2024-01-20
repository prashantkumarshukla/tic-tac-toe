import { Audio, AudioMode } from 'expo-av';
import { useEffect, useState } from 'react';

interface ISounds {
    touchedSound: boolean;
    onTouchedSound: () => void;
    gameOverSound: boolean;
    onGameOverSound: () => void;
}

const Sounds = (props: ISounds) => {
    const { touchedSound, onTouchedSound, gameOverSound, onGameOverSound } = props;
    const [sound, setSound] = useState();
    const [gameOverMusic, setGameOverMusic] = useState();

    const touched = async () => {
        const { sound } = await Audio.Sound.createAsync( require('../../assets/sounds/click.wav'));
        setSound(sound);
        await sound.playAsync();
    }
    const gameOver = async () => {
        const { sound } = await Audio.Sound.createAsync( require('../../assets/sounds/game_over.wav'));
        setGameOverMusic(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        if (touchedSound) {
            touched();
            onTouchedSound();
        }
    }, [touchedSound])

    useEffect(() => {
        if (gameOverSound) {
            gameOver();
            onGameOverSound();
        }
    }, [gameOverSound])
    
    useEffect(() => {
        return sound
          ? () => { sound.unloadAsync();} : undefined;
    }, [sound]);

    useEffect(() => {
        return gameOverMusic
          ? () => { gameOverMusic.unloadAsync(); } : undefined;
    }, [gameOverMusic]);

    return (<></>)
}

export default Sounds;