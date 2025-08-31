import '../App.css'
import Header from '../components/header'
import PDFObject from 'pdfobject'

export default function Resume() {
    PDFObject.embed("./resume.pdf", "#resume");
    return (
        <>
            <main>
                <Header/>
                <div className="resume">
                    <h1 className="title">Resume</h1>
                    <iframe src="./resume.pdf" className="resume-container"> </iframe>
                </div>
            </main>
        </>
    )
};