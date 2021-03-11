// import CountButton from './CountButton'
import './App.css';
// // import Array1 from './Array1'
// import Array2 from './Array2'
// import App1 from './App1'?
// import Array5 from './Array5'
// import TextBox8 from './TextBox8'
import App3 from './App3'
import ButtonCount from './ButtonCount'



function App() {
  return( 
    <div className="App">
     {/* <Array1 />
     <App1 />
     <Array2 />
     <CountButton />  */}
     {/* <TextBox1 />
     <Array3 />
     <Array4 /> 
     <App4 />  */}
     {/* <TextBox8 /> */}
     {/* <Array5 /> */}
     <App3 />
     <ButtonCount incrementBy={2}/>
     <ButtonCount incrementBy={12}/>

    </div>
  );
}

export default App;
