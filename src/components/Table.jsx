import ExpenseItem from "./ExpenseItem";

const Table = ({ expenses, showBudget = true }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (header, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-center font-medium border-b-2 border-gray-300"
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="hover:bg-gray-50">
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
