import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-700 p-4 flex flex-col bg-gray-900 bg-opacity-80 rounded-l-2xl shadow-lg'>
			<SearchInput />
			<div className='divider my-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;
