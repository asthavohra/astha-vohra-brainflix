import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { Route, Switch } from "react-router-dom";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
function App() {
  return (
    <div className="parent">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/videoupload" component={VideoUploadPage} />
        <Route path="/videos/:videoId" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
