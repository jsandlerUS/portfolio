import { Link } from "react-router-dom";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import WorkIcon from '@material-ui/icons/Work';
import AndroidIcon from '@material-ui/icons/Android';

const Navbar = () =>{

    return(
        <div>
            <div className="navbar">
            <Link to="/projects"> <WorkIcon/>Projects </Link>
            <Link to="/bio"><AndroidIcon/>Bio</Link>
            <Link to="/download"><CloudDownloadIcon/> Resume </Link>
            </div>
        </div>
    )
}

export default Navbar