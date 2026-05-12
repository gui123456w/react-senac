import {Square, Circle } from '@/app/components/geo'

const Page = () => {
  return (
    <div className="p-4">
      <h1>Bem vindo ao Nosso React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Square />

      <Circle />
    </div>
  )
}

export default Page