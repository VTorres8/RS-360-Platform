import {Logo} from './components/logo/Logo';
import {Footer} from './components/footer/Footer';
import { Opciones } from './components/opciones/Opciones';
import './App.css';


const OpcionesData = [
{
    url: 'https://www.youtube.com',
    nombre: 'HR'
}, 
{
  url: 'https://www.youtube.com',
  nombre: 'CEM'
},
{
  url: 'https://www.youtube.com',
  nombre: 'Acc Services'
},
{
  url: 'https://www.youtube.com',
  nombre: 'Tax Services'
},
{
  url: 'https://www.youtube.com',
  nombre: 'Insurance Management'
},
{
  url: 'https://www.youtube.com',
  nombre: 'Bap'
},
{
  url: 'https://www.youtube.com',
  nombre: 'Customer Extended Services'
}]

export const App = () => {
  return (
    <>
      <div className="App">
        <Logo />
        <div className="opciones-container">
          {OpcionesData.map((item,index) => (
            <Opciones url={item.url} nombre={item.nombre} key={item.nombre + index}/>
          ))}
        </div>
        <Footer/>
      </div>
    
    </>
  );
}