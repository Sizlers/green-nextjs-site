import Link from 'next/link'
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
  return (
    <nav>
      <ul className="flex justify-center my-6">
        <li className={router.pathname == "/" ? "w-24 text-lg underline font-bold text-blue-600" : "w-24 text-lg underline"}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname == "/cakes" ? "w-24 text-lg underline font-bold text-blue-600" : "w-24 text-lg underline"}>
          <Link href="/cakes">Cakes</Link>
        </li>
        <li className={router.pathname == "/steaks" ? "w-24 text-lg underline font-bold text-blue-600" : "w-24 text-lg underline"}>
          <Link href="/steaks">Steaks</Link>
        </li>
        <li className={router.pathname == "/pizza" ? "w-24 text-lg underline font-bold text-blue-600" : "w-24 text-lg underline"}>
          <Link href="/pizza">Pizza</Link>
        </li>
      </ul>
    </nav>
  )
}