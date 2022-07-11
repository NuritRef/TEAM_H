import styles from "./style.module.css";
import Clock from "../../../components/common/Clock";
import SoundFooter from "../../../components/common/SoundFooter"
import React, { useContext } from "react";
import {useEffect, useState, useRef} from "react"
import SubmitBtn from "../../../components/common/SubmitBtn";
import { dataContext } from "../../../context/context";

// Creator : Team H - Nurit & Milka & Batia

function Training() {
  const localDataContext = useContext(dataContext)
  console.log(localDataContext);
  const tr = localDataContext.userDetails.TR
  console.log('userLpm',tr[tr.length-1]);
  
  const [lpm,setLpm] = useState(tr[tr.length-1].Value) 
  let fileName = pickFile(lpm); 
  const file = require(`../../../assets/wush_mp3/wush_${fileName}_1min.mp3`);
  const [audio, setAudio] = useState(new Audio(file)); 
  const [playing, setPlaying] = useState(0)
  

  // this function get the updated lpm and return which file is closer the most. 
  function pickFile(lpm) {
    let array = [10, 20, 40, 60, 80, 100];
    let index = 0;
    for (let i in array) {
        if (lpm > array[i]) {
            index = Number(i);
        }
    }
    if (lpm - array[index] > array[index + 1] - lpm) {
        index++;
    }
    return array[index];
  }

  // this listener is for audio loop:
  audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);

function onPlay(){
  audio.play();
  audio.playbackRate = lpm/fileName  
  setPlaying(1)

}

function onPause(){
audio.pause();  console.log(file);
setPlaying(0)
}

function rapid(newLpm){
  setLpm(newLpm);
  audio.playbackRate = lpm/fileName // here the audio plays the music rythm in the file according to specific lpm
  console.log(file)
  console.log(audio.playbackRate);

}

function onComplete(){
  console.log("onComplete")
}

const freeStyleFuncs = {
  onPlay: onPlay, 
  onPause: onPause,
  rapid: rapid, 
  onComplete: onComplete
}


  return (
    <>
    <Clock freeStyle={true} time={180} funcs={freeStyleFuncs}  initRapidValue={lpm} ></Clock>
    {playing ?
      <SoundFooter song = {file}></SoundFooter> : <SubmitBtn type={"link"} name={"Done"} path = {"/teamH/graphDashboard"}></SubmitBtn>}
    {/* The soundFooter at this moment is not activated by itself!, require play press  */}
    </>
  );
}

export default Training;



