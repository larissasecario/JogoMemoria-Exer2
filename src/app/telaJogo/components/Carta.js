
export const Carta = ({tipoCarta})=>{

    const virarCarta =(event)=>{
        const cartaSelecionada = event.target.parentNode;

        if(cartaSelecionada.className !== "virarCarta"){
             cartaSelecionada.className = 'virarCarta';
        }else{
            console.log('ja tem')

        }

       
        
       
        
        

    }

    return(
        <div className="carta" onClick={virarCarta}>
            <div className='face frente' style={{backgroundImage:`url('./img/${tipoCarta}.jpg')`}}></div>
            <div className='face costas'></div>
        </div>
    );
}



