import DownloadLink from "react-download-link";
const Download = () => {
        return( 
            <DownloadLink
                label="Download"
                filename="JonathanSandlerResume.pdf"
                exportFile={() => "JonathanSandlerResume.pdf"}
            />
            )
}
export default Download