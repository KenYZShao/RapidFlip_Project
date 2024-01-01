import './Header2.css'; 
import logo from '../Media/favicon_io/LOGO192X192.png'

const Header2 = () => {
  return (
    <div id="wrap-header" className="wrap-header">
    <div id="header" className="header">
        <div id="logo" className="logo">
            <h1><a className="current" href="https://amanita-design.net/index.html">Amanita Design<span> </span></a></h1>
        </div>

        <div className="nav">
            <div className="social">
                <ul>
                    <li><a href="https://www.facebook.com/Amanita.Design" class="facebook">Facebook</a></li>
                    <li><a href="https://www.instagram.com/amanita_design_" class="instagram">Instagram</a></li>
                    <li><a href="https://twitter.com/Amanita_Design" class="twitter">Twitter</a></li>
                    <li><a href="https://discordapp.com/invite/Gr4Ec6K" class="discord">Discord</a></li>
					<li><a href="https://www.youtube.com/c/amanitadesign/featured" class="youtube">Youtube</a></li>
                </ul>
            </div>

            <div className="mainmenu">
                <ul>
                   
                    <li className="current"><a href="https://amanita-design.net/index.html" class="current menu01">Home<span> </span></a></li>
                    <li><a href="https://amanita-design.net/about.html" class="menu02">About<span> </span></a></li>
                    <li><a href="https://amanita-design.net/games.html" class="menu03">Games<span> </span></a></li>
                
                    <li><a href="https://merch.amanita-design.net/" target="_blank" class="menu05">Merch<span> </span></a></li>

                    <li><a href="https://amanita-design.net/contact.html" class="menu08">Contact<span> </span></a></li>
                </ul>
            </div> 
        </div> 
    </div>
</div>
  );
};

export default Header2;