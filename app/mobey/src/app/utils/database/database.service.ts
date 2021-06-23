import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  readonly databaseName = 'database.db';

  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private fileName = 'database.zip';

  constructor(
    private platform: Platform,
    private sqlite: SQLite,
    private http: HttpClient,
    private sqlitePorter: SQLitePorter,
    ) { 
    // Open database
    this.createDatabase(false);
  }

  async createDatabase(seedDatabase: boolean) {
    await this.platform
      .ready()
      .then(async () => {
        await this.sqlite
          .create({
            name: this.databaseName,
            location: 'default'
          })
          .then(async (db: SQLiteObject) => {
            this.database = db;
            if (seedDatabase) {
              await this.seedDatabase();
              console.log('create database success');
            } else {
              console.log('open database success');
            }
          })
          .catch(e => {
            alert('error ' + JSON.stringify(e));
          });
      })
      .catch(err => {
        console.error('Error createDatabase: platform: ', err);
      });
  }

  async deleteDatabase() {
    await this.platform.ready().then(async () => {
      await this.sqlite
        .deleteDatabase({
          name: this.databaseName,
          location: 'default'
        })
        .then((db: SQLiteObject) => {
          this.database = null;
          console.log('delete database success');
        })
        .catch(e => {
          alert('error ' + JSON.stringify(e));
        });
    });
  }

  async seedDatabase(sqlScript = 'script.sql') {
    await this.http
      .get(`assets/scripts/${sqlScript}`, { responseType: 'text' })
      .subscribe(async sql => {
        await this.sqlitePorter
          .importSqlToDb(this.database, sql)
          .then(_ => {
            console.log('seed database success');
            this.dbReady.next(true);
          })
          .catch(e => console.error('error seedDatabase: ', e));
      });
  }
}

