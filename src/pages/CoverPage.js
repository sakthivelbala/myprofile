import PdfViewer from "../components/PdfViewer"


const CoverPage = () => {

    const coverPath = '/assets/cover.pdf'

    return <PdfViewer pdfFile={coverPath} title="Sakthivel Cover Letter"/>
}

export default CoverPage