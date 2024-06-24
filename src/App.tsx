import { Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import Homepage from "./page/Connection/Homepage";
import PublishOffer from "./page/PublishOffer/PublishOffer";
import Form from "./page/PublishOffer/Form";
import Description from "./page/PublishOffer/Description";
import Field from "./page/PublishOffer/Field";
import Questions from "./page/PublishOffer/Questions";
import Finished from "./page/PublishOffer/Finished";
import CreateAccount from "./page/Connection/CreateAccount";
import Email from "./page/Connection/Forget/Email";
import Password from "./page/Connection/Forget/Password";
import Conversation from "./page/Conversation/Conversation";
import SettingPage from "./page/Settings/SettingPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<ErrorPage} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/forget/email" element={<Email />} />
        <Route path="/forget/password" element={<Password />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/publishoffer" element={<PublishOffer />} />
        <Route path="/publishoffer/form" element={<Form />} />
        <Route
          path="/publishoffer/:jobId/description"
          element={<Description />}
        />
        <Route path="/publishoffer/:jobId/fields" element={<Field />} />
        <Route path="/publishoffer/:jobId/question" element={<Questions />} />
        <Route path="/publishoffer/finished" element={<Finished />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/match" element={<SettingPage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Routes>
    </>
  );
}

export default App;
