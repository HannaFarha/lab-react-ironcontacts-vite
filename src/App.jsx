import "./App.css";
import contact from "./contacts.json" 


function App() {
  const[contacts,setContacts]= useState(contact);
  return (
    <div className="App">
      <table>
        <tr>
            <th>contacts.picture</th>
            
        </tr>
        <tr>
            <td>contacts.name</td>
            
        </tr>
        {contacts.winEmmy && <tr>
            <td>contacts.winEmmy</td>
            
        </tr>}
        <tr>
            <td>contacts.winEmmy</td>
            <td>contacts.winEmmy</td>
        </tr>
    </table>
    </div>
  );
}

export default App;
