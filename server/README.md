# Mobey API-Rest
API-rest for mobile application.

## Installation

Create virtual enviroment for python project
```bash
$ python3 -m venv .serve
```

Activate virtual enviroment
```bash
$ source .serve/bin/activate 
```

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install requirements.

```bash
$ pip3 install -r requirements.txt
```

Make migrations to local database
```bash
$ python3 manage.py makemigrations
$ python3 manage.py migrate 
```

Run django server
```bash
$ python3 manage.py runserver 
```
