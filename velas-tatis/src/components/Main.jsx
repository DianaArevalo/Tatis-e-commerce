import React, {useState} from 'react'

import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import conjuntovelas from '../assets/conjuntovelas.jpg'
import regalos from '../assets/regalos.jpg'
import vela1 from '../assets/vela1.jpg'
import vela2 from '../assets/vela2.jpg'
import velaabundancia from '../assets/velaabundancia.jpg'
import velaamor from '../assets/velaamor.jpg'
import velacalma from '../assets/velacalma.jpg'
import velacaridad from '../assets/velacaridad.jpg'
import velaclaridad from '../assets/velaclaridad.jpg'
import veladeseo from '../assets/veladeseo.jpg'
import velaesperanza from '../assets/velaesperanza.jpg'
import velagratitud from '../assets/velagratitud.jpg'
import velahumildad from '../assets/velahumildad.jpg'
import velamorada from '../assets/velamorada.jpg'
import velanegra from '../assets/velanegra.jpg'
import velapaciencia from '../assets/velapaciencia.jpg'
import velapasion from '../assets/velapasion.jpg'
import velaprosperidad from '../assets/velaprosperidad.jpg'
import velareligiosa from '../assets/velareligiosa.jpg'
import velaroja from '../assets/velaroja.jpg'
import velasartesanales from '../assets/velasartesanales.jpg'
import velasmalu from '../assets/velasmalu.jpg'
import velitas from '../assets/velitas.jpg'



const Main = () => {
let Products = [
  {
    img:velitas,
    title: 'otras velas',
    description:'velas navideñas',
    price:3000
  },
  {
    img:conjuntovelas,
    title: 'Paquetes',
    description:'arma tu paquete',
    price:3000
  },
  {
    img:regalos,
    title: 'Paquetes',
    description:'velas regalo',
    price:3000
  },
  {
    img:vela1,
    title: 'otras velas',
    description:'unidad vela',
    price:3000
  },
  {
    img:vela2,
    title: 'velas artesanales',
    description:'vela artesanal',
    price:3000
  },
  {
    img:velaabundancia,
    title: 'vela con proposito',
    description:'vela abundancia',
    price:3000
  },
  {
    img:velaamor,
    title: 'vela con proposito',
    description:'vela amor propio',
    price:3000
  },
  {
    img:velacalma,
    title: 'vela con proposito',
    description:'vela calma',
    price:3000
  },
  {
    img:velacaridad,
    title: 'vela con proposito',
    description:'vela caridad',
    price:3000
  },
  {
    img:velaclaridad,
    title: 'vela con proposito',
    description:'vela claridad',
    price:3000
  },
  {
    img:veladeseo,
    title: 'vela con proposito',
    description:'vela deseo',
    price:3000
  },
  {
    img:velaesperanza,
    title: 'vela con proposito',
    description:'vela esperanza',
    price:3000
  },
  {
    img:velagratitud,
    title: 'vela con proposito',
    description:'vela gratitud',
    price:3000
  },
  {
    img:velahumildad,
    title: 'vela con proposito',
    description:'vela humildad',
    price:3000
  },
  {
    img:velamorada,
    title: 'vela de colores',
    description:'morada',
    price:3000
  },
  {
    img:velanegra,
    title: 'vela de colores',
    description:'negra',
    price:3000
  },
  {
    img:velapaciencia,
    title: 'vela con proposito',
    description:'vela paciencia',
    price:3000
  },
  {
    img:velapasion,
    title: 'vela con proposito',
    description:'vela amor',
    price:3000
  },
  {
    img:velaprosperidad,
    title: 'vela con proposito',
    description:'vela prosperidad',
    price:3000
  },
  {
    img:velareligiosa,
    title: 'velas religiosas',
    description:'sirio',
    price:3000
  },
  {
    img:velaroja,
    title: 'vela de colores',
    description:'roja',
    price:3000
  },
  {
    img:velasartesanales,
    title: 'velas artesanales',
    description:'velas decoradas, artesanales',
    price:3000
  },
  {
    img:velasmalu,
    title: 'otras velas',
    description:'velas malu',
    price:3000
  },
  

]

const [filteredProducts, setFilteredProducts] =useState(Products)
const searchHandler = (e) =>{
  const filteredArray = Products.filter((product)=> product.title.toLocaleLowerCase().includes(e.target.value))
  if(filteredArray.length !=0){
    setFilteredProducts(filteredArray);
  }
}

  return (
    <div className='w-full relative'>
      <div className='sticky top-0 z-10'>
        <div className='header flex justify-between items-center p-4 bg-white'>
          <h1 className='text-3xl font-bold'>Velas la Poderosa</h1>
          <h2 className='text-2xl font-bold'>Luz, Guia e Intencion </h2>
          {/* cambiar a color azul la fuente */}
          <div className="search flex justify-between items-center px-5py-2 bg-rose-100 rounded">
            <input type="text" placeholder='search product' className='bg-transparent outline-0'
            onChange={searchHandler}/>
            <button onClick={()=> searchHandler()}><CiSearch/></button>
          </div>
        </div>
        <div className="categories bg-rose-100 w-full flex justify-between space-x-8 px-2 py-10">
          <div className='bg-fuchsia-950 text-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>velas con proposito</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>velas colores</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>velas religiosas</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>arma tu paquete</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>otras velas</p>
          </div>
          <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
            <p>velas artesanales</p>
          </div>
         
        
        </div>
      </div>
      <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 -z-20">
        {filteredProducts && filteredProducts.map((product,idx)=>{
          return(
            <div key={idx} className="product h-[300px] bg-white drop-shadow-2xl p-2 border">
            <img src={product.img} alt="" className='w-full h-[60%] object-cover p-2'/>
            <div className='m-2 bg-rose-100 p-2'>
              <h1 className='text-xl font-semibold'>{product.title}</h1>
              <p className='text-sm '>{product.description}</p>
              <div className='flex justify-between items-center'>
                <p className='text-xl font-bold'>${product.price}</p>
                <CiShoppingCart size={'1.4rem'}/>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Main