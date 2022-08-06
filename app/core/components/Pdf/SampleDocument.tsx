import { PdfDocument, PdfPage, PdfText, PdfView } from "."

export const SampleDocument = () => (
  <PdfDocument>
    <PdfPage size={"A4"} orientation="portrait" style={{ backgroundColor: "#FFFFFF", padding: 50 }}>
      <PdfView>
        <PdfText>English</PdfText>
      </PdfView>
      <PdfView>
        <PdfText>日本語</PdfText>
      </PdfView>
    </PdfPage>
  </PdfDocument>
)
