import "./App.css";
import Header from "./Components/Header/Header";
import ThinkingLabs from "./Components/ThinkingLabs/ThinkingLabs";
import WhyWeMatter from "./Components/WhyWeMatter/WhyWeMatter";
import MainMeetups from "./Components/MainMeetups/MainMeetups";
import MainWebinars from "./Components/MainWebinars/MainWebinars";
import MainConference from "./Components/MainConference.js/MainConference";
import ListItem from "./Components/Util/ListItem";
import MainTrainings from "./Components/MainTrainings/MainTrainings";
import MessageBtn from "./Components/Header/MessageBtn";

function App() {
  return (
    <div className="App">
      <Header />

      <MessageBtn />

      <WhyWeMatter />

      <ThinkingLabs />

      <MainTrainings/>

      <MainMeetups />

      <MainWebinars />

      <MainConference />

      <ListItem title='Videos'/>

      <ListItem title='PM Speaks Series'/>

      <ListItem title='Blogs'/>

      <ListItem title='Podcasts'/>
    </div>
  );
}

export default App;
