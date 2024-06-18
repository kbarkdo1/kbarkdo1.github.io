import backgroundPic from "../assets/headerBackground.png"
import "../App.css"
interface HeaderProps {
    logo?: any;
}

export function Header(props: HeaderProps) {
    return (
        <>
        <header className="App-header">    
      </header>
      <h1 className=".App-header-text">Hello there!</h1>
      </>

    )
}