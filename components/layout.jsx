import Footer from './Footer/Footer'

export default function Layout({ children }) {
  return (
    <div className="App">
      <main className="main">{children}</main>
      <Footer />
    </div>
  )
}
