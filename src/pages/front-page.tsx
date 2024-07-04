import Header from "../components/header";
import Footer from "../components/footer";
import { Videos } from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";
import Background from "../components/background";


function FrontPage(): JSX.Element {
  const device: boolean = useAppSelector((state) => state.device);
  const [activeVideo, setActiveVideo] = useState('1');
  const [isMute, setMute] = useState(false);
  const handleChangeVideo = (next: string) => {
    (document.getElementById("video-" + activeVideo) as HTMLVideoElement).pause();
    (document.getElementById("video-" + next) as HTMLVideoElement).play();
    setActiveVideo(next);
  };
  return (
    <>
      <Header />
      <section className="main__wrap" style={(device) ? {height: '630px'} : {height: '1000px'}}>
        <div className="main">
          <h2 className="front-page__header">NEW COLLECTION</h2>
        <div className="container" style={(device) ? {maxHeight: '500px'} : {minHeight: '800px', minWidth: '450px'}}>
            <input type="radio" name="slider" id="item-1" onClick={() => handleChangeVideo('1')} defaultChecked/>
            <input type="radio" name="slider" id="item-2" onClick={() => handleChangeVideo('2')}/>
            <input type="radio" name="slider" id="item-3" onClick={() => handleChangeVideo('3')}/>
            <input type="checkbox" role="switch" id="mute-button" onClick={() => setMute(!isMute)}/>
            <div className="cards" >
              {Videos.map((video) => (
                <label className="card" key={video.id} htmlFor={"item-"+video.id} id={"video-label-"+video.id}>
                  <div className="video__mask">
                    <video id={'video-' + video.id} autoPlay={video.id == '1'} preload={video.id == '1' ? 'auto' : 'metadata'} muted={isMute} height={"100%"} width={"100%"}>
                      <source src={video.src} />
                    </video>
                    <label className="mute" htmlFor="mute-button">
                      <div className="img__mute" 
                        style={(video.id == activeVideo) 
                          ? {opacity: '1', backgroundColor: '#ECEFF1', borderRadius: '15px'} 
                          : {opacity: '0', backgroundColor: 'none'}
                        }
                      >
                        <img  src={(isMute) ? "img/mute-icon-on.svg" : "img/mute-icon-off.svg"} width="16px" />
                      </div>
                    </label>
                  </div>
                </label>
              ))}
            </div>
            <div className="button">
              <div className="upper-part">
                <div className="info-area" id="test">
                  {Videos.map((video) => (
                    <Link to={video.link} key={video.id} className="video-info" id={"video-info-" + video.id}>
                      <div className="title">{video.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Background firstColor={"rgba(255,255,255"} secondColor={"rgba(211,211,211"} thirdColor={"rgba(181,181,181"} />
      </section>
      <Footer/>
    </>
  );
}

export default FrontPage;