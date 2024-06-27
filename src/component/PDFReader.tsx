import { pdfjs, Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PDFViewer({ pdfUrl }: any) {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default PDFViewer;
