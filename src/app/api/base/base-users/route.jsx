import {promises as fs} from 'fs';
import { NextResponse } from 'next/server';

export async function GET(request,{params}){
    const file =  await fs.readFile(process.cwd() + "/src/app/api/base/db.json","utf8");

    const lista = await JSON.parse(file);
    
    return NextResponse.json(lista);

}

export async function POST(request, response){
        const file =  await fs.readFile(process.cwd() + "/src/app/api/base/db.json","utf8");

        const lista = await JSON.parse(file);
    
        const userReq = await request.json();

        try {
            for (let x = 0; x < lista.usuarios.length; x++) {
                const userLista = lista.usuarios[x];
                if(userLista.email == userReq.email && userLista.senha == userReq.senha){
                    return NextResponse.json({"status":true});
                }
            }
        } catch (error) {
            console.error(error);
        }

        return NextResponse.json({"status":false});
}