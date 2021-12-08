function Card({texto, icono}) {
    return (
        <div class="rounded overflow-hidden shadow-md m-6">
            <div className="grid grid-cols-1 divide-y divide-gray-200">
                <div className="px-6 py-4">
                    <div className='w-8 border-2 m-2'>{icono}</div>
                    <p className="text-gray-700 text-2xl">
                        {texto}
                    </p>
                </div>
                <span>
                    <i className='far fa-clock m-2'></i>
                </span>       
            </div>   
        </div>     
    )};

export default Card;