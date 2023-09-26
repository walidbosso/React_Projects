const Calculator = function (props) {
  const [calc, setCalc] = React.useState({ // kad initialiser vars , calc homa JSON Object fih values, w set CalC fihom kan bdlo elmnts
    current: "0",
    total: "0",
    isInitial: true, //melli kikon 0 f lowel, faqat melli kikon false kan emlo +=
    preOp: "" }); // +-*/


  const handleNumber = function (value) {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp });

  };

  const handleOperator = function (value) {
    const total = doCalculation(); //total = total  operator qdim li mstocker fl current li f input
    //3ad set, input ki rja3 howa total li jbar mor do

    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value });

  };

  const handleClear = function () {
    setCalc({ current: "0", total: "0", isInitial: true, op: "" });
  };

  const doCalculation = function () {
    debugger;
    let total = parseInt(calc.total);

    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);}

    return total;
  };

  const handleEquals = function () {
    doCalculation();
  };

  const renderDisplay = function () {
    return calc.current;
  };

  return (
    //createElement is the normal way, there is a simpler way is to use JSX ( chof l tahet) !!!  then we just dp <div className="calcolator" mohim fhaal html nit, khass gha class tkon className onclick tkon onClick
    React.createElement("div", { className: "calculator" }, 
    React.createElement("div", { className: "display" }, renderDisplay()), 
    React.createElement(CalcButton, { value: "7", onClick: handleNumber }), 
    React.createElement(CalcButton, { value: "8", onClick: handleNumber }), 
    React.createElement(CalcButton, { value: "9", onClick: handleNumber }), 
    React.createElement(CalcButton, { className: "operator", value: "/", onClick: handleOperator }), 

    React.createElement(CalcButton, { value: "4", onClick: handleNumber }), 
    React.createElement(CalcButton, { value: "5", onClick: handleNumber }), 
    React.createElement(CalcButton, { value: "6", onClick: handleNumber }), 
    React.createElement(CalcButton, { className: "operator", value: "*", onClick: handleOperator }), 

    React.createElement(CalcButton, { value: "1", onClick: handleNumber }), 
    React.createElement(CalcButton, { value: "2", onClick: handleNumber }), 
    React.createElement(CalcButton, { value: "3", onClick: handleNumber }), 
    React.createElement(CalcButton, { className: "operator", value: "-", onClick: handleOperator }), 

    React.createElement(CalcButton, { value: "C", onClick: handleClear }), 
    React.createElement(CalcButton, { value: "0", onClick: handleNumber }), 
    React.createElement(CalcButton, { value: "=", onClick: handleOperator }), 

    React.createElement(CalcButton, { className: "operator", value: "+", onClick: handleOperator })));


};

const CalcButton = (props) => //can creew button, kan etiwlo hta className li howa equivalent d class="" f html , w kan etiw onClick
React.createElement("button", {
  className: props.className,//1 for different design d operator class=""
  onClick: () => props.onClick(props.value) },props.value);//2 for onclick attribut w kan etiw value, w value li ki t afficha f west button /button
//melli on lcik on button aymvhil calcbutton  l attrribut  on cluck w variable aykon f hundelnumber


ReactDOM.render( 
React.createElement("div", { className: "app-container" }, React.createElement(Calculator, null)), document.getElementById("root"));












/* 3iwad const name= createElement(h1, {}, "hello") li browser ki fhma, anyway u need to use 

Babel.js to do that, a translator between new features and what browser understands

https://babeljs.io/
https://babeljs.io/setup#installation
https://codepen.io/timmaclachlan/pen/jOayeeE
w jsx https://legacy.reactjs.org/docs/introducing-jsx.html dowez fiha waqt bzf
https://react.dev/learn
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> ketba f html, w baqe khask t installer b npm shof setup
const Calculator = function (props) {
  const [calc, setCalc] = React.useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: ""
  });

  const handleNumber = function (value) {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp
    });
  };

  const handleOperator = function (value) {
    const total = doCalculation();

    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value
    });
  };

  const handleClear = function () {
    setCalc({ current: "0", total: "0", isInitial: true, op: "" });
  };

  const doCalculation = function () {
    debugger;
    let total = parseInt(calc.total);

    switch (calc.preOp) {
      case "+":
        total += parseInt(calc.current);
        break;
      case "-":
        total -= parseInt(calc.current);
        break;
      case "*":
        total *= parseInt(calc.current);
        break;
      case "/":
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
    }
    return total;
  };

  const handleEquals = function () {
    doCalculation();
  };

  const renderDisplay = function () {
    return calc.current;
  };

  return (
    <div className="calculator">
      <div className="display">{renderDisplay()}</div>
      <CalcButton value="7" onClick={handleNumber} />
      <CalcButton value="8" onClick={handleNumber} />
      <CalcButton value="9" onClick={handleNumber} />
      <CalcButton className="operator" value="/" onClick={handleOperator} />

      <CalcButton value="4" onClick={handleNumber} />
      <CalcButton value="5" onClick={handleNumber} />
      <CalcButton value="6" onClick={handleNumber} />
      <CalcButton className="operator" value="*" onClick={handleOperator} />

      <CalcButton value="1" onClick={handleNumber} />
      <CalcButton value="2" onClick={handleNumber} />
      <CalcButton value="3" onClick={handleNumber} />
      <CalcButton className="operator" value="-" onClick={handleOperator} />

      <CalcButton value="C" onClick={handleClear} />
      <CalcButton value="0" onClick={handleNumber} />
      <CalcButton value="=" onClick={handleOperator} />

      <CalcButton className="operator" value="+" onClick={handleOperator} />
    </div>
  );
};

const CalcButton = (props) => (
  <button
    className={props.className}
    onClick={() => props.onClick(props.value)}
  >
    {props.value}
  </button>
);

ReactDOM.render(
  <div className="app-container">
    <Calculator />
  </div>,
  document.getElementById("root")
);

*/