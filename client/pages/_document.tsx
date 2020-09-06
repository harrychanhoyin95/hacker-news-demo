import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerStyleSheets } from '@material-ui/styles';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const styledComponentSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props) =>
          styledComponentSheet.collectStyles(materialSheets.collect(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
            {materialSheets.getStyleElement()}
          </>
        ),
      }
    } finally {
      styledComponentSheet.seal()
    }
  }
}