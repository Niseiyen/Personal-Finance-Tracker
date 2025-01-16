import { Form, NavLink } from "react-router-dom";
import { TrashIcon } from '@heroicons/react/24/solid';

const Nav = ({ userName }) => {
    return (
        <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
            <NavLink to="/" aria-label="Go to home" className="flex items-center">
                <span className="text-xl font-semibold tracking-wide hover:text-yellow-500 transition duration-200">
                    HomeBud
                </span>
            </NavLink>
            {userName && (
                <Form
                    method="post"
                    action="logout"
                    onSubmit={(event) => {
                        if (!confirm("Delete user and all data?")) {
                            event.preventDefault();
                        }
                    }}
                    className="flex items-center"
                >
                    <button
                        type="submit"
                        className="relative flex items-center w-full justify-center py-2 px-6 
                                        border-2 border-black bg-black text-white font-bold text-lg rounded-md 
                                        transition duration-200 hover:bg-gray-900 hover:text-yellow-500"
                    >
                        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700"></span>
                        <span className="relative inline-flex items-center top-1 left-1">
                            Delete User <TrashIcon width={20} className="ml-1 inline-block" />
                        </span>
                    </button>
                </Form>
            )}
        </nav>
    );
};
export default Nav;