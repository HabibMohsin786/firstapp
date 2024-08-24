
function Card({image="", title="-", price="-", onClick, id}) {
    return (
        <>
        <div id={id} className="lg:w-1/4 md:w-1/2 p-4 w-full"  onClick={onClick}>
            <a className="block relative h-48 rounded overflow-hidden">
                <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={image}
                />
            </a>
            <div className="mt-4">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title}
                </h2>
                <p className="mt-1">{price}</p>
            </div>
        </div>
        </>
    )
}
export default Card;