import { useBudget } from "../contexts/BudgetContext";

export default function BudgetModeBtn() {
  const { budgetMode, setBudgetMode } = useBudget();

  let currentMode;

  const click = () => {
    budgetMode === false ? setBudgetMode(true) : setBudgetMode(false);
  };

  budgetMode === false ? (currentMode = "Activate") : (currentMode = "Deactivate");

  return (
    <button onClick={click} className="btn btn-outline-info flex-shrink-0">
      <span>{currentMode}</span> Budget Mode
    </button>
  );
}
