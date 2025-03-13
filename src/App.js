import MultiLevel from "./Dropdown Components/Multilevel";
import dropdownData from "./Dropdown Components/DropdownData";

function App() {
  return (
   <>
   
   <h2>Multi-Level Dropdowns</h2>
      <MultiLevel options={dropdownData} placeholder="Disposition ▼" />
   
   </>
  );
}

export default App;
