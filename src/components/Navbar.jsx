export default function Navbar(){
  return(
    <nav className="py-4 bg-neutral-800 text-neutral-300 rounded-lg my-4 font-bold">
      <ul className="flex justify-center gap-8">
        <li className="hover:text-neutral-100 ease-in duration-100">
          <a href="">Home</a>
        </li>
        <li className="hover:text-neutral-100 ease-in duration-100">
          <a href="">Learn</a>
        </li>
      </ul>
    </nav>
  )
}