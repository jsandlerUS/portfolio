import JonathanImage from '../../resources/JonathanImage.png'
import chess from '../../resources/chess.png'
import meditation from '../../resources/meditation.png'
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import HeadsetIcon from '@material-ui/icons/Headset';
import SportsVolleyballIcon from '@material-ui/icons/SportsVolleyball';
import EcoIcon from '@material-ui/icons/Eco';
import Testimonials from '../Reusable/testimonials';

const Bio = () =>{
    return(
        <div className="bioContainer">
            <div className="bio">
                <img src={JonathanImage} alt="JonathanImage"></img>
                <div className="bioDescription">
                    <h1>Meet Jonathan Sandler</h1>
                    <h3>Frontend Web developer</h3>
                    <p>I have been an entrepreneur for over 9 years in the Natural Medicine field, and since 2019 I have incursion myself into Software Development. I have worked for different clients and companies for over a year now.
                        <br></br><br></br>
                        I am currently the Team Leader of Front-end at Armada Aeronautics, an automotive company that is disrupting the car industry with its innovative flying vehicle. I am in charge of designing, building, and maintaining the five most critical systems of the vehicle, and doing research to improve the UI over time. I supervise the work of my teammates and we work together to improve features while implementing cutting-edge technologies. I have also done several projects for independent clients; you can check them out at jsdesigns.us.
                        <br></br><br></br>
                        I entered Armada Aeronautics at a very critical time. My first assignment was to deliver the two core systems of the flying vehicle in 10 weeks. I had no previous experience in the industry, I was allowed to use only HTML, CSS, minimum JQuery, and all functionalities had to fully work offline. I designed, built, tested, and supervised every step; I had both systems done in 5 weeks. My area of expertise: Restful APIs, JavaScript, React, Redux, CSS, Node.js, Express, and MongoDB.
                        <br></br><br></br>
                        At Armada, time was limited so I focused on building simple and functional components to reuse them across the platform. This way I was able to code faster and avoid new bugs. The UI was rather simple but I had the core functionalities working. Once the biggest issues were addressed, I was able to prioritize and improved the rest of the features based on the remaining time I had.
                        <br></br><br></br>
                        Competent work is at your disposal, take it.
                        <br></br>
                        I look forward to hearing from you. </p>
                </div>
            </div>
            <div className="pageDivider">
                <div className="moreInfo">
                    <div className="awards">
                        <div className='bioTitle'>Awards &nbsp;<EmojiEventsIcon/></div>
                        <div className="bioText"> 3.44 GPA at University of the People, Bachelors in Computer Science</div>
                    </div>
                    <div className="interests">
                        <div className='bioTitle interestIcon'>Interests &nbsp;<HeadsetIcon/></div>
                        <div className="bioText"><SportsVolleyballIcon/> &nbsp;Volleyball, &nbsp;<img src={chess} alt="chess"></img>&nbsp;Chess, &nbsp;<img src={meditation} alt="meditation"></img>&nbsp;Meditation, & &nbsp;<EcoIcon/> Healthy Living</div>
                    </div>
                </div>
                <Testimonials/>
            </div>
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    )
}
export default Bio