# IZO-CALCULATOR

Is a basic calculator fuctional to use and you can modify it as you wish...

## Description

With IZO-CALCULATOR you can:
	
	- Add
	- Subtract
	- Multiply
	- Divide
	- Module % 2

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes or only use it. 

## Installing

You can install typing the next code in your console:

```
npm install izo-calculator
```

## Use

You can use it typing:

```
import izo-calculator from 'calculator'
or
<script type="text/javascript" src="dist/src/js/scripts.js"></script>

const calculator = new Calculator();
-----------------------------------------------------------------------

* HTML

<div id="base">
	<div id="interfaz">
		<h3>BASIC CALCULATOR</h3>
		<div id="visor">
			<input type="text" placeholder="operations" class="oper">	
		</div>
		
		<div id="botonera">
			<button class="boton" value="7">7</button>
			<button class="boton" value="8">8</button>
			<button class="boton" value="9">9</button>
			<button class="boton symbol MULT" value="*">*</button>
			<br />
			<button class="boton" value="4">4</button>
			<button class="boton" value="5">5</button>
			<button class="boton" value="6">6</button>
			<button class="boton symbol" value="/">/</button>
			<br />
			<button class="boton" value="1">1</button>
			<button class="boton" value="2">2</button>
			<button class="boton" value="3">3</button>
			<button class="boton symbol SUM" value="+">+</button>
			<br />
			<button class="boton symbol AC" value="AC">AC</button>
			<button class="boton" value="0">0</button>
			<button class="boton symbol MOD" value="M%">M%</button>
			<button class="boton symbol less" value="-">-</button>
			<br>
			<button class="boton equal" value="=">=</button>
		</div>	
	</div>	
</div>	

*CSS

*{
	padding: 0;
	margin:  0;
	font-family: tahoma;
}

body{
	background-image: url("../img/numeros.jpg");
}

#base{
    border: 0px solid red;
    background-color: #94a2af;
    border-radius: 10px;
    width: 50%;
    height: 390px;
    margin: 0 auto;
    margin-top: 10%;
}

#interfaz{
	border: 0px solid green;
    width: 90%;
    margin: 0 auto;
}
#interfaz h3{
	text-align: center;
	color: #00468b;
}
#visor{
	border: 0px solid yellow;
    width: 50%;
    margin: 0 auto;
    margin-top: 4%;
}

#botonera{
    border: 0px solid blue;
    width: 50%;
    height: auto;
    float: right;
    margin-top: 1%;
}
.oper{
    width: 70%;
    padding: 1% 1% 1% 1%;
    text-align: right;
    float: right;
}
.boton{
	padding: 4% 4% 4% 4%;
    margin-bottom: 8px;
}

.boton:hover{
	background-color: yellow;
}
.boton0{
	margin-left: 24.8%; 
}

.symbol{
    padding: 4% 4% 4% 4%;
    font-weight: bold;
    font-size: 0.6em;
}
.equal{
	width: 50%;
	margin: 0 auto;
	margin-top: 5px;
	font-weight: bold;
}
.AC{
    padding: 4% 4% 4% 1.8%;
}
.MOD{
    padding: 4% 2% 4% 1%;
}
.SUM, .MULT{
    padding: 4% 3% 4% 3.9%;
}


```
or clone [HTML](https://github.com/izofer/izo-calculator/blob/master/index.html) and [CSS](https://github.com/izofer/izo-calculator/blob/master/css/styles.css) of github

# About this project

## Built With

* Javascript
* HTML
* CSS
* Patience

## Authors

*  **...Izofer...** - [Bio](http://izofer.globso.co) - [Git](https://github.com/izofer)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/izofer/izo-calculator/blob/master/LICENSE) file for details.

## Acknowledgments

* Some friends that needed a little calculator.
* I was inspired.
* I love the code.