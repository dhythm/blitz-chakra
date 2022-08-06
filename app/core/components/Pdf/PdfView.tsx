import { View } from "@react-pdf/renderer"
import { Style as PdfStyle } from "@react-pdf/types"
import { ReactNode } from "react"

type Props = Partial<
  {
    children: ReactNode
    paddingX: PdfStyle["padding"]
    paddingY: PdfStyle["padding"]
    marginX: PdfStyle["margin"]
    marginY: PdfStyle["margin"]
  } & PdfStyle
>
export const PdfView = ({
  children,
  margin,
  marginTop = 0,
  marginRight = 0,
  marginBottom = 0,
  marginLeft = 0,
  marginX,
  marginY,
  padding,
  paddingTop = 0,
  paddingRight = 0,
  paddingBottom = 0,
  paddingLeft = 0,
  paddingX,
  paddingY,
  flexDirection = "column",
  ...props
}: Props) => {
  const multiplier = 10
  const multiplySpace = (value: any) =>
    isNumber(value) && Number(value) > 0 ? value * multiplier : value
  return (
    <View
      style={{
        display: "flex",
        flexDirection,
        ...(margin
          ? {
              margin: multiplySpace(margin),
            }
          : {
              marginLeft: multiplySpace(marginX ?? marginLeft),
              marginRight: multiplySpace(marginX ?? marginRight),
              marginTop: multiplySpace(marginY ?? marginTop),
              marginBottom: multiplySpace(marginY ?? marginBottom),
            }),
        ...(padding
          ? {
              padding: multiplySpace(padding),
            }
          : {
              paddingLeft: multiplySpace(paddingX ?? paddingLeft),
              paddingRight: multiplySpace(paddingX ?? paddingRight),
              paddingTop: multiplySpace(paddingY ?? paddingTop),
              paddingBottom: multiplySpace(paddingY ?? paddingBottom),
            }),
        ...props,
      }}
      wrap={false}
    >
      {children}
    </View>
  )
}

function isNumber(value: unknown): value is number {
  return typeof value === "number"
}
