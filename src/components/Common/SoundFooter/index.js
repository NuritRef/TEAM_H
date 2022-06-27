import styles from './style.module.css'
import soundFooterPic from "../../../images/soundFotter"

// Creator : Team H - batya
export default function SoundFooter(props){ // TO DO : get props from DB of person number LPM
    return <>
    <img className= {styles.soundFooter} src={soundFooterPic} ></img>
    </>
}