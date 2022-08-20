import { PdfDocument, PdfFont, PdfPage, PdfRow, PdfText, PdfView } from "."

// PdfFont.register({ family: "Nasu-Regular", src: "/fonts/Nasu-Regular.ttf" })
// PdfFont.register({ family: "Nasu-Bold", src: "/fonts/Nasu-Bold.ttf" })

// import NasuRegular from "../../../../public/fonts/Nasu-Regular.ttf"
import NasuRegular from "app/assets/fonts/Nasu-Regular.ttf"
PdfFont.register({ family: "Nasu-Regular", src: NasuRegular })

export const SampleDocument = () => (
  <PdfDocument>
    <PdfPage
      orientation="portrait"
      style={{ backgroundColor: "#FFFFFF", fontFamily: "Nasu-Regular", padding: 50 }}
    >
      <PdfView>
        <PdfText>株式会社トゥ御中</PdfText>
      </PdfView>
      <PdfView alignItems="flex-end">
        <PdfText>2022年8月1日</PdfText>
      </PdfView>
      <PdfView alignItems="flex-end">
        <PdfText>株式会社フロム</PdfText>
      </PdfView>
      <PdfView alignItems="center" marginY={3}>
        <PdfText>依頼</PdfText>
      </PdfView>
      <PdfView marginBottom={3}>
        <PdfText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </PdfText>
      </PdfView>
      <PdfView alignItems="center">
        <PdfView width={300}>
          <PdfRow height={30} border label={"銀行名"} value={"テスト銀行"} />
          <PdfRow height={30} border label={"支店名"} value={"テスト支店"} />
          <PdfRow height={30} border label={"口座種別"} value={"普通"} />
          <PdfRow height={30} border label={"口座番号"} value={"1234567"} />
          <PdfRow height={30} border label={"口座名義"} value={"テスト太郎"} />
          <PdfRow height={30} border label={"口座名義（カナ）"} value={"テストタロウ"} />
        </PdfView>
      </PdfView>
      <PdfView alignItems="flex-end" marginTop={3}>
        <PdfText>以上</PdfText>
      </PdfView>
    </PdfPage>
  </PdfDocument>
)
