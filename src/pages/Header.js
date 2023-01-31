import '../Header.css';
import img_im from '../images/imgMe.jpg'
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Header(props) {
    const params = useParams();
    let themeClick = (e) => {
        props.theme(e.target.dataset.color)
    }

    // 루트컬러변경
    // document.documentElement.style.setProperty('--your-variable', '#YOURCOLOR');
    return (
        <div id="header">
            
            <div className="my_info">
                <div className="img_im"><img src={img_im} alt="" /></div>
                <div className="tx_id">DEV_HWON</div>
                <div className="tx_summary">8년차 UI개발자 현원입니다.<br />반갑습니다. </div>
                <div className="tx_link tx_shortening_1">GIT : <Link to="https://github.com/dev-hwon/" target="_brank">https://github.com/dev-hwon/</Link></div>
                <div className="tx_link tx_shortening_1">BEFORE PF : <Link to="http://thehyun1.dothome.co.kr/" target="_brank">http://thehyun1.dothome.co.kr/</Link></div>
                <div className="tx_callnumber">Phon : 010-8738-7473</div>
                <div className="tx_mail">Mail : <a href="mailto:thehyun11@google.com">thehyun11@google.com</a></div>
            </div>
            <nav className="my_gnb">
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/Pflist/enuri">enuri.com</Link></li>
                    <li><Link to="/Pflist/fuz">fuz</Link></li>
                    <li><Link to="/Pflist/off">off</Link></li>
                    <li><Link to="/Pflist/vida">visual dive</Link></li>
                </ul>
            </nav>
            <div className='my_theme'>
                <div className='tx_tit'>COLOR THEME</div>
                <ul>
                    <li onClick={themeClick} data-color="dark"></li>
                    <li onClick={themeClick} data-color="white"></li>
                    <li onClick={themeClick} data-color="blue"></li>
                </ul>
            </div>
            <div className='my_copyright'>
                thehyun1.design ⓒ All right reserved.
            </div>
        </div>
    );
}