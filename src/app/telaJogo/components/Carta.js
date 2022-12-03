
export const Carta = ({tipoCarta})=>{
    return(
        <div className="carta">
            <div className='face frente' style={{backgroundImage:`url('./img/${tipoCarta}.jpg')`}}></div>
            <div className='face costas'></div>
        </div>
    );
}



