// форми
import LoginForm from "../formpr3/form";
import FeedbackForm from "../formpr3/prformick";
import Searchbar from "../formpr3/searchbar"

export default function Pr3() {
    
    // const handelSubmit = (newUser) => {
        // гарно коли event.value залишається в компонені, а його змінити на нейтральний аргумент 
        // console.log("newText", newUser);
    // }
    
    return (
      <>
        <h2>Hello</h2>
        <FeedbackForm/>
        {/* приклад неконтрольованої form */}
        {/* <LoginForm onSubmitClick={handelSubmit} /> */}
        {/* приклад контрельованого input */}
        {/* <Searchbar/> */}
      </>
    );
}




