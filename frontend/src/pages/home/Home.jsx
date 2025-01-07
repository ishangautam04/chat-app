import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden bg-gray-800 bg-clip-padding backdrop-blur-xl bg-opacity-60 shadow-xl'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
