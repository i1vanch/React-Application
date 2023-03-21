import GlobalStyles from './styles/GlobalStyles';
import Main from './Main';
import Bar from './Bar';



function App() {
  return (
    <div className='wrapper'>
      <GlobalStyles/>
      <div className='container'>
        <Main />
        <Bar />
      </div>
    </div>
  );
};

export default App;
