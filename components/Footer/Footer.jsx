import './footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerWrapper">
        <div>
          <img src={'/icons/home.svg'} width={25} height={25} alt="home" />
        </div>
        <div>
          <img src={'/icons/search.svg'} width={25} height={25} alt="search" />
        </div>
        <div>
          <img
            src={'/icons/info.svg'}
            width={25}
            height={25}
            alt="forecast report"
          />
        </div>
        <div>
          <img
            src={'/icons/settings.svg'}
            width={25}
            height={25}
            alt="settings"
          />
        </div>
      </div>
    </footer>
  )
}
