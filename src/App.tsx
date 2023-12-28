import AppMuiProvider from "providers/AppMuiProvider";
import AppQueryProvider from "providers/AppQueryProvider";
import AppRouterProvider from "providers/AppRouterProvider";
import { StrictMode, type FC } from "react";

const App: FC = () => {
  return (
    <StrictMode>
      <AppQueryProvider>
        <AppMuiProvider>
          <AppRouterProvider />
        </AppMuiProvider>
      </AppQueryProvider>
    </StrictMode>
  );
};

export default App;
