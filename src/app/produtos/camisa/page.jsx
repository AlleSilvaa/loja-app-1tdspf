import Link from "next/link"

import Image from 'next/image'

export default function camisa() {
    return (
        <>
        <h1>camisa</h1>

        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur maiores, officia accusantium ab eaque sit harum dolorum libero sint consectetur aliquam exercitationem, placeat iure. Enim commodi voluptas libero rem labore.
        </div>

        <p><Link href="/">voltar...</Link></p>

        <figure>
          <Image src="/img/camisa.jpg" alt="flore" height={500} width={500}/>
        </figure>

      </>

    )

}