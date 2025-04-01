import Logo from "./Logo";
import "./header.css"

export default function Header() {
  return <header className="w-100 header bg-white d-flex justify-content-between align-items-center py-3 px-3">
    <Logo />
    <div>
      <button className="btn btn-primary">
        Sign in
      </button>

      <button className="btn btn-light ms-3">
        Sign up
      </button>
    </div>
  </header>
}