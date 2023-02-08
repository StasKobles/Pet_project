import { useTheme } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/NavBar";
import { Sidebar } from "widgets/Sidebar";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
