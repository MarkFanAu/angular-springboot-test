import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';
import{ Employee} from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }

  private getEmployee(){
     this.employeeService.getEmployeesList().subscribe(data => {
       this.employees = data;
     })
  }

}
