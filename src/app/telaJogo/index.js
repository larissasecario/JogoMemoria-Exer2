import { Carta } from "./components/Carta";
import './style.css'

export const TelaJogo = ()=>{
    const imgCartas = ['img1', 'img2', 'img3','img4', 'img5', 'img6',]
    const cartasDublicadas = [...imgCartas, ...imgCartas];

    const embaralhar = cartasDublicadas.sort(()=>{return Math.random()-0.5});
    console.log(embaralhar[0], embaralhar[1], embaralhar[2],embaralhar[3],)



    
    return(
        <div className="telaJogo">
            <Carta tipoCarta={embaralhar[0]}/>
            <Carta tipoCarta={embaralhar[1]}/>
            <Carta tipoCarta={embaralhar[2]}/>
            <Carta tipoCarta={embaralhar[3]}/>
            <Carta tipoCarta={embaralhar[4]}/>
            <Carta tipoCarta={embaralhar[5]}/>
            <Carta tipoCarta={embaralhar[6]}/>
            <Carta tipoCarta={embaralhar[7]}/>
            <Carta tipoCarta={embaralhar[8]}/>
            <Carta tipoCarta={embaralhar[9]}/>
            <Carta tipoCarta={embaralhar[10]}/>
            <Carta tipoCarta={embaralhar[11]}/> 
        </div>
    );
}