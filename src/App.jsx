import CalculateCircleArea from "./components/calculate-circle-area/CalculateCircleArea";
import CalculateSquareArea from "./components/calculate-square-area/CalculateSquareArea";
import CalculateTriangleArea from "./components/calculate-triangle-area/CalculateTriangleArea";
import CelsiusToFahrenheit from "./components/celsius-to-fahrenheit/CelsiusToFahrenheit";
import FahrenheitToCelsius from "./components/fahrenheit-to-celsius/FahrenheitToCelsius";
import SayHello from "./components/say-hello/SayHello";
import TotalPrice from "./components/total-price/TotalPrice";
import WriteMessage from "./components/write-message/WriteMessage";

const App = () => {
	return (<>

	<SayHello name='Bea'/>
	<CalculateSquareArea side={3}/>
	<CalculateTriangleArea base={3} height={4}/>
	<CalculateCircleArea radius={3}/>
	<CelsiusToFahrenheit degrees={30}/>
	<FahrenheitToCelsius degrees={27}/>
	<TotalPrice price={23}/>
	<WriteMessage name='Carlos' material='cartón' size='20x15' note='No te olvides'/>
	</>
	)

};

export default App;
