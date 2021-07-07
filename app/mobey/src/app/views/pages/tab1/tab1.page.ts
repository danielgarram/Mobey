import { Component } from '@angular/core';
import { DatabaseService } from '../../../utils/database/database.service';
import { TransactionService } from '../../../services/local/transaction/transaction.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  accountsBalance = 0;
  totalIncomes = 0;
  totalExpenses = 0;
  constructor(private transactionService: TransactionService) {}
  
  ngOnInit() {
    this.updateAll();
  }

  private updateAll() {
    this.updateIncomes();
    this.updateExpenses();
    this.updateAccountBalance();
  }

  private updateIncomes() {
    this.transactionService.getAll().then( data => {
      this.totalIncomes = 100;
    });
  }

  private updateExpenses() {
    this.transactionService.getAll().then( data => {
      this.totalExpenses = 100;
    });
  }

  private updateAccountBalance() {
    this.transactionService.getAll().then( data => {
      this.accountsBalance = 0;
    });
  }
}
