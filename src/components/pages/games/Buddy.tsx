import "./Buddy.css"

const Buddy:React.FC = () => {
    return (
    <div id="content" className="content content--game">
        <div className="game-content-container">
            <div className="video" >
                <iframe width="620" height="349" src="https://www.youtube.com/embed/sWZ17Yc379I?rel=0&hide=1&showinfo=0" ></iframe>
            </div>   
            <div className="game-section borderB">
                <div className="storefronts">
                    <div className="storefronts-item" >
                        <a className="storefronts-item-link storefronts-item-link--steam" href="https://store.steampowered.com/app/1206070/Phonopolis/">steam</a>
                    </div>
                </div>
            </div>
            <div className="game-section game-desc taC">
                <h2 className="no-margin">Phonopolis</h2>      
                <h2><span>A hand-crafted adventure game<br />(in development)</span></h2>      
                <p className="">Stand up against The Leader’s oppressive rule.</p>
            </div>
        </div> 
    </div>

    );
  };
  
export default Buddy;