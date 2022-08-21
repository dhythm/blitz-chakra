import { Page } from "@react-pdf/renderer"
import { ComponentProps, FC, ReactNode } from "react"

// import NasuRegular from "app/assets/fonts/Nasu-Regular.ttf"
// import NasuRegular from "./fonts/Nasu-Regular.ttf"
// PdfFont.register({ family: "Nasu-Regular", src: NasuRegular })

type Props = {
  children: ReactNode
} & Omit<ComponentProps<typeof Page>, "size">
export const PdfPage: FC<Props> = ({ children, ...props }) => (
  <Page
    size="A4"
    {...props}
    style={{
      backgroundColor: "#FFFFFF",
      fontFamily: "Noto Sans JP",
      padding: 50,
    }}
  >
    {children}
  </Page>
)
