import ReactPDF from "@react-pdf/renderer"
import { SampleDocument } from "app/core/components"
import { Base64Encode } from "base64-stream"
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
    console.log({ fileName })
    await ReactPDF.render(SampleDocument(), fileName)

    const stream = await ReactPDF.renderToStream(SampleDocument())
    // const string = await ReactPDF.renderToString(SampleDocument())

    // NOTE: base64str does NOT match with the encoded PDF
    const buffer = await fs.readFile(fileName)
    const arrayBuffer = new ArrayBuffer(buffer.length)
    const view = new Uint8Array(arrayBuffer)
    for (let i = 0; i < buffer.length; i++) {
      view[i] = buffer[i]!
    }
    const base64str = Buffer.from(
      new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ""),
      "binary"
    ).toString("base64")

    // var data = ""
    // stream
    //   .pipe(new Base64Encode())
    //   .on("data", (chunk) => {
    //     data += chunk
    //   })
    //   .on("end", () => {
    //     console.log({ data })
    //   })

    const promise = () => {
      var data = ""
      return new Promise((resolve, reject) => {
        stream
          .pipe(new Base64Encode())
          .on("data", (chunk) => {
            data += chunk
          })
          .on("end", () => {
            resolve(data)
          })
          .on("error", (error) => reject(error))
      })
    }
    const data = await promise()

    await fs.rm(fileName, { force: true })
    console.log({ base64str })
    console.log({ data })

    const pdf = base64str

    return pdf
  }
)
