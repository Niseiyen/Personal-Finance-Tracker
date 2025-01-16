import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="flex-1 p-6 bg-white rounded-lg mb-6 
      shadow-lg border-2 border-gray-200">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Create Budget</h2>
      <fetcher.Form method="post" className="grid gap-4" ref={formRef}>
        <div className="grid gap-2">
          <label htmlFor="newBudget" className="text-sm font-medium text-gray-700">
            Budget Name
          </label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="newBudgetAmount" className="text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button
          type="submit"
          className="relative flex items-center justify-center w-full py-2 px-6 border-2 border-black bg-black text-white font-bold text-lg rounded-md transition duration-200 hover:bg-gray-900 hover:text-yellow-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span>Submitting…</span>
          ) : (
            <>
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
              <span className="relative inline-flex items-center top-1 left-1">
                Create Budget
                <CurrencyDollarIcon width={20} className="ml-1 inline-block"/>
              </span>
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
