import Link from "next/link"

import Image from 'next/image'

export default function Home() {
  return (
    
    <>
      <h1>HOME</h1>

      <h2>MEUS PRODUTOS</h2>
      <ul>
        <li><Link href="/produtos/calca">CALÇA</Link></li>
        <li><Link href="/produtos/meia">MEIA</Link></li>
        <li><Link href="/produtos/camisa">CAMISA</Link></li>
        <li><Link href="/produtos/tenis">TÊNIS</Link></li>
      </ul>

      <figure>
          <Image src="/img/black-friday.jpg" alt="flore" height={500} width={500}/>
      </figure>

    </>

  )
}