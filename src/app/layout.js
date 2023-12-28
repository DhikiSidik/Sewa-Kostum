import './globals.css';

export const metadata = {
  title: 'ALI-COSTRENT',
  description: 'website resmi Ali-Rentcos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import Montserrat font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        />
        <style>{`
          body {
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            background-color: #f0f0f0;
          }

          .header {
            background-color: #007bff;
            color: white;
            padding: 10px;
            text-align: center;
            font-family: 'Montserrat', sans-serif;
          }
        `}</style>
      </head>
      <body>
        <div className='header'>
          <h1>Halaman Login</h1>
          {/* <h1>ALI-COSTRENT</h1>
          <p>website resmi Ali-Rentcos</p> */}
        </div>

        
      </body>
      {children}
    </html>
  );
}
