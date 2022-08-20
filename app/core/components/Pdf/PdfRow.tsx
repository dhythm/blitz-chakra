import { ComponentProps, FC } from "react"
import { PdfText } from "./PdfText"
import { PdfView } from "./PdfView"

type Props = {
  height?: ComponentProps<typeof PdfView>["height"]
  label: string
  value: string
  border?: boolean
}

export const PdfRow: FC<Props> = ({ height, label, value, border }) => {
  return (
    <PdfView
      height={height}
      flexDirection="row"
      alignItems="center"
      {...(border && { borderBottom: "1 solid black" })}
    >
      <PdfView width={150}>
        <PdfText>{label}</PdfText>
      </PdfView>
      <PdfView flexGrow={1}>
        <PdfText>{value}</PdfText>
      </PdfView>
    </PdfView>
  )
}
