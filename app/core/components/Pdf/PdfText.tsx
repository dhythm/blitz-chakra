import { Text } from "@react-pdf/renderer"
import { FC, ReactNode } from "react"
import { PdfFont } from "."

// import NasuBold from "app/assets/fonts/Nasu-Bold.ttf"
import NasuBold from "./fonts/Nasu-Bold.ttf"
PdfFont.register({ family: "Nasu-Bold", src: NasuBold })

type Props = {
  children: ReactNode
  size?: number
  bold?: boolean
  fontColor?: "black" | "grey"
}
export const PdfText: FC<Props> = ({ size = 12, bold, fontColor = "black", children }) => (
  <Text
    style={{
      fontSize: size,
      ...(bold ? { fontFamily: "Nasu-Bold" } : null),
      color: fontColor,
    }}
  >
    {children}
  </Text>
)
