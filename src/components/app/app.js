import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [
    {name: 'Mike', salary: 600, increase: false},
    {name: 'Luke', salary: 700, increase: false},
    {name:'Anakin', salary: 1, increase: true},
    {name:'Oleg', salary: 0.111, increase: false},
    {name:'Oleg', salary: 0.111, increase: true},

  ];

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
