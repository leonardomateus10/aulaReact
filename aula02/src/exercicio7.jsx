export default function Exercicio7({ celsius }) {

    let fahrenheit = (celsius * 9 / 5) + 32;
  
    let kelvin = celsius + 273.15;
  
    return (
      < div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', margin: '10px 0' }}>
         {celsius.toFixed(1)}°C equivale a {fahrenheit.toFixed(1)}°F e {kelvin.toFixed(1)}K.
       
      </div>
    );
  } 