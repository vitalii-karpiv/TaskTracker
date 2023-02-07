import Header from "./Header";
import Tasks from "./Tasks";
import Footer from "./Footer";

const App = () => {
    const tasks = [
        {
            text: "Go shopping",
            day: "Feb 03 2023",
            reminder: false
        },
        {
            text: "Learn React",
            day: "Jun 03 2023",
            reminder: false
        },
        {
            text: "Visit doctor",
            day: "Feb 05 2023",
            reminder: false
        }
    ]

    return (
        <div className="container">
            <Header/>
            <Tasks tasks={tasks}/>
            <Footer/>
        </div>
    );
}

export default App;
