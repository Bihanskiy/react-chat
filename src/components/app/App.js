import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import LeftColumnContacts from '../leftColumnContacts/LeftColumnContacts';
import RightColumnMessages from '../rightColumnMessages/RightColumnMessages';

function App() {
  return (
    <ErrorBoundary>
      <div className="app left-column-open">
          <LeftColumnContacts />
          <RightColumnMessages />
        </div>
    </ErrorBoundary>
  );
}

export default App;
