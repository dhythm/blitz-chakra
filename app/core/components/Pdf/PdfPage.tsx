import { Page } from "@react-pdf/renderer"
import { ComponentProps, FC, ReactNode } from "react"

type Props = {
  children: ReactNode
} & Omit<ComponentProps<typeof Page>, "size">
export const PdfPage: FC<Props> = ({ children, ...props }) => (
  <Page
    size="A4"
    {...props}
    style={{
      backgroundColor: "#FFFFFF",
      fontFamily: "Nasu-Regular",
      padding: 50,
    }}
  >
    {children}
  </Page>
)
