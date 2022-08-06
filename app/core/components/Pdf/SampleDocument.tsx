import { PdfDocument, PdfFont, PdfPage, PdfText, PdfView } from "."

// PdfFont.register({ family: "Nasu-Regular", src: "/fonts/Nasu-Regular.ttf" })
// PdfFont.register({ family: "Nasu-Bold", src: "/fonts/Nasu-Bold.ttf" })

// import NasuRegular from "../../../../public/fonts/Nasu-Regular.ttf"
import NasuRegular from "app/assets/fonts/Nasu-Regular.ttf"
PdfFont.register({ family: "Nasu-Regular", src: NasuRegular })

export const SampleDocument = () => (
  <PdfDocument>
    <PdfPage
      size={"A4"}
      orientation="portrait"
      style={{ backgroundColor: "#FFFFFF", fontFamily: "Nasu-Regular", padding: 50 }}
    >
      <PdfView>
        <PdfText>English</PdfText>
      </PdfView>
      <PdfView>
        <PdfText>日本語</PdfText>
      </PdfView>
    </PdfPage>
  </PdfDocument>
)
