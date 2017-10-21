export default class Calculator
{
	constructor(el)
	{
		console.log('Constructor');

		this.acum  = 0;
		this.acum2 = 0;
		this.symbol;
		this.buttons   = document.querySelectorAll('.boton');
		this.textField = document.querySelector('.oper');
		this.buttonsIterator();
	}

	buttonsIterator(ev)
	{
		console.log('Wait for events || Iterator of buttons');

		const buttons = this.buttons;
		for(let i = 0; i < buttons.length; i++)
		{
			buttons[i].addEventListener('click', () => {
				if(buttons[i].value == '+' || buttons[i].value == '-' || buttons[i].value == '*' || buttons[i].value == '/' || buttons[i].value == 'M%') this.onClickSymb(buttons[i]);
				else if(buttons[i].value == '=')  this.onClickEqual(buttons[i]);  
				else if(buttons[i].value == 'AC') this.destructor(buttons[i]);
				else this.onClickNum(buttons[i]);
			});
		}	
	}

	onClickNum(el)
	{	
		console.log('event of numbers');

		if(this.textField.value == '+' || this.textField.value == '-' || this.textField.value == '*' || this.textField.value == '/' || this.textField.value == 'M%' ) this.textField.value = ''; 
		let num  = el.value;
		this.textField.value += num;
		this.acum  = this.textField.value;
	}

	onClickSymb(el)
	{
		console.log('event of symbols');

		this.symbol = el.value;
		if(this.symbol == '+' || this.symbol == '-' || this.symbol == '*' || this.symbol == '/' || this.symbol == 'M%')
		{
			this.textField.value = this.symbol;
			this.acum2 = this.acum;
		}		
	}

	onClickEqual(el)
	{
		console.log('event of equal');

		if(this.symbol == '+')
		{
			console.log('add');

			let result = parseInt(this.acum) + parseInt(this.acum2);
			this.textField.value = result;
			this.acum = result;
		}
		if(this.symbol == '-')
		{
			console.log('subtract');

			let result = parseInt(this.acum2) - parseInt(this.acum);
			this.textField.value = result;
			this.acum = result;
		}
		if(this.symbol == '*')
		{
			console.log('multiply');

			let result = parseInt(this.acum2) * parseInt(this.acum);
			this.textField.value = result;
			this.acum = result;
		}
		if(this.symbol == '/')
		{
			console.log('adivide');

			let result = parseInt(this.acum2) / parseInt(this.acum);
			this.textField.value = result;
			this.acum = result;
		}
		if(this.symbol == 'M%')
		{
			console.log('module % 2');

			let result = parseInt(this.acum2) % 2;
			this.textField.value = result;
			this.acum = result;
		}	
	}

	destructor(ev)
	{
		console.log('event of destructor or cleaner');

		this.acum  = 0;
		this.acum2 = 0;
		this.symbol;
		this.textField.value = '';
	}
}

const calculator  = new Calculator();