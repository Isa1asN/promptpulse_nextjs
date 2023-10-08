import '@styles/global.css'

export const metadata = {
  title : "PromptPulse",
  description : 'Discover and share useful AI prompts'
}


const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body> 
        <div className='main'>
          <div className='gradient'/>
        </div>

        <main>
          {children}
        </main>

      </body>
    </html>
  )
}

export default RootLayout