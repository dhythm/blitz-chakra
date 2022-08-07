import ReactPDF from "@react-pdf/renderer"
import { SampleDocument } from "app/core/components"
import { resolver } from "blitz"
import { promises as fs } from "fs"
import { z } from "zod"

const CreatePdf = z.object({
  // name: z.string(),
})

export default resolver.pipe(
  resolver.zod(CreatePdf),
  // resolver.authorize(),
  async (input) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    // const pdf = await db.pdf.create({ data: input })
    const fileName = `${__dirname}/example.pdf`
    ReactPDF.render(SampleDocument(), fileName)

    const stream = await ReactPDF.renderToStream(SampleDocument())
    const string = await ReactPDF.renderToString(SampleDocument())

    let buffer: Buffer = await fs.readFile(fileName)
    const base64str = Buffer.from(
      new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ""),
      "binary"
    ).toString("base64")

    console.log({ fileName })
    console.log({ base64str })

    const pdf = base64str

    return pdf
  }
)
