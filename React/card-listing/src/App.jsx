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
    <div className=" min-h-screen bg-slate-400">
      <h1 className="text-3xl font-bold text-center py-6 text-[#200f47]">PlayList</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        <Card title="Sweet Child O'Mine" artist="Guns N'Roses" cover="/download.jpeg" />
        <Card title="Comfortably Numb" artist="Pink Floyd" cover="/pink.jpeg"/>
        <Card title="Quietly Yours" artist="Birdy" cover="/birdy.jpeg"/>
      </div>
      
    </div>
  )
}

export default App
