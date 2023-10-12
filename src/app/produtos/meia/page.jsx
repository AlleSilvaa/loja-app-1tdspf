import Link from "next/link"

import Image from 'next/image'

export default function meia() {
    return (
        <>
        <h1>MEIA</h1>

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maiores, officia accusantium ab eaque sit harum dolorum libero sint consectetur aliquam exercitationem, placeat iure. Enim commodi voluptas libero rem labore.
        </div>

        <p><Link href="/">voltar...</Link></p>
        
        <figure>
          <Image src="/img/meia.jpg" alt="flore" height={500} width={500}/>
        </figure>
        
      </>
  
    )

}