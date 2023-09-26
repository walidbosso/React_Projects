const Calculator = function (props) {
  const [calc, setCalc] = React.useState({ // kad initialiser vars , calc homa JSON Object fih values, w set CalC fihom kan bdlo elmnts
    current: "0", // string li f input
    total: "0",
    isInitial: true, //melli kikon 0 f lowel, faqat melli kikon false kan emlo += li f input
    preOp: "" //+-*/ l3amaiat
  });

  const handleNumber = function (value) {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value; // string + int kikon concat
    }
    setCalc({ //melli kikon initial true ki ecrasi 0, maki dkholchi l if
      current: newValue, // kitbedl input CURRENT
      total: calc.total, // var useState
      isInitial: false,// sf ida kan true yrja3 false
      preOp: calc.preOp // var useState
    });
  };

  const handleOperator = function (value) {
    const total = doCalculation(); // total after calculation

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
        total = parseInt(calc.current); // =
    }
    return total;
  };

  const handleEquals = function () {
    doCalculation();
  };

  const renderDisplay = function () {
    return calc.current; // li f west div display
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
