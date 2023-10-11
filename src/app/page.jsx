import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <h1>HOME</h1>
      <div>
      <h2>Meus Produtos</h2>
      <ul>
        <li><Link href="./produtos/calca">Calça</Link></li>
        <li><Link href="./produtos/camisa">Camisa</Link></li>
        <li><Link href="./produtos/meia">Meia</Link></li>
        <li><Link href="./produtos/tenis">Tênis</Link></li>
      </ul>
      </div>

      <figure>
        <image src= "/public/img/black-friday-2946943_1280.jpg" alt= "Placa escura" width={335} height={500}></image>
      </figure>
    </>
  )
}
