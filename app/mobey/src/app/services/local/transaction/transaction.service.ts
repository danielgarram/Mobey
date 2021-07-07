import { Injectable } from '@angular/core';
import { DatabaseService } from '../../../utils/database/database.service';
import { Transaction } from '../../../models/database/Transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  tableName = 'account_transaction';

  constructor(private db: DatabaseService) {}

  getAll(): Promise<Transaction[]> {
    const database = this.db.getDatabase();
    const query = `SELECT * 
                  FROM ${this.tableName}
                  ORDER BY date_created`;

    const transactions: Transaction[] = []
    return new Promise((resolve, reject) => {
      database.executeSql(query, []).then((data) => {
        if (data.rows.length > 0) {
          for( var i = 0; i < data.rows.length; i++) {
            transactions.push(data.rows.item(i))
          }
        }
        resolve(transactions);
      });
    });
  }
}
