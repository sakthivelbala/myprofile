

const PdfViewer = ({ pdfFile, title }) => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <embed
                src={pdfFile}
                width="100%"
                height="100%"
                type="application/pdf"
                title={title}
            />
        </div>
    );
};

export default PdfViewer