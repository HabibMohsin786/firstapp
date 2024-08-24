function CardDetail ({image, productName, productPrice, onClick}){
    return(<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <img
          src={image}
          alt={productName}
          className="w-full h-48 object-cover mb-4 rounded"
        />
        <h2 className="text-2xl font-bold mb-2">{productName}</h2>
        <p className="text-lg mb-4">{productPrice}</p>
        <button
          onClick={onClick}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
      )
}

export default CardDetail;