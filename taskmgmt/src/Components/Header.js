import Logo from "../Asset/icon.png"

export const Header = () =>
{
    return (
      <header>
        <img src={Logo} alt="logo" />
        <a href="/">Home</a>
      </header>
    )
}