import PDFViewer from "@/component/PDFReader";
import { useLocation } from "react-router-dom";

function UserDescription() {
  const location = useLocation();

  const { user } = location.state || {};
  return (
    <>
      <PDFViewer pdfUrl={user.cv} />
    </>
  );
}

export default UserDescription;
