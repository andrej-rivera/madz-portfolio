import '../App.css'
import Header from '../components/Header'
import PDFObject from 'pdfobject'

export default function Resume() {
    PDFObject.embed("./resume.pdf", "#resume");
    return (
        <>
            <div className="resume">
                {/* <iframe src="./resume.pdf" className="resume-container"> </iframe> */}

                <object data="./resume.pdf" type="application/pdf" width="100%" height="100%">
                    <img width="100%" height="100%" src="images/resume.png"></img>
                </object>
            </div>


        </>
    )
};