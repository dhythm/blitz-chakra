import ReactPDF from "@react-pdf/renderer"
import { SampleDocument } from "app/core/components"
import { resolver } from "blitz"
import { z } from "zod"

const CreatePdf = z.object({
  // name: z.string(),
})

export default resolver.pipe(resolver.zod(CreatePdf), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  // const pdf = await db.pdf.create({ data: input })
  ReactPDF.render(SampleDocument(), `${__dirname}/example.pdf`)
  const pdf = null

  return pdf
})
