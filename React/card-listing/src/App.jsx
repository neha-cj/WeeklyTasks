const Card= ({title, artist, cover}) =>{
  return(
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img src={cover} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{artist}</p>
      </div>
    </div>
  )
}

function App() {

  return (
    <div>
      <Card title="Sweet Child O'Mine" artist="Guns N'Roses" cover=""/>
      <Card title="Comfortably Numb" artist="Pink Floyd" cover=""/>
      <Card title="Quietly Yours" artist="Birdy" cover=""/>
    </div>
  )
}

export default App
