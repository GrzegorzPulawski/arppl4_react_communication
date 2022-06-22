
import classes from './App.module.css';
import Appbody from './componenty/Appbody';
import Navigation from './componenty/Navigation';
function App (){
  return (
    <div className={classes.App}>
        <Navigation/>
        <Appbody/>

    </div>
  );
}

export default App;
