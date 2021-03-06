import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.getEmployee();
  }

  private getEmployee(){
     this.employeeService.getEmployeesList().subscribe(data => {
       this.employees = data;
     })
  }

  private updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
 }

 private deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployee();
    })
  }

  private employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

}
