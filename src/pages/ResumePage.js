import PdfViewer from "../components/PdfViewer"


const ResumePage = () => {

    const resumePath = '/assets/resume.pdf'

    return <PdfViewer pdfFile={resumePath} title="Sakthivel Resume"/>
}

export default ResumePage