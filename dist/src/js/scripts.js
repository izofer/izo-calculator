'use strict';
let exports = {};

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calculator = function () {
	function Calculator(el) {
		_classCallCheck(this, Calculator);

		console.log('Constructor');

		this.acum = 0;
		this.acum2 = 0;
		this.symbol;
		this.buttons = document.querySelectorAll('.boton');
		this.textField = document.querySelector('.oper');
		this.buttonsIterator();
	}

	_createClass(Calculator, [{
		key: 'buttonsIterator',
		value: function buttonsIterator(ev) {
			var _this = this;

			console.log('Wait for events || Iterator of buttons');

			var buttons = this.buttons;

			var _loop = function _loop(i) {
				buttons[i].addEventListener('click', function () {
					if (buttons[i].value == '+' || buttons[i].value == '-' || buttons[i].value == '*' || buttons[i].value == '/' || buttons[i].value == 'M%') _this.onClickSymb(buttons[i]);else if (buttons[i].value == '=') _this.onClickEqual(buttons[i]);else if (buttons[i].value == 'AC') _this.destructor(buttons[i]);else _this.onClickNum(buttons[i]);
				});
			};

			for (var i = 0; i < buttons.length; i++) {
				_loop(i);
			}
		}
	}, {
		key: 'onClickNum',
		value: function onClickNum(el) {
			console.log('event of numbers');

			if (this.textField.value == '+' || this.textField.value == '-' || this.textField.value == '*' || this.textField.value == '/' || this.textField.value == 'M%') this.textField.value = '';
			var num = el.value;
			this.textField.value += num;
			this.acum = this.textField.value;
		}
	}, {
		key: 'onClickSymb',
		value: function onClickSymb(el) {
			console.log('event of symbols');

			this.symbol = el.value;
			if (this.symbol == '+' || this.symbol == '-' || this.symbol == '*' || this.symbol == '/' || this.symbol == 'M%') {
				this.textField.value = this.symbol;
				this.acum2 = this.acum;
			}
		}
	}, {
		key: 'onClickEqual',
		value: function onClickEqual(el) {
			console.log('event of equal');

			if (this.symbol == '+') {
				console.log('add');

				var result = parseInt(this.acum) + parseInt(this.acum2);
				this.textField.value = result;
				this.acum = result;
			}
			if (this.symbol == '-') {
				console.log('subtract');

				var _result = parseInt(this.acum2) - parseInt(this.acum);
				this.textField.value = _result;
				this.acum = _result;
			}
			if (this.symbol == '*') {
				console.log('multiply');

				var _result2 = parseInt(this.acum2) * parseInt(this.acum);
				this.textField.value = _result2;
				this.acum = _result2;
			}
			if (this.symbol == '/') {
				console.log('adivide');

				var _result3 = parseInt(this.acum2) / parseInt(this.acum);
				this.textField.value = _result3;
				this.acum = _result3;
			}
			if (this.symbol == 'M%') {
				console.log('module % 2');

				var _result4 = parseInt(this.acum2) % 2;
				this.textField.value = _result4;
				this.acum = _result4;
			}
		}
	}, {
		key: 'destructor',
		value: function destructor(ev) {
			console.log('event of destructor or cleaner');

			this.acum = 0;
			this.acum2 = 0;
			this.symbol;
			this.textField.value = '';
		}
	}]);

	return Calculator;
}();

exports.default = Calculator;


var calculator = new Calculator();