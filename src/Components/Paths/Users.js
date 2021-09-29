import React from 'react';
import { useHistory } from "react-router-dom";
const Users = (props) => {
    let userHistory = useHistory();
    const { name, username, email, id } = props.user;
    function handleUserClick() {
        userHistory.push(`/blog/${id}`);
    }
    return (
        <div className="rounded-xl shadow-xl">
            <div className="flex flex-col p-7">
                <div className="flex flex-row">
                    <div className=" text-xs uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl line-clamp-1 hover:line-clamp-none">{name}
                    </div>
                </div>
                <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none">{username}</p>
                <p className="text-base text-gray-600 mt-1 line-clamp-2 hover:line-clamp-none">{email}</p>
                <div>
                    <button onClick={handleUserClick} className="bg-white border border-gray-400 font-semibold hover:bg-gray-100 mt-4 px-4 py-2 rounded shadow text-gray-800 w-2/3 ">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Users;